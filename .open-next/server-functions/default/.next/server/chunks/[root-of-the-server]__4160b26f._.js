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
  85610,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      getOrigin: function () {
        return l;
      },
      resolveArray: function () {
        return a;
      },
      resolveAsArrayOrUndefined: function () {
        return o;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    function a(e) {
      return Array.isArray(e) ? e : [e];
    }
    function o(e) {
      if (null != e) return a(e);
    }
    function l(e) {
      let t;
      if ("string" == typeof e)
        try {
          t = (e = new URL(e)).origin;
        } catch {}
      return t;
    }
  },
  37069,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      resolveManifest: function () {
        return s;
      },
      resolveRobots: function () {
        return o;
      },
      resolveRouteData: function () {
        return d;
      },
      resolveSitemap: function () {
        return l;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    let a = e.r(85610);
    function o(e) {
      let t = "";
      for (let r of Array.isArray(e.rules) ? e.rules : [e.rules]) {
        for (let e of (0, a.resolveArray)(r.userAgent || ["*"]))
          t += `User-Agent: ${e}
`;
        if (r.allow)
          for (let e of (0, a.resolveArray)(r.allow))
            t += `Allow: ${e}
`;
        if (r.disallow)
          for (let e of (0, a.resolveArray)(r.disallow))
            t += `Disallow: ${e}
`;
        r.crawlDelay &&
          (t += `Crawl-delay: ${r.crawlDelay}
`),
          (t += "\n");
      }
      return (
        e.host &&
          (t += `Host: ${e.host}
`),
        e.sitemap &&
          (0, a.resolveArray)(e.sitemap).forEach((e) => {
            t += `Sitemap: ${e}
`;
          }),
        t
      );
    }
    function l(e) {
      let t = e.some((e) => Object.keys(e.alternates ?? {}).length > 0),
        r = e.some((e) => {
          var t;
          return !!(null == (t = e.images) ? void 0 : t.length);
        }),
        i = e.some((e) => {
          var t;
          return !!(null == (t = e.videos) ? void 0 : t.length);
        }),
        n = "";
      for (let s of ((n += '<?xml version="1.0" encoding="UTF-8"?>\n'),
      (n += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
      r &&
        (n += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),
      i &&
        (n += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),
      t
        ? (n += ' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n')
        : (n += ">\n"),
      e)) {
        var a, o, l;
        (n += "<url>\n"),
          (n += `<loc>${s.url}</loc>
`);
        let e = null == (a = s.alternates) ? void 0 : a.languages;
        if (e && Object.keys(e).length)
          for (let t in e)
            n += `<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;
        if (null == (o = s.images) ? void 0 : o.length)
          for (let e of s.images)
            n += `<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;
        if (null == (l = s.videos) ? void 0 : l.length)
          for (let e of s.videos)
            n += [
              "<video:video>",
              `<video:title>${e.title}</video:title>`,
              `<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,
              `<video:description>${e.description}</video:description>`,
              e.content_loc &&
                `<video:content_loc>${e.content_loc}</video:content_loc>`,
              e.player_loc &&
                `<video:player_loc>${e.player_loc}</video:player_loc>`,
              e.duration && `<video:duration>${e.duration}</video:duration>`,
              e.view_count &&
                `<video:view_count>${e.view_count}</video:view_count>`,
              e.tag && `<video:tag>${e.tag}</video:tag>`,
              e.rating && `<video:rating>${e.rating}</video:rating>`,
              e.expiration_date &&
                `<video:expiration_date>${e.expiration_date}</video:expiration_date>`,
              e.publication_date &&
                `<video:publication_date>${e.publication_date}</video:publication_date>`,
              e.family_friendly &&
                `<video:family_friendly>${e.family_friendly}</video:family_friendly>`,
              e.requires_subscription &&
                `<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,
              e.live && `<video:live>${e.live}</video:live>`,
              e.restriction &&
                `<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,
              e.platform &&
                `<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,
              e.uploader &&
                `<video:uploader${e.uploader.info && ` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,
              `</video:video>
`,
            ]
              .filter(Boolean)
              .join("\n");
        if (s.lastModified) {
          let e =
            s.lastModified instanceof Date
              ? s.lastModified.toISOString()
              : s.lastModified;
          n += `<lastmod>${e}</lastmod>
`;
        }
        s.changeFrequency &&
          (n += `<changefreq>${s.changeFrequency}</changefreq>
`),
          "number" == typeof s.priority &&
            (n += `<priority>${s.priority}</priority>
`),
          (n += "</url>\n");
      }
      return n + "</urlset>\n";
    }
    function s(e) {
      return JSON.stringify(e);
    }
    function d(e, t) {
      return "robots" === t
        ? o(e)
        : "sitemap" === t
          ? l(e)
          : "manifest" === t
            ? s(e)
            : "";
    }
  },
  55237,
  (e) => {
    "use strict";
    var t = e.i(8189),
      r = e.i(62326),
      i = e.i(85397),
      n = e.i(78542),
      a = e.i(10071),
      o = e.i(60426),
      l = e.i(59066),
      s = e.i(23968),
      d = e.i(91618),
      u = e.i(47966),
      c = e.i(41414),
      p = e.i(14754),
      v = e.i(2548),
      f = e.i(20353),
      m = e.i(76409),
      h = e.i(39892),
      g = e.i(93695);
    e.i(27677);
    var x = e.i(62958),
      y = e.i(48083),
      w = e.i(53694),
      R = e.i(41444);
    let _ = "force-dynamic";
    async function b() {
      (0, R.validateEnvironmentVariables)();
      let e = [""].map((e) => ({
          url: `${R.baseUrl}${e}`,
          lastModified: new Date().toISOString(),
        })),
        t = (0, w.getCollections)().then((e) =>
          e.map((e) => ({
            url: `${R.baseUrl}${e.path}`,
            lastModified: e.updatedAt,
          })),
        ),
        r = (0, w.getProducts)({}).then((e) =>
          e.map((e) => ({
            url: `${R.baseUrl}/product/${e.handle}`,
            lastModified: e.updatedAt,
          })),
        ),
        i = (0, w.getPages)().then((e) =>
          e.map((e) => ({
            url: `${R.baseUrl}/${e.handle}`,
            lastModified: e.updatedAt,
          })),
        ),
        n = [];
      try {
        n = (await Promise.all([t, r, i])).flat();
      } catch (e) {
        throw JSON.stringify(e, null, 2);
      }
      return [...e, ...n];
    }
    e.s(["default", () => b, "dynamic", 0, _], 89282);
    var E = e.i(37069);
    async function O() {
      let e = await b(),
        t = (0, E.resolveRouteData)(e, "sitemap");
      return new y.NextResponse(t, {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }
    e.s(["GET", () => O], 39248),
      e.i(39248),
      e.i(89282),
      e.s(["GET", () => O, "dynamic", 0, _], 21330);
    var $ = e.i(21330);
    let A = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/sitemap.xml/route",
          pathname: "/sitemap.xml",
          filename: "sitemap--route-entry",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/app/sitemap--route-entry.js",
        nextConfigOutput: "standalone",
        userland: $,
      }),
      { workAsyncStorage: C, workUnitAsyncStorage: S, serverHooks: P } = A;
    function T() {
      return (0, i.patchFetch)({
        workAsyncStorage: C,
        workUnitAsyncStorage: S,
      });
    }
    async function M(e, t, i) {
      var y;
      let w = "/sitemap.xml/route";
      w = w.replace(/\/index$/, "") || "/";
      let R = await A.prepare(e, t, { srcPage: w, multiZoneDraftMode: !1 });
      if (!R)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == i.waitUntil || i.waitUntil.call(i, Promise.resolve()),
          null
        );
      let {
          buildId: _,
          params: b,
          nextConfig: E,
          isDraftMode: O,
          prerenderManifest: $,
          routerServerContext: C,
          isOnDemandRevalidate: S,
          revalidateOnlyGenerated: P,
          resolvedPathname: T,
          clientReferenceManifest: M,
          serverActionsManifest: N,
        } = R,
        q = (0, s.normalizeAppPath)(w),
        j = !!($.dynamicRoutes[q] || $.routes[T]);
      if (j && !O) {
        let e = !!$.routes[T],
          t = $.dynamicRoutes[q];
        if (t && !1 === t.fallback && !e) throw new g.NoFallbackError();
      }
      let U = null;
      !j || A.isDev || O || (U = "/index" === (U = T) ? "/" : U);
      let k = !0 === A.isDev || !j,
        I = j && !k;
      N &&
        M &&
        (0, o.setReferenceManifestsSingleton)({
          page: w,
          clientReferenceManifest: M,
          serverActionsManifest: N,
          serverModuleMap: (0, l.createServerModuleMap)({
            serverActionsManifest: N,
          }),
        });
      let D = e.method || "GET",
        H = (0, a.getTracer)(),
        F = H.getActiveScopeSpan(),
        L = {
          params: b,
          prerenderManifest: $,
          renderOpts: {
            experimental: {
              cacheComponents: !!E.experimental.cacheComponents,
              authInterrupts: !!E.experimental.authInterrupts,
            },
            supportsDynamicResponse: k,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles:
              null == (y = E.experimental) ? void 0 : y.cacheLife,
            waitUntil: i.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, i) =>
              A.onRequestError(e, t, i, C),
          },
          sharedContext: { buildId: _ },
        },
        K = new d.NodeNextRequest(e),
        Y = new d.NodeNextResponse(t),
        V = u.NextRequestAdapter.fromNodeNextRequest(
          K,
          (0, u.signalFromNodeResponse)(t),
        );
      try {
        let o = async (e) =>
            A.handle(V, L).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = H.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== c.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let i = r.get("next.route");
              if (i) {
                let t = `${D} ${i}`;
                e.setAttributes({
                  "next.route": i,
                  "http.route": i,
                  "next.span_name": t,
                }),
                  e.updateName(t);
              } else e.updateName(`${D} ${w}`);
            }),
          l = async (a) => {
            var l, s;
            let d = async ({ previousCacheEntry: r }) => {
                try {
                  if (!(0, n.getRequestMeta)(e, "minimalMode") && S && P && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let l = await o(a);
                  e.fetchMetrics = L.renderOpts.fetchMetrics;
                  let s = L.renderOpts.pendingWaitUntil;
                  s && i.waitUntil && (i.waitUntil(s), (s = void 0));
                  let d = L.renderOpts.collectedTags;
                  if (!j)
                    return (
                      await (0, v.sendResponse)(
                        K,
                        Y,
                        l,
                        L.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await l.blob(),
                      t = (0, f.toNodeOutgoingHttpHeaders)(l.headers);
                    d && (t[h.NEXT_CACHE_TAGS_HEADER] = d),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type);
                    let r =
                        void 0 !== L.renderOpts.collectedRevalidate &&
                        !(
                          L.renderOpts.collectedRevalidate >= h.INFINITE_CACHE
                        ) &&
                        L.renderOpts.collectedRevalidate,
                      i =
                        void 0 === L.renderOpts.collectedExpire ||
                        L.renderOpts.collectedExpire >= h.INFINITE_CACHE
                          ? void 0
                          : L.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: x.CachedRouteKind.APP_ROUTE,
                        status: l.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: i },
                    };
                  }
                } catch (t) {
                  throw (
                    ((null == r ? void 0 : r.isStale) &&
                      (await A.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: w,
                          routeType: "route",
                          revalidateReason: (0, p.getRevalidateReason)({
                            isStaticGeneration: I,
                            isOnDemandRevalidate: S,
                          }),
                        },
                        C,
                      )),
                    t)
                  );
                }
              },
              u = await A.handleResponse({
                req: e,
                nextConfig: E,
                cacheKey: U,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: $,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: S,
                revalidateOnlyGenerated: P,
                responseGenerator: d,
                waitUntil: i.waitUntil,
              });
            if (!j) return null;
            if (
              (null == u || null == (l = u.value) ? void 0 : l.kind) !==
              x.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == u || null == (s = u.value) ? void 0 : s.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (0, n.getRequestMeta)(e, "minimalMode") ||
              t.setHeader(
                "x-nextjs-cache",
                S
                  ? "REVALIDATED"
                  : u.isMiss
                    ? "MISS"
                    : u.isStale
                      ? "STALE"
                      : "HIT",
              ),
              O &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                );
            let c = (0, f.fromNodeOutgoingHttpHeaders)(u.value.headers);
            return (
              ((0, n.getRequestMeta)(e, "minimalMode") && j) ||
                c.delete(h.NEXT_CACHE_TAGS_HEADER),
              !u.cacheControl ||
                t.getHeader("Cache-Control") ||
                c.get("Cache-Control") ||
                c.set(
                  "Cache-Control",
                  (0, m.getCacheControlHeader)(u.cacheControl),
                ),
              await (0, v.sendResponse)(
                K,
                Y,
                new Response(u.value.body, {
                  headers: c,
                  status: u.value.status || 200,
                }),
              ),
              null
            );
          };
        F
          ? await l(F)
          : await H.withPropagatedContext(e.headers, () =>
              H.trace(
                c.BaseServerSpan.handleRequest,
                {
                  spanName: `${D} ${w}`,
                  kind: a.SpanKind.SERVER,
                  attributes: { "http.method": D, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof g.NoFallbackError ||
            (await A.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: q,
              routeType: "route",
              revalidateReason: (0, p.getRevalidateReason)({
                isStaticGeneration: I,
                isOnDemandRevalidate: S,
              }),
            })),
          j)
        )
          throw t;
        return (
          await (0, v.sendResponse)(K, Y, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => M,
        "patchFetch",
        () => T,
        "routeModule",
        () => A,
        "serverHooks",
        () => P,
        "workAsyncStorage",
        () => C,
        "workUnitAsyncStorage",
        () => S,
      ],
      55237,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4160b26f._.js.map
