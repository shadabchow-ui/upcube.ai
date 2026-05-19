module.exports = [
  68962,
  (a) => {
    "use strict";
    a.s([
      "default",
      0,
      function () {
        for (var a, b, c = 0, d = "", e = arguments.length; c < e; c++)
          (a = arguments[c]) &&
            (b = (function a(b) {
              var c,
                d,
                e = "";
              if ("string" == typeof b || "number" == typeof b) e += b;
              else if ("object" == typeof b)
                if (Array.isArray(b)) {
                  var f = b.length;
                  for (c = 0; c < f; c++)
                    b[c] && (d = a(b[c])) && (e && (e += " "), (e += d));
                } else for (d in b) b[d] && (e && (e += " "), (e += d));
              return e;
            })(a)) &&
            (d && (d += " "), (d += b));
        return d;
      },
    ]);
  },
  23254,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(68962);
    function d(a) {
      return (0, b.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": `${process.env.SITE_NAME} logo`,
        viewBox: "0 0 32 28",
        ...a,
        className: (0, c.default)(
          "h-4 w-4 fill-black dark:fill-white",
          a.className,
        ),
        children: [
          (0, b.jsx)("path", {
            d: "M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z",
          }),
          (0, b.jsx)("path", {
            d: "M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z",
          }),
        ],
      });
    }
    a.s(["default", () => d]);
  },
  24868,
  (a, b, c) => {
    b.exports = a.x("fs/promises", () => require("fs/promises"));
  },
  6153,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "ImageResponse", {
        enumerable: !0,
        get: function () {
          return d;
        },
      });
    class d extends Response {
      static #a = (this.displayName = "ImageResponse");
      constructor(...b) {
        const c = new ReadableStream({
            async start(c) {
              let d = new (await a.A(91227)).ImageResponse(...b);
              if (!d.body) return c.close();
              let e = d.body.getReader();
              for (;;) {
                let { done: a, value: b } = await e.read();
                if (a) return c.close();
                c.enqueue(b);
              }
            },
          }),
          d = b[1] || {},
          e = new Headers({
            "content-type": "image/png",
            "cache-control": "public, max-age=0, must-revalidate",
          });
        d.headers && new Headers(d.headers).forEach((a, b) => e.set(b, a)),
          super(c, { headers: e, status: d.status, statusText: d.statusText });
      }
    }
  },
  60940,
  (a, b, c) => {
    b.exports = a.r(6153);
  },
  16352,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(60940),
      d = a.i(23254),
      e = a.i(14747),
      f = a.i(24868);
    async function g(a) {
      let { title: g } = { ...{ title: process.env.SITE_NAME }, ...a },
        h = await (0, f.readFile)(
          (0, e.join)(process.cwd(), "./fonts/Inter-Bold.ttf"),
        ),
        i = Uint8Array.from(h).buffer;
      return new c.ImageResponse(
        (0, b.jsxs)("div", {
          tw: "flex h-full w-full flex-col items-center justify-center bg-black",
          children: [
            (0, b.jsx)("div", {
              tw: "flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl",
              children: (0, b.jsx)(d.default, {
                width: "64",
                height: "58",
                fill: "white",
              }),
            }),
            (0, b.jsx)("p", {
              tw: "mt-12 text-6xl font-bold text-white",
              children: g,
            }),
          ],
        }),
        {
          width: 1200,
          height: 630,
          fonts: [{ name: "Inter", data: i, style: "normal", weight: 700 }],
        },
      );
    }
    a.s(["default", () => g]);
  },
  86895,
  (a) => {
    "use strict";
    a.i(16352);
    var b = a.i(51408);
    let c = {};
    async function d(a) {
      let { __metadata_id__: d, ...e } = await a.params,
        f = (0, b.fillMetadataSegment)("/", e, "opengraph-image");
      return [
        (function (a, b) {
          let c = {
              alt: a.alt,
              type: a.contentType || "image/png",
              url: f + "?7c11154896597f01",
            },
            { size: d } = a;
          return d && ((c.width = d.width), (c.height = d.height)), c;
        })(c, 0),
      ];
    }
    a.s(["default", 0, d], 86895);
  },
  91227,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/[externals]_next_dist_compiled_@vercel_og_index_node_055f47ab.js",
        ].map((b) => a.l(b)),
      ).then(() => b(21425)),
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__57c22257._.js.map
