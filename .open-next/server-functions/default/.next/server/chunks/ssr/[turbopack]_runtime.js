const RUNTIME_PUBLIC_PATH = "server/chunks/ssr/[turbopack]_runtime.js";
const RELATIVE_ROOT_PATH = "..";
const ASSET_PREFIX = "/_next/";
/**
 * This file contains runtime types and functions that are shared between all
 * TurboPack ECMAScript runtimes.
 *
 * It will be prepended to the runtime code of each runtime.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-types.d.ts" />
const REEXPORTED_OBJECTS = new WeakMap();
/**
 * Constructs the `__turbopack_context__` object for a module.
 */ function Context(module, exports) {
    this.m = module;
    // We need to store this here instead of accessing it from the module object to:
    // 1. Make it available to factories directly, since we rewrite `this` to
    //    `__turbopack_context__.e` in CJS modules.
    // 2. Support async modules which rewrite `module.exports` to a promise, so we
    //    can still access the original exports object from functions like
    //    `esmExport`
    // Ideally we could find a new approach for async modules and drop this property altogether.
    this.e = exports;
}
const contextPrototype = Context.prototype;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;
function defineProp(obj, name, options) {
    if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
}
function getOverwrittenModule(moduleCache, id) {
    let module = moduleCache[id];
    if (!module) {
        // This is invoked when a module is merged into another module, thus it wasn't invoked via
        // instantiateModule and the cache entry wasn't created yet.
        module = createModuleObject(id);
        moduleCache[id] = module;
    }
    return module;
}
/**
 * Creates the module object. Only done here to ensure all module objects have the same shape.
 */ function createModuleObject(id) {
    return {
        exports: {},
        error: undefined,
        id,
        namespaceObject: undefined
    };
}
const BindingTag_Value = 0;
/**
 * Adds the getters to the exports object.
 */ function esm(exports, bindings) {
    defineProp(exports, '__esModule', {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: 'Module'
    });
    let i = 0;
    while(i < bindings.length){
        const propName = bindings[i++];
        const tagOrFunction = bindings[i++];
        if (typeof tagOrFunction === 'number') {
            if (tagOrFunction === BindingTag_Value) {
                defineProp(exports, propName, {
                    value: bindings[i++],
                    enumerable: true,
                    writable: false
                });
            } else {
                throw new Error(`unexpected tag: ${tagOrFunction}`);
            }
        } else {
            const getterFn = tagOrFunction;
            if (typeof bindings[i] === 'function') {
                const setterFn = bindings[i++];
                defineProp(exports, propName, {
                    get: getterFn,
                    set: setterFn,
                    enumerable: true
                });
            } else {
                defineProp(exports, propName, {
                    get: getterFn,
                    enumerable: true
                });
            }
        }
    }
    Object.seal(exports);
}
/**
 * Makes the module an ESM with exports
 */ function esmExport(bindings, id) {
    let module;
    let exports;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    } else {
        module = this.m;
        exports = this.e;
    }
    module.namespaceObject = exports;
    esm(exports, bindings);
}
contextPrototype.s = esmExport;
function ensureDynamicExports(module, exports) {
    let reexportedObjects = REEXPORTED_OBJECTS.get(module);
    if (!reexportedObjects) {
        REEXPORTED_OBJECTS.set(module, reexportedObjects = []);
        module.exports = module.namespaceObject = new Proxy(exports, {
            get (target, prop) {
                if (hasOwnProperty.call(target, prop) || prop === 'default' || prop === '__esModule') {
                    return Reflect.get(target, prop);
                }
                for (const obj of reexportedObjects){
                    const value = Reflect.get(obj, prop);
                    if (value !== undefined) return value;
                }
                return undefined;
            },
            ownKeys (target) {
                const keys = Reflect.ownKeys(target);
                for (const obj of reexportedObjects){
                    for (const key of Reflect.ownKeys(obj)){
                        if (key !== 'default' && !keys.includes(key)) keys.push(key);
                    }
                }
                return keys;
            }
        });
    }
    return reexportedObjects;
}
/**
 * Dynamically exports properties from an object
 */ function dynamicExport(object, id) {
    let module;
    let exports;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    } else {
        module = this.m;
        exports = this.e;
    }
    const reexportedObjects = ensureDynamicExports(module, exports);
    if (typeof object === 'object' && object !== null) {
        reexportedObjects.push(object);
    }
}
contextPrototype.j = dynamicExport;
function exportValue(value, id) {
    let module;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    } else {
        module = this.m;
    }
    module.exports = value;
}
contextPrototype.v = exportValue;
function exportNamespace(namespace, id) {
    let module;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    } else {
        module = this.m;
    }
    module.exports = module.namespaceObject = namespace;
}
contextPrototype.n = exportNamespace;
function createGetter(obj, key) {
    return ()=>obj[key];
}
/**
 * @returns prototype of the object
 */ const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
