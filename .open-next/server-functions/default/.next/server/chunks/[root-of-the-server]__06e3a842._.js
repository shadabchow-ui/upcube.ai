module.exports = [
  24361,
  (e, t, r) => {
    t.exports = e.x("util", () => require("util"));
  },
  70406,
  (e, t, r) => {
    t.exports = e.x("next/dist/compiled/@opentelemetry/api", () =>
      require("next/dist/compiled/@opentelemetry/api"),
    );
  },
  48859,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/compiled/next-server/app-page-turbo-experimental.runtime.prod.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo-experimental.runtime.prod.js"),
    );
  },
  56704,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  32319,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  24725,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  43285,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/dynamic-access-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/dynamic-access-async-storage.external.js"),
    );
  },
  4748,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/lib/cache-handlers/default.external.js",
      () => require("next/dist/server/lib/cache-handlers/default.external.js"),
    );
  },
  93695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  14747,
  (e, t, r) => {
    t.exports = e.x("path", () => require("path"));
  },
  41444,
  (e) => {
    "use strict";
    let t = process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000";
    e.s([
      "baseUrl",
      0,
      t,
      "ensureStartsWith",
      0,
      (e, t) => (e.startsWith(t) ? e : `${t}${e}`),
      "validateEnvironmentVariables",
      0,
      () => {
        let e = [];
        if (
          (["SHOPIFY_STORE_DOMAIN", "SHOPIFY_STOREFRONT_ACCESS_TOKEN"].forEach(
            (t) => {
              process.env[t] || e.push(t);
            },
          ),
          e.length)
        )
          throw Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables

${e.join("\n")}
`);
        if (
          process.env.SHOPIFY_STORE_DOMAIN?.includes("[") ||
          process.env.SHOPIFY_STORE_DOMAIN?.includes("]")
        )
          throw Error(
            "Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.",
          );
      },
    ]);
  },
  24868,
  (e, t, r) => {
    t.exports = e.x("fs/promises", () => require("fs/promises"));
  },
  14686,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(27012).vendored["react-rsc"].ReactJsxRuntime;
  },
  70071,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageResponse", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    class a extends Response {
      static #e = (this.displayName = "ImageResponse");
      constructor(...t) {
        const r = new ReadableStream({
            async start(r) {
              let a = new (await e.A(91227)).ImageResponse(...t);
              if (!a.body) return r.close();
              let n = a.body.getReader();
              for (;;) {
                let { done: e, value: t } = await n.read();
                if (e) return r.close();
                r.enqueue(t);
              }
            },
          }),
          a = t[1] || {},
          n = new Headers({
            "content-type": "image/png",
            "cache-control": "public, max-age=0, must-revalidate",
          });
        a.headers && new Headers(a.headers).forEach((e, t) => n.set(t, e)),
          super(r, { headers: n, status: a.status, statusText: a.statusText });
      }
    }
  },
  34890,
  (e, t, r) => {
    t.exports = e.r(70071);
  },
  99094,
  (e) => {
    "use strict";
    var t = e.i(14686),
      r = e.i(34890);
    let a = function () {
      for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++)
        (e = arguments[r]) &&
          (t = (function e(t) {
            var r,
              a,
              n = "";
            if ("string" == typeof t || "number" == typeof t) n += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var s = t.length;
                for (r = 0; r < s; r++)
                  t[r] && (a = e(t[r])) && (n && (n += " "), (n += a));
              } else for (a in t) t[a] && (n && (n += " "), (n += a));
            return n;
          })(e)) &&
          (a && (a += " "), (a += t));
      return a;
    };
    function n(e) {
      return (0, t.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": `${process.env.SITE_NAME} logo`,
        viewBox: "0 0 32 28",
        ...e,
        className: a("h-4 w-4 fill-black dark:fill-white", e.className),
        children: [
          (0, t.jsx)("path", {
            d: "M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z",
          }),
          (0, t.jsx)("path", {
            d: "M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z",
          }),
        ],
      });
    }
    var s = e.i(14747),
      i = e.i(24868);
    async function o(e) {
      let { title: a } = { ...{ title: process.env.SITE_NAME }, ...e },
        o = await (0, i.readFile)(
          (0, s.join)(process.cwd(), "./fonts/Inter-Bold.ttf"),
        ),
        l = Uint8Array.from(o).buffer;
      return new r.ImageResponse(
        (0, t.jsxs)("div", {
          tw: "flex h-full w-full flex-col items-center justify-center bg-black",
          children: [
            (0, t.jsx)("div", {
              tw: "flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl",
              children: (0, t.jsx)(n, {
                width: "64",
                height: "58",
                fill: "white",
              }),
            }),
            (0, t.jsx)("p", {
              tw: "mt-12 text-6xl font-bold text-white",
              children: a,
            }),
          ],
        }),
        {
          width: 1200,
          height: 630,
          fonts: [{ name: "Inter", data: l, style: "normal", weight: 700 }],
        },
      );
    }
    e.s(["default", () => o], 99094);
  },
  65375,
  (e) => {
    "use strict";
    var t = e.i(8189),
      r = e.i(62326),
      a = e.i(85397),
      n = e.i(78542),
      s = e.i(10071),
      i = e.i(60426),
      o = e.i(59066),
      l = e.i(23968),
      d = e.i(91618),
      c = e.i(47966),
      u = e.i(41414),
      p = e.i(14754),
      h = e.i(2548),
      x = e.i(20353),
      f = e.i(76409),
      m = e.i(39892),
      v = e.i(93695);
    e.i(27677);
    var g = e.i(62958);
    e.i(48083);
    var R = e.i(99094),
      w = e.i(53694);
    async function E({ params: e }) {
      let t = await (0, w.getCollection)(e.collection),
        r = t?.seo?.title || t?.title;
      return await (0, R.default)({ title: r });
    }
    async function y(e, t) {
      return E({ params: t.params });
    }
    e.s(["default", () => E], 54044),
      e.s(["GET", () => y], 26399),
      e.i(26399),
      e.i(54044),
      e.s(["GET", () => y], 46171);
    var b = e.i(46171);
    let _ = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/search/[collection]/opengraph-image/route",
          pathname: "/search/[collection]/opengraph-image",
          filename: "opengraph-image--route-entry",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath:
          "[project]/app/search/[collection]/opengraph-image--route-entry.js",
        nextConfigOutput: "standalone",
        userland: b,
      }),
      { workAsyncStorage: O, workUnitAsyncStorage: C, serverHooks: A } = _;
    function T() {
      return (0, a.patchFetch)({
        workAsyncStorage: O,
        workUnitAsyncStorage: C,
      });
    }
    async function j(e, t, a) {
      var R;
      let w = "/search/[collection]/opengraph-image/route";
      w = w.replace(/\/index$/, "") || "/";
      let E = await _.prepare(e, t, { srcPage: w, multiZoneDraftMode: !1 });
      if (!E)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: y,
          params: b,
          nextConfig: O,
          isDraftMode: C,
          prerenderManifest: A,
          routerServerContext: T,
          isOnDemandRevalidate: j,
          revalidateOnlyGenerated: N,
          resolvedPathname: S,
          clientReferenceManifest: P,
          serverActionsManifest: I,
        } = E,
        k = (0, l.normalizeAppPath)(w),
        M = !!(A.dynamicRoutes[k] || A.routes[S]);
      if (M && !C) {
        let e = !!A.routes[S],
          t = A.dynamicRoutes[k];
        if (t && !1 === t.fallback && !e) throw new v.NoFallbackError();
      }
      let q = null;
      !M || _.isDev || C || (q = "/index" === (q = S) ? "/" : q);
      let H = !0 === _.isDev || !M,
        U = M && !H;
      I &&
        P &&
        (0, i.setReferenceManifestsSingleton)({
          page: w,
          clientReferenceManifest: P,
          serverActionsManifest: I,
          serverModuleMap: (0, o.createServerModuleMap)({
            serverActionsManifest: I,
          }),
        });
      let D = e.method || "GET",
        F = (0, s.getTracer)(),
        L = F.getActiveScopeSpan(),
        $ = {
          params: b,
          prerenderManifest: A,
          renderOpts: {
            experimental: {
              cacheComponents: !!O.experimental.cacheComponents,
              authInterrupts: !!O.experimental.authInterrupts,
            },
            supportsDynamicResponse: H,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles:
              null == (R = O.experimental) ? void 0 : R.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a) =>
              _.onRequestError(e, t, a, T),
          },
          sharedContext: { buildId: y },
        },
        K = new d.NodeNextRequest(e),
        Y = new d.NodeNextResponse(t),
        B = c.NextRequestAdapter.fromNodeNextRequest(
          K,
          (0, c.signalFromNodeResponse)(t),
        );
      try {
        let i = async (e) =>
            _.handle(B, $).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = F.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== u.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${D} ${a}`;
                e.setAttributes({
                  "next.route": a,
                  "http.route": a,
                  "next.span_name": t,
                }),
                  e.updateName(t);
              } else e.updateName(`${D} ${w}`);
            }),
          o = async (s) => {
            var o, l;
            let d = async ({ previousCacheEntry: r }) => {
                try {
                  if (!(0, n.getRequestMeta)(e, "minimalMode") && j && N && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let o = await i(s);
                  e.fetchMetrics = $.renderOpts.fetchMetrics;
                  let l = $.renderOpts.pendingWaitUntil;
                  l && a.waitUntil && (a.waitUntil(l), (l = void 0));
                  let d = $.renderOpts.collectedTags;
                  if (!M)
                    return (
                      await (0, h.sendResponse)(
                        K,
                        Y,
                        o,
                        $.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await o.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(o.headers);
                    d && (t[m.NEXT_CACHE_TAGS_HEADER] = d),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type);
                    let r =
                        void 0 !== $.renderOpts.collectedRevalidate &&
                        !(
                          $.renderOpts.collectedRevalidate >= m.INFINITE_CACHE
                        ) &&
                        $.renderOpts.collectedRevalidate,
                      a =
                        void 0 === $.renderOpts.collectedExpire ||
                        $.renderOpts.collectedExpire >= m.INFINITE_CACHE
                          ? void 0
                          : $.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: g.CachedRouteKind.APP_ROUTE,
                        status: o.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: a },
                    };
                  }
                } catch (t) {
                  throw (
                    ((null == r ? void 0 : r.isStale) &&
                      (await _.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: w,
                          routeType: "route",
                          revalidateReason: (0, p.getRevalidateReason)({
                            isStaticGeneration: U,
                            isOnDemandRevalidate: j,
                          }),
                        },
                        T,
                      )),
                    t)
                  );
                }
              },
              c = await _.handleResponse({
                req: e,
                nextConfig: O,
                cacheKey: q,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: A,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: j,
                revalidateOnlyGenerated: N,
                responseGenerator: d,
                waitUntil: a.waitUntil,
              });
            if (!M) return null;
            if (
              (null == c || null == (o = c.value) ? void 0 : o.kind) !==
              g.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == c || null == (l = c.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (0, n.getRequestMeta)(e, "minimalMode") ||
              t.setHeader(
                "x-nextjs-cache",
                j
                  ? "REVALIDATED"
                  : c.isMiss
                    ? "MISS"
                    : c.isStale
                      ? "STALE"
                      : "HIT",
              ),
              C &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                );
            let u = (0, x.fromNodeOutgoingHttpHeaders)(c.value.headers);
            return (
              ((0, n.getRequestMeta)(e, "minimalMode") && M) ||
                u.delete(m.NEXT_CACHE_TAGS_HEADER),
              !c.cacheControl ||
                t.getHeader("Cache-Control") ||
                u.get("Cache-Control") ||
                u.set(
                  "Cache-Control",
                  (0, f.getCacheControlHeader)(c.cacheControl),
                ),
              await (0, h.sendResponse)(
                K,
                Y,
                new Response(c.value.body, {
                  headers: u,
                  status: c.value.status || 200,
                }),
              ),
              null
            );
          };
        L
          ? await o(L)
          : await F.withPropagatedContext(e.headers, () =>
              F.trace(
                u.BaseServerSpan.handleRequest,
                {
                  spanName: `${D} ${w}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": D, "http.target": e.url },
                },
                o,
              ),
            );
      } catch (t) {
        if (
          (t instanceof v.NoFallbackError ||
            (await _.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: k,
              routeType: "route",
              revalidateReason: (0, p.getRevalidateReason)({
                isStaticGeneration: U,
                isOnDemandRevalidate: j,
              }),
            })),
          M)
        )
          throw t;
        return (
          await (0, h.sendResponse)(K, Y, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => j,
        "patchFetch",
        () => T,
        "routeModule",
        () => _,
        "serverHooks",
        () => A,
        "workAsyncStorage",
        () => O,
        "workUnitAsyncStorage",
        () => C,
      ],
      65375,
    );
  },
  91227,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "server/chunks/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js",
        ].map((t) => e.l(t)),
      ).then(() => t(21425)),
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06e3a842._.js.map