/** Prototypes that are not expanded for exports */ const LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
/**
 * @param raw
 * @param ns
 * @param allowExportDefault
 *   * `false`: will have the raw module as default export
 *   * `true`: will have the default property as default export
 */ function interopEsm(raw, ns, allowExportDefault) {
    const bindings = [];
    let defaultLocation = -1;
    for(let current = raw; (typeof current === 'object' || typeof current === 'function') && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        for (const key of Object.getOwnPropertyNames(current)){
            bindings.push(key, createGetter(raw, key));
            if (defaultLocation === -1 && key === 'default') {
                defaultLocation = bindings.length - 1;
            }
        }
    }
    // this is not really correct
    // we should set the `default` getter if the imported module is a `.cjs file`
    if (!(allowExportDefault && defaultLocation >= 0)) {
        // Replace the binding with one for the namespace itself in order to preserve iteration order.
        if (defaultLocation >= 0) {
            // Replace the getter with the value
            bindings.splice(defaultLocation, 1, BindingTag_Value, raw);
        } else {
            bindings.push('default', BindingTag_Value, raw);
        }
    }
    esm(ns, bindings);
    return ns;
}
function createNS(raw) {
    if (typeof raw === 'function') {
        return function(...args) {
            return raw.apply(this, args);
        };
    } else {
        return Object.create(null);
    }
}
function esmImport(id) {
    const module = getOrInstantiateModuleFromParent(id, this.m);
    // any ES module has to have `module.namespaceObject` defined.
    if (module.namespaceObject) return module.namespaceObject;
    // only ESM can be an async module, so we don't need to worry about exports being a promise here.
    const raw = module.exports;
    return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
}
contextPrototype.i = esmImport;
function asyncLoader(moduleId) {
    const loader = this.r(moduleId);
    return loader(esmImport.bind(this));
}
contextPrototype.A = asyncLoader;
// Add a simple runtime require so that environments without one can still pass
// `typeof require` CommonJS checks so that exports are correctly registered.
const runtimeRequire = // @ts-ignore
typeof require === 'function' ? require : function require1() {
    throw new Error('Unexpected use of runtime require');
};
contextPrototype.t = runtimeRequire;
function commonJsRequire(id) {
    return getOrInstantiateModuleFromParent(id, this.m).exports;
}
contextPrototype.r = commonJsRequire;
/**
 * `require.context` and require/import expression runtime.
 */ function moduleContext(map) {
    function moduleContext(id) {
        if (hasOwnProperty.call(map, id)) {
            return map[id].module();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    }
    moduleContext.keys = ()=>{
        return Object.keys(map);
    };
    moduleContext.resolve = (id)=>{
        if (hasOwnProperty.call(map, id)) {
            return map[id].id();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    };
    moduleContext.import = async (id)=>{
        return await moduleContext(id);
    };
    return moduleContext;
}
contextPrototype.f = moduleContext;
/**
 * Returns the path of a chunk defined by its data.
 */ function getChunkPath(chunkData) {
    return typeof chunkData === 'string' ? chunkData : chunkData.path;
}
function isPromise(maybePromise) {
    return maybePromise != null && typeof maybePromise === 'object' && 'then' in maybePromise && typeof maybePromise.then === 'function';
}
function isAsyncModuleExt(obj) {
    return turbopackQueues in obj;
}
function createPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        reject = rej;
        resolve = res;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
// Load the CompressedmoduleFactories of a chunk into the `moduleFactories` Map.
// The CompressedModuleFactories format is
// - 1 or more module ids
// - a module factory function
// So walking this is a little complex but the flat structure is also fast to
// traverse, we can use `typeof` operators to distinguish the two cases.
function installCompressedModuleFactories(chunkModules, offset, moduleFactories, newModuleId) {
    let i = offset;
    while(i < chunkModules.length){
        let moduleId = chunkModules[i];
        let end = i + 1;
        // Find our factory function
        while(end < chunkModules.length && typeof chunkModules[end] !== 'function'){
            end++;
        }
        if (end === chunkModules.length) {
            throw new Error('malformed chunk format, expected a factory function');
        }
        // Each chunk item has a 'primary id' and optional additional ids. If the primary id is already
        // present we know all the additional ids are also present, so we don't need to check.
        if (!moduleFactories.has(moduleId)) {
            const moduleFactoryFn = chunkModules[end];
            applyModuleFactoryName(moduleFactoryFn);
            newModuleId?.(moduleId);
            for(; i < end; i++){
                moduleId = chunkModules[i];
                moduleFactories.set(moduleId, moduleFactoryFn);
            }
        }
        i = end + 1; // end is pointing at the last factory advance to the next id or the end of the array.
    }
}
// everything below is adapted from webpack
// https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
const turbopackQueues = Symbol('turbopack queues');
const turbopackExports = Symbol('turbopack exports');
const turbopackError = Symbol('turbopack error');
function resolveQueue(queue) {
    if (queue && queue.status !== 1) {
        queue.status = 1;
        queue.forEach((fn)=>fn.queueCount--);
        queue.forEach((fn)=>fn.queueCount-- ? fn.queueCount++ : fn());
    }
}
function wrapDeps(deps) {
    return deps.map((dep)=>{
        if (dep !== null && typeof dep === 'object') {
            if (isAsyncModuleExt(dep)) return dep;
            if (isPromise(dep)) {
                const queue = Object.assign([], {
                    status: 0
                });
                const obj = {
                    [turbopackExports]: {},
                    [turbopackQueues]: (fn)=>fn(queue)
                };
                dep.then((res)=>{
                    obj[turbopackExports] = res;
                    resolveQueue(queue);
                }, (err)=>{
                    obj[turbopackError] = err;
                    resolveQueue(queue);
                });
                return obj;
            }
        }
        return {
            [turbopackExports]: dep,
            [turbopackQueues]: ()=>{}
        };
    });
}
function asyncModule(body, hasAwait) {
    const module = this.m;
    const queue = hasAwait ? Object.assign([], {
        status: -1
    }) : undefined;
    const depQueues = new Set();
    const { resolve, reject, promise: rawPromise } = createPromise();
    const promise = Object.assign(rawPromise, {
        [turbopackExports]: module.exports,
        [turbopackQueues]: (fn)=>{
            queue && fn(queue);
            depQueues.forEach(fn);
            promise['catch'](()=>{});
        }
    });
    const attributes = {
        get () {
            return promise;
        },
        set (v) {
            // Calling `esmExport` leads to this.
            if (v !== promise) {
                promise[turbopackExports] = v;
            }
        }
    };
    Object.defineProperty(module, 'exports', attributes);
    Object.defineProperty(module, 'namespaceObject', attributes);
    function handleAsyncDependencies(deps) {
        const currentDeps = wrapDeps(deps);
        const getResult = ()=>currentDeps.map((d)=>{
                if (d[turbopackError]) throw d[turbopackError];
                return d[turbopackExports];
            });
        const { promise, resolve } = createPromise();
        const fn = Object.assign(()=>resolve(getResult), {
            queueCount: 0
        });
        function fnQueue(q) {
            if (q !== queue && !depQueues.has(q)) {
                depQueues.add(q);
                if (q && q.status === 0) {
                    fn.queueCount++;
                    q.push(fn);
                }
            }
        }
        currentDeps.map((dep)=>dep[turbopackQueues](fnQueue));
        return fn.queueCount ? promise : getResult();
    }
    function asyncResult(err) {
        if (err) {
            reject(promise[turbopackError] = err);
        } else {
            resolve(promise[turbopackExports]);
        }
        resolveQueue(queue);
    }
    body(handleAsyncDependencies, asyncResult);
    if (queue && queue.status === -1) {
        queue.status = 0;
    }
}
contextPrototype.a = asyncModule;
/**
 * A pseudo "fake" URL object to resolve to its relative path.
 *
 * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
 * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
 * hydration mismatch.
 *
 * This is based on webpack's existing implementation:
 * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
 */ const relativeURL = function relativeURL(inputUrl) {
    const realUrl = new URL(inputUrl, 'x:/');
    const values = {};
    for(const key in realUrl)values[key] = realUrl[key];
    values.href = inputUrl;
    values.pathname = inputUrl.replace(/[?#].*/, '');
    values.origin = values.protocol = '';
    values.toString = values.toJSON = (..._args)=>inputUrl;
    for(const key in values)Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        value: values[key]
    });
};
relativeURL.prototype = URL.prototype;
contextPrototype.U = relativeURL;
/**
 * Utility function to ensure all variants of an enum are handled.
 */ function invariant(never, computeMessage) {
    throw new Error(`Invariant: ${computeMessage(never)}`);
}
/**
 * A stub function to make `require` available but non-functional in ESM.
 */ function requireStub(_moduleId) {
    throw new Error('dynamic usage of require is not supported');
}
contextPrototype.z = requireStub;
// Make `globalThis` available to the module in a way that cannot be shadowed by a local variable.
contextPrototype.g = globalThis;
function applyModuleFactoryName(factory) {
    // Give the module factory a nice name to improve stack traces.
    Object.defineProperty(factory, 'name', {
        value: '__TURBOPACK__module__evaluation__'
    });
}
/* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../shared/runtime-utils.ts" />
/// A 'base' utilities to support runtime can have externals.
/// Currently this is for node.js / edge runtime both.
/// If a fn requires node.js specific behavior, it should be placed in `node-external-utils` instead.
async function externalImport(id) {
    let raw;
    try {
        switch (id) {
  case "next/dist/compiled/@vercel/og/index.node.js":
    raw = await import("next/dist/compiled/@vercel/og/index.edge.js");
    break;
  default:
    raw = await import(id);
};
    } catch (err) {
        // TODO(alexkirsz) This can happen when a client-side module tries to load
        // an external module we don't provide a shim for (e.g. querystring, url).
        // For now, we fail semi-silently, but in the future this should be a
        // compilation error.
        throw new Error(`Failed to load external module ${id}: ${err}`);
    }
    if (raw && raw.__esModule && raw.default && 'default' in raw.default) {
        return interopEsm(raw.default, createNS(raw), true);
    }
    return raw;
}
contextPrototype.y = externalImport;
function externalRequire(id, thunk, esm = false) {
    let raw;
    try {
        raw = thunk();
    } catch (err) {
        // TODO(alexkirsz) This can happen when a client-side module tries to load
        // an external module we don't provide a shim for (e.g. querystring, url).
        // For now, we fail semi-silently, but in the future this should be a
        // compilation error.
        throw new Error(`Failed to load external module ${id}: ${err}`);
    }
    if (!esm || raw.__esModule) {
        return raw;
    }
    return interopEsm(raw, createNS(raw), true);
}
externalRequire.resolve = (id, options)=>{
    return require.resolve(id, options);
};
contextPrototype.x = externalRequire;
/* eslint-disable @typescript-eslint/no-unused-vars */ const path = require('path');
const relativePathToRuntimeRoot = path.relative(RUNTIME_PUBLIC_PATH, '.');
// Compute the relative path to the `distDir`.
const relativePathToDistRoot = path.join(relativePathToRuntimeRoot, RELATIVE_ROOT_PATH);
const RUNTIME_ROOT = path.resolve(__filename, relativePathToRuntimeRoot);
// Compute the absolute path to the root, by stripping distDir from the absolute path to this file.
const ABSOLUTE_ROOT = path.resolve(__filename, relativePathToDistRoot);
/**
 * Returns an absolute path to the given module path.
 * Module path should be relative, either path to a file or a directory.
 *
 * This fn allows to calculate an absolute path for some global static values, such as
 * `__dirname` or `import.meta.url` that Turbopack will not embeds in compile time.
 * See ImportMetaBinding::code_generation for the usage.
 */ function resolveAbsolutePath(modulePath) {
    if (modulePath) {
        return path.join(ABSOLUTE_ROOT, modulePath);
    }
    return ABSOLUTE_ROOT;
}
Context.prototype.P = resolveAbsolutePath;
/* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../shared/runtime-utils.ts" />
function readWebAssemblyAsResponse(path) {
    const { createReadStream } = require('fs');
    const { Readable } = require('stream');
    const stream = createReadStream(path);
    // @ts-ignore unfortunately there's a slight type mismatch with the stream.
    return new Response(Readable.toWeb(stream), {
        headers: {
            'content-type': 'application/wasm'
        }
    });
}
async function compileWebAssemblyFromPath(path) {
    const response = readWebAssemblyAsResponse(path);
    return await WebAssembly.compileStreaming(response);
}
async function instantiateWebAssemblyFromPath(path, importsObj) {
    const response = readWebAssemblyAsResponse(path);
    const { instance } = await WebAssembly.instantiateStreaming(response, importsObj);
    return instance.exports;
}
/* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../shared/runtime-utils.ts" />
/// <reference path="../shared-node/base-externals-utils.ts" />
/// <reference path="../shared-node/node-externals-utils.ts" />
/// <reference path="../shared-node/node-wasm-utils.ts" />
var SourceType = /*#__PURE__*/ function(SourceType) {
    /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   * SourceData is a ChunkPath.
   */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
    /**
   * The module was instantiated because a parent module imported it.
   * SourceData is a ModuleId.
   */ SourceType[SourceType["Parent"] = 1] = "Parent";
    return SourceType;
}(SourceType || {});
process.env.TURBOPACK = '1';
const nodeContextPrototype = Context.prototype;
const url = require('url');
const moduleFactories = new Map();
nodeContextPrototype.M = moduleFactories;
const moduleCache = Object.create(null);
nodeContextPrototype.c = moduleCache;
/**
 * Returns an absolute path to the given module's id.
 */ function resolvePathFromModule(moduleId) {
    const exported = this.r(moduleId);
    const exportedPath = exported?.default ?? exported;
    if (typeof exportedPath !== 'string') {
        return exported;
    }
    const strippedAssetPrefix = exportedPath.slice(ASSET_PREFIX.length);
    const resolved = path.resolve(RUNTIME_ROOT, strippedAssetPrefix);
    return url.pathToFileURL(resolved).href;
}
nodeContextPrototype.R = resolvePathFromModule;
function loadRuntimeChunk(sourcePath, chunkData) {
    if (typeof chunkData === 'string') {
        loadRuntimeChunkPath(sourcePath, chunkData);
    } else {
        loadRuntimeChunkPath(sourcePath, chunkData.path);
    }
}
const loadedChunks = new Set();
const unsupportedLoadChunk = Promise.resolve(undefined);
const loadedChunk = Promise.resolve(undefined);
const chunkCache = new Map();
function clearChunkCache() {
    chunkCache.clear();
}
function loadRuntimeChunkPath(sourcePath, chunkPath) {
    if (!isJs(chunkPath)) {
        // We only support loading JS chunks in Node.js.
        // This branch can be hit when trying to load a CSS chunk.
        return;
    }
    if (loadedChunks.has(chunkPath)) {
        return;
    }
    try {
        const resolved = path.resolve(RUNTIME_ROOT, chunkPath);
        const chunkModules = requireChunk(chunkPath);
        installCompressedModuleFactories(chunkModules, 0, moduleFactories);
        loadedChunks.add(chunkPath);
    } catch (e) {
        let errorMessage = `Failed to load chunk ${chunkPath}`;
        if (sourcePath) {
            errorMessage += ` from runtime for chunk ${sourcePath}`;
        }
        throw new Error(errorMessage, {
            cause: e
        });
    }
}
function loadChunkAsync(chunkData) {
    const chunkPath = typeof chunkData === 'string' ? chunkData : chunkData.path;
    if (!isJs(chunkPath)) {
        // We only support loading JS chunks in Node.js.
        // This branch can be hit when trying to load a CSS chunk.
        return unsupportedLoadChunk;
    }
    let entry = chunkCache.get(chunkPath);
    if (entry === undefined) {
        try {
            // resolve to an absolute path to simplify `require` handling
            const resolved = path.resolve(RUNTIME_ROOT, chunkPath);
            // TODO: consider switching to `import()` to enable concurrent chunk loading and async file io
            // However this is incompatible with hot reloading (since `import` doesn't use the require cache)
            const chunkModules = requireChunk(chunkPath);
            installCompressedModuleFactories(chunkModules, 0, moduleFactories);
            entry = loadedChunk;
        } catch (e) {
            const errorMessage = `Failed to load chunk ${chunkPath} from module ${this.m.id}`;
            // Cache the failure promise, future requests will also get this same rejection
            entry = Promise.reject(new Error(errorMessage, {
                cause: e
            }));
        }
        chunkCache.set(chunkPath, entry);
    }
    // TODO: Return an instrumented Promise that React can use instead of relying on referential equality.
    return entry;
}
contextPrototype.l = loadChunkAsync;
function loadChunkAsyncByUrl(chunkUrl) {
    const path1 = url.fileURLToPath(new URL(chunkUrl, RUNTIME_ROOT));
    return loadChunkAsync.call(this, path1);
}
contextPrototype.L = loadChunkAsyncByUrl;
async function loadWebAssembly(chunkPath, _edgeModule, imports) {
  const mod = await loadWasmChunk(chunkPath);
  const { exports } = await WebAssembly.instantiate(mod, imports);
  return exports;
}
contextPrototype.w = loadWebAssembly;
function loadWebAssemblyModule(chunkPath, _edgeModule) {
  return loadWasmChunk(chunkPath);
}
contextPrototype.u = loadWebAssemblyModule;
function getWorkerBlobURL(_chunks) {
    throw new Error('Worker blobs are not implemented yet for Node.js');
}
nodeContextPrototype.b = getWorkerBlobURL;
function instantiateModule(id, sourceType, sourceData) {
    const moduleFactory = moduleFactories.get(id);
    if (typeof moduleFactory !== 'function') {
        // This can happen if modules incorrectly handle HMR disposes/updates,
        // e.g. when they keep a `setTimeout` around which still executes old code
        // and contains e.g. a `require("something")` call.
        let instantiationReason;
        switch(sourceType){
            case 0:
                instantiationReason = `as a runtime entry of chunk ${sourceData}`;
                break;
            case 1:
                instantiationReason = `because it was required from module ${sourceData}`;
                break;
            default:
                invariant(sourceType, (sourceType)=>`Unknown source type: ${sourceType}`);
        }
        throw new Error(`Module ${id} was instantiated ${instantiationReason}, but the module factory is not available.`);
    }
    const module1 = createModuleObject(id);
    const exports = module1.exports;
    moduleCache[id] = module1;
    const context = new Context(module1, exports);
    // NOTE(alexkirsz) This can fail when the module encounters a runtime error.
    try {
        moduleFactory(context, module1, exports);
    } catch (error) {
        module1.error = error;
        throw error;
    }
    module1.loaded = true;
    if (module1.namespaceObject && module1.exports !== module1.namespaceObject) {
        // in case of a circular dependency: cjs1 -> esm2 -> cjs1
        interopEsm(module1.exports, module1.namespaceObject);
    }
    return module1;
}
/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 */ // @ts-ignore
function getOrInstantiateModuleFromParent(id, sourceModule) {
    const module1 = moduleCache[id];
    if (module1) {
        if (module1.error) {
            throw module1.error;
        }
        return module1;
    }
    return instantiateModule(id, 1, sourceModule.id);
}
/**
 * Instantiates a runtime module.
 */ function instantiateRuntimeModule(chunkPath, moduleId) {
    return instantiateModule(moduleId, 0, chunkPath);
}
/**
 * Retrieves a module from the cache, or instantiate it as a runtime module if it is not cached.
 */ // @ts-ignore TypeScript doesn't separate this module space from the browser runtime
function getOrInstantiateRuntimeModule(chunkPath, moduleId) {
    const module1 = moduleCache[moduleId];
    if (module1) {
        if (module1.error) {
            throw module1.error;
        }
        return module1;
    }
    return instantiateRuntimeModule(chunkPath, moduleId);
}
const regexJsUrl = /\.js(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .js, optionally followed by ?query or #fragment.
 */ function isJs(chunkUrlOrPath) {
    return regexJsUrl.test(chunkUrlOrPath);
}
module.exports = (sourcePath)=>({
        m: (id)=>getOrInstantiateRuntimeModule(sourcePath, id),
        c: (chunkData)=>loadRuntimeChunk(sourcePath, chunkData)
    });


//# sourceMappingURL=%5Bturbopack%5D_runtime.js.map

  function requireChunk(chunkPath) {
    switch(chunkPath) {
      case "server/chunks/ssr/72740_next_dist_07d8e787._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_07d8e787._.js");
      case "server/chunks/ssr/72740_next_dist_5afe7f47._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_5afe7f47._.js");
      case "server/chunks/ssr/72740_next_dist_89aeaa54._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_89aeaa54._.js");
      case "server/chunks/ssr/72740_next_dist_client_components_3df277ea._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_client_components_3df277ea._.js");
      case "server/chunks/ssr/72740_next_dist_client_components_builtin_forbidden_f784b946.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_client_components_builtin_forbidden_f784b946.js");
      case "server/chunks/ssr/72740_next_dist_compiled_4f0dfd25._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_compiled_4f0dfd25._.js");
      case "server/chunks/ssr/72740_next_dist_esm_65570cfc._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_esm_65570cfc._.js");
      case "server/chunks/ssr/72740_next_dist_esm_7b4b49f6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_esm_7b4b49f6._.js");
      case "server/chunks/ssr/72740_next_dist_esm_build_templates_app-page_3c2d2fd8.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_esm_build_templates_app-page_3c2d2fd8.js");
      case "server/chunks/ssr/72740_next_dist_esm_ec552f69._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_esm_ec552f69._.js");
      case "server/chunks/ssr/72740_next_dist_f77d8c2c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_f77d8c2c._.js");
      case "server/chunks/ssr/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js");
      case "server/chunks/ssr/[root-of-the-server]__2b7f36f4._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__2b7f36f4._.js");
      case "server/chunks/ssr/[root-of-the-server]__2befafc6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__2befafc6._.js");
      case "server/chunks/ssr/[root-of-the-server]__89b6cd5d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__89b6cd5d._.js");
      case "server/chunks/ssr/[root-of-the-server]__cb2a0907._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__cb2a0907._.js");
      case "server/chunks/ssr/[root-of-the-server]__ef2e315a._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__ef2e315a._.js");
      case "server/chunks/ssr/[root-of-the-server]__f97a4843._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__f97a4843._.js");
      case "server/chunks/ssr/[turbopack]_runtime.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[turbopack]_runtime.js");
      case "server/chunks/ssr/_7b4a76a8._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7b4a76a8._.js");
      case "server/chunks/ssr/_7f761085._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7f761085._.js");
      case "server/chunks/ssr/_ac8aefdf._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_ac8aefdf._.js");
      case "server/chunks/ssr/_b5424590._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b5424590._.js");
      case "server/chunks/ssr/app_0ef037c1._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/app_0ef037c1._.js");
      case "server/chunks/ssr/app_error_tsx_5275429f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/app_error_tsx_5275429f._.js");
      case "server/chunks/ssr/app_error_tsx_fee1d43b._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/app_error_tsx_fee1d43b._.js");
      case "server/chunks/ssr/node_modules__pnpm_03316cd5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/node_modules__pnpm_03316cd5._.js");
      case "server/chunks/ssr/node_modules__pnpm_a9447386._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/node_modules__pnpm_a9447386._.js");
      case "server/chunks/ssr/node_modules__pnpm_b245cd8d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/node_modules__pnpm_b245cd8d._.js");
      case "server/chunks/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js");
      case "server/chunks/[root-of-the-server]__5832c096._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__5832c096._.js");
      case "server/chunks/[root-of-the-server]__c242c2e7._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__c242c2e7._.js");
      case "server/chunks/[turbopack]_runtime.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[turbopack]_runtime.js");
      case "server/chunks/_6ebc0034._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_6ebc0034._.js");
      case "server/chunks/_next-internal_server_app_[page]_opengraph-image_route_actions_96c6222f.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_[page]_opengraph-image_route_actions_96c6222f.js");
      case "server/chunks/ssr/72740_next_dist_client_components_builtin_global-error_504cd985.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_client_components_builtin_global-error_504cd985.js");
      case "server/chunks/ssr/72740_next_dist_client_components_builtin_unauthorized_1fda7a36.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_client_components_builtin_unauthorized_1fda7a36.js");
      case "server/chunks/ssr/[root-of-the-server]__1f0764d5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__1f0764d5._.js");
      case "server/chunks/ssr/[root-of-the-server]__4021c5da._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__4021c5da._.js");
      case "server/chunks/ssr/[root-of-the-server]__46a6a7f9._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__46a6a7f9._.js");
      case "server/chunks/ssr/[root-of-the-server]__af7f20d9._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__af7f20d9._.js");
      case "server/chunks/ssr/[root-of-the-server]__d2798418._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__d2798418._.js");
      case "server/chunks/ssr/_2dced5e8._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_2dced5e8._.js");
      case "server/chunks/ssr/_7a48bf3b._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7a48bf3b._.js");
      case "server/chunks/ssr/_9954dc40._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_9954dc40._.js");
      case "server/chunks/ssr/_ecd3a778._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_ecd3a778._.js");
      case "server/chunks/ssr/components_layout_footer-menu_tsx_deaf03d8._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_layout_footer-menu_tsx_deaf03d8._.js");
      case "server/chunks/ssr/72740_next_dist_b5cd37b3._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/72740_next_dist_b5cd37b3._.js");
      case "server/chunks/ssr/[root-of-the-server]__461b28bb._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__461b28bb._.js");
      case "server/chunks/ssr/_next-internal_server_app__global-error_page_actions_75761787.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_next-internal_server_app__global-error_page_actions_75761787.js");
      case "server/chunks/ssr/[root-of-the-server]__9e48d02c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__9e48d02c._.js");
      case "server/chunks/ssr/_1fd730ed._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_1fd730ed._.js");
      case "server/chunks/ssr/_36086cda._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_36086cda._.js");
      case "server/chunks/ssr/_c4ca0f98._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_c4ca0f98._.js");
      case "server/chunks/ssr/components_upcube-portal_41729522._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_upcube-portal_41729522._.js");
      case "server/chunks/ssr/components_upcube-portal_portal-header_tsx_e9f7d90f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_upcube-portal_portal-header_tsx_e9f7d90f._.js");
      case "server/chunks/[root-of-the-server]__e469bc60._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__e469bc60._.js");
      case "server/chunks/[root-of-the-server]__ff4a69f1._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__ff4a69f1._.js");
      case "server/chunks/_next-internal_server_app_api_revalidate_route_actions_415b884f.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_api_revalidate_route_actions_415b884f.js");
      case "server/chunks/ssr/[root-of-the-server]__f823f8d5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__f823f8d5._.js");
      case "server/chunks/ssr/_2117ed08._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_2117ed08._.js");
      case "server/chunks/ssr/_543d1cea._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_543d1cea._.js");
      case "server/chunks/ssr/_a6a7f6dd._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_a6a7f6dd._.js");
      case "server/chunks/ssr/_ad41aa71._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_ad41aa71._.js");
      case "server/chunks/ssr/[root-of-the-server]__8e77c17b._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__8e77c17b._.js");
      case "server/chunks/ssr/_0a5b5d74._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_0a5b5d74._.js");
      case "server/chunks/ssr/_d632af93._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_d632af93._.js");
      case "server/chunks/ssr/[root-of-the-server]__34f8f6e2._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__34f8f6e2._.js");
      case "server/chunks/ssr/_3e20dc6c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_3e20dc6c._.js");
      case "server/chunks/ssr/_a2061ade._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_a2061ade._.js");
      case "server/chunks/ssr/[root-of-the-server]__0e192573._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__0e192573._.js");
      case "server/chunks/ssr/_2d9007d5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_2d9007d5._.js");
      case "server/chunks/ssr/_e7f41e9d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_e7f41e9d._.js");
      case "server/chunks/ssr/[root-of-the-server]__ec2b5958._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__ec2b5958._.js");
      case "server/chunks/ssr/_5704ca70._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_5704ca70._.js");
      case "server/chunks/ssr/_72944e52._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_72944e52._.js");
      case "server/chunks/ssr/[root-of-the-server]__14cd6db8._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__14cd6db8._.js");
      case "server/chunks/ssr/_919d5432._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_919d5432._.js");
      case "server/chunks/ssr/_d51b67ec._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_d51b67ec._.js");
      case "server/chunks/ssr/[root-of-the-server]__5a7f8738._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__5a7f8738._.js");
      case "server/chunks/ssr/_4f21741c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_4f21741c._.js");
      case "server/chunks/ssr/_89d4c49f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_89d4c49f._.js");
      case "server/chunks/ssr/[root-of-the-server]__cebe084e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__cebe084e._.js");
      case "server/chunks/ssr/_beb897cc._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_beb897cc._.js");
      case "server/chunks/ssr/_d1cab7c7._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_d1cab7c7._.js");
      case "server/chunks/ssr/[root-of-the-server]__f2adf248._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__f2adf248._.js");
      case "server/chunks/ssr/_60344d35._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_60344d35._.js");
      case "server/chunks/ssr/_8966f995._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_8966f995._.js");
      case "server/chunks/ssr/[root-of-the-server]__9a8f1e56._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__9a8f1e56._.js");
      case "server/chunks/ssr/_3c655a0c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_3c655a0c._.js");
      case "server/chunks/ssr/_875feb76._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_875feb76._.js");
      case "server/chunks/72740_next_dist_esm_build_templates_app-route_a7ffd050.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/72740_next_dist_esm_build_templates_app-route_a7ffd050.js");
      case "server/chunks/[root-of-the-server]__f1d3b446._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__f1d3b446._.js");
      case "server/chunks/_next-internal_server_app_favicon_ico_route_actions_353150a5.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_favicon_ico_route_actions_353150a5.js");
      case "server/chunks/ssr/[root-of-the-server]__b0c9aed4._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__b0c9aed4._.js");
      case "server/chunks/ssr/_4712fbdc._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_4712fbdc._.js");
      case "server/chunks/ssr/_6d027ed5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_6d027ed5._.js");
      case "server/chunks/ssr/[root-of-the-server]__10f12f9a._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__10f12f9a._.js");
      case "server/chunks/ssr/_12aa341d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_12aa341d._.js");
      case "server/chunks/ssr/_335625ba._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_335625ba._.js");
      case "server/chunks/ssr/lib_upcube-news_news_ts_974d11ab._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/lib_upcube-news_news_ts_974d11ab._.js");
      case "server/chunks/ssr/[root-of-the-server]__0df240ec._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__0df240ec._.js");
      case "server/chunks/ssr/_9957b292._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_9957b292._.js");
      case "server/chunks/ssr/_ea864118._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_ea864118._.js");
      case "server/chunks/[root-of-the-server]__13da8d2f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__13da8d2f._.js");
      case "server/chunks/_next-internal_server_app_opengraph-image_route_actions_ca3aeb2a.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_opengraph-image_route_actions_ca3aeb2a.js");
      case "server/chunks/ssr/[root-of-the-server]__f67b1d76._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__f67b1d76._.js");
      case "server/chunks/ssr/_ad259c48._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_ad259c48._.js");
      case "server/chunks/ssr/_e70c5854._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_e70c5854._.js");
      case "server/chunks/ssr/components_upcube-home_home-page_tsx_6edaf13e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_upcube-home_home-page_tsx_6edaf13e._.js");
      case "server/chunks/ssr/[root-of-the-server]__54937ffb._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__54937ffb._.js");
      case "server/chunks/ssr/_48d6567d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_48d6567d._.js");
      case "server/chunks/ssr/_7d903229._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7d903229._.js");
      case "server/chunks/ssr/[root-of-the-server]__9f022bdc._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__9f022bdc._.js");
      case "server/chunks/ssr/_8c532c24._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_8c532c24._.js");
      case "server/chunks/ssr/_cae05518._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_cae05518._.js");
      case "server/chunks/ssr/[root-of-the-server]__35a36ef4._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__35a36ef4._.js");
      case "server/chunks/ssr/_4c4df8fd._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_4c4df8fd._.js");
      case "server/chunks/ssr/_520318cc._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_520318cc._.js");
      case "server/chunks/ssr/[root-of-the-server]__128dcc15._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__128dcc15._.js");
      case "server/chunks/ssr/_20e33535._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_20e33535._.js");
      case "server/chunks/ssr/_e828986d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_e828986d._.js");
      case "server/chunks/ssr/[root-of-the-server]__3d5fc686._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__3d5fc686._.js");
      case "server/chunks/ssr/_3ce55954._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_3ce55954._.js");
      case "server/chunks/ssr/_bd2f4246._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_bd2f4246._.js");
      case "server/chunks/ssr/components_1d279990._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_1d279990._.js");
      case "server/chunks/ssr/[root-of-the-server]__1d107097._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__1d107097._.js");
      case "server/chunks/ssr/_7fb87a38._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7fb87a38._.js");
      case "server/chunks/ssr/_bb20b2eb._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_bb20b2eb._.js");
      case "server/chunks/ssr/components_upcube-products_719e1b2a._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/components_upcube-products_719e1b2a._.js");
      case "server/chunks/ssr/[root-of-the-server]__2ff20083._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__2ff20083._.js");
      case "server/chunks/ssr/_daf50d43._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_daf50d43._.js");
      case "server/chunks/ssr/_e8ac01fd._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_e8ac01fd._.js");
      case "server/chunks/ssr/[root-of-the-server]__fefdac2a._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__fefdac2a._.js");
      case "server/chunks/ssr/_c9eb6f0c._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_c9eb6f0c._.js");
      case "server/chunks/ssr/_d399d186._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_d399d186._.js");
      case "server/chunks/ssr/[root-of-the-server]__93986a68._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__93986a68._.js");
      case "server/chunks/ssr/_85dbb095._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_85dbb095._.js");
      case "server/chunks/ssr/_af176bed._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_af176bed._.js");
      case "server/chunks/ssr/[root-of-the-server]__41e3ec65._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__41e3ec65._.js");
      case "server/chunks/ssr/_6d05e96f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_6d05e96f._.js");
      case "server/chunks/ssr/_eb4ca33e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_eb4ca33e._.js");
      case "server/chunks/ssr/[root-of-the-server]__006015b2._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__006015b2._.js");
      case "server/chunks/ssr/_3d6092eb._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_3d6092eb._.js");
      case "server/chunks/ssr/_eb496456._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_eb496456._.js");
      case "server/chunks/ssr/[root-of-the-server]__6a93282a._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__6a93282a._.js");
      case "server/chunks/ssr/_8a00662d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_8a00662d._.js");
      case "server/chunks/ssr/_c0a3aa19._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_c0a3aa19._.js");
      case "server/chunks/ssr/[root-of-the-server]__d29db9a6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__d29db9a6._.js");
      case "server/chunks/ssr/_1bd44c92._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_1bd44c92._.js");
      case "server/chunks/ssr/_afc27c2e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_afc27c2e._.js");
      case "server/chunks/ssr/[root-of-the-server]__4b8798a0._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__4b8798a0._.js");
      case "server/chunks/ssr/_b2030cd6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b2030cd6._.js");
      case "server/chunks/ssr/_d9303bb9._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_d9303bb9._.js");
      case "server/chunks/ssr/[root-of-the-server]__833c6619._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__833c6619._.js");
      case "server/chunks/ssr/_71e578bd._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_71e578bd._.js");
      case "server/chunks/ssr/_797d835f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_797d835f._.js");
      case "server/chunks/ssr/[root-of-the-server]__3f0d8a55._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__3f0d8a55._.js");
      case "server/chunks/ssr/_94e4b55d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_94e4b55d._.js");
      case "server/chunks/ssr/_b0a1bca8._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b0a1bca8._.js");
      case "server/chunks/[root-of-the-server]__7991a0ff._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__7991a0ff._.js");
      case "server/chunks/_next-internal_server_app_robots_txt_route_actions_9118e90f.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_robots_txt_route_actions_9118e90f.js");
      case "server/chunks/ssr/[root-of-the-server]__41805e69._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__41805e69._.js");
      case "server/chunks/ssr/_54793e94._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_54793e94._.js");
      case "server/chunks/ssr/_b53fa055._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b53fa055._.js");
      case "server/chunks/[root-of-the-server]__06e3a842._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__06e3a842._.js");
      case "server/chunks/ce889_server_app_search_[collection]_opengraph-image_route_actions_6737508e.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ce889_server_app_search_[collection]_opengraph-image_route_actions_6737508e.js");
      case "server/chunks/ssr/[root-of-the-server]__9673d5a4._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__9673d5a4._.js");
      case "server/chunks/ssr/[root-of-the-server]__97c58d90._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__97c58d90._.js");
      case "server/chunks/ssr/_7f6ab42d._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7f6ab42d._.js");
      case "server/chunks/ssr/_9e82ba61._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_9e82ba61._.js");
      case "server/chunks/ssr/_b5692394._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b5692394._.js");
      case "server/chunks/ssr/_dd7b5e56._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_dd7b5e56._.js");
      case "server/chunks/ssr/_fc0a70fa._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_fc0a70fa._.js");
      case "server/chunks/ssr/[root-of-the-server]__1c23f2df._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__1c23f2df._.js");
      case "server/chunks/ssr/_87ed2155._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_87ed2155._.js");
      case "server/chunks/ssr/_a54a9f0e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_a54a9f0e._.js");
      case "server/chunks/ssr/[root-of-the-server]__3636c6e1._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__3636c6e1._.js");
      case "server/chunks/ssr/_067493ae._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_067493ae._.js");
      case "server/chunks/ssr/_aec7e6ae._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_aec7e6ae._.js");
      case "server/chunks/[root-of-the-server]__4160b26f._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/[root-of-the-server]__4160b26f._.js");
      case "server/chunks/_next-internal_server_app_sitemap_xml_route_actions_12658ace.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/_next-internal_server_app_sitemap_xml_route_actions_12658ace.js");
      case "server/chunks/ssr/[root-of-the-server]__e5300c06._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__e5300c06._.js");
      case "server/chunks/ssr/_1a6a8e51._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_1a6a8e51._.js");
      case "server/chunks/ssr/_7e9badb1._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7e9badb1._.js");
      case "server/chunks/ssr/_b73aafe6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_b73aafe6._.js");
      case "server/chunks/ssr/[root-of-the-server]__6438b4ac._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__6438b4ac._.js");
      case "server/chunks/ssr/_afaab6db._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_afaab6db._.js");
      case "server/chunks/ssr/_c65c83b4._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_c65c83b4._.js");
      case "server/chunks/ssr/[root-of-the-server]__5a7808da._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__5a7808da._.js");
      case "server/chunks/ssr/_242a6fa6._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_242a6fa6._.js");
      case "server/chunks/ssr/_81190603._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_81190603._.js");
      case "server/chunks/ssr/[root-of-the-server]__0064b9e5._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__0064b9e5._.js");
      case "server/chunks/ssr/_3a2eff4e._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_3a2eff4e._.js");
      case "server/chunks/ssr/_f8f0f162._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_f8f0f162._.js");
      case "server/chunks/ssr/[root-of-the-server]__df48e341._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/[root-of-the-server]__df48e341._.js");
      case "server/chunks/ssr/_7d2a4201._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_7d2a4201._.js");
      case "server/chunks/ssr/_98e317ee._.js": return require("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/.next/server/chunks/ssr/_98e317ee._.js");
      default:
        throw new Error(`Not found ${chunkPath}`);
    }
  }


  async function loadWasmChunk(chunkPath) {
    switch (chunkPath) {
      case "/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@vercel/og/resvg.wasm": return (await import("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@vercel/og/resvg.wasm")).default;
      case "/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@vercel/og/yoga.wasm": return (await import("/Users/sha/Documents/AI/upcubemain/commerce-main/.open-next/server-functions/default/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@vercel/og/yoga.wasm")).default;
      default:
        throw new Error(`Unknown wasm chunk: ${chunkPath}`);
    }
  }
