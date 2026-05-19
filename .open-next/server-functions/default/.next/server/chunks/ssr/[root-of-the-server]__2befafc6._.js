module.exports = [
  4748,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/lib/cache-handlers/default.external.js",
      () => require("next/dist/server/lib/cache-handlers/default.external.js"),
    );
  },
  63717,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(56520);
    a.n(
      d(
        "[project]/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-dir/link.js <module evaluation>",
      ),
    );
  },
  2805,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(56520);
    a.n(
      d(
        "[project]/node_modules/.pnpm/next@15.6.0-canary.60_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-dir/link.js",
      ),
    );
  },
  12546,
  (a) => {
    "use strict";
    a.i(63717);
    var b = a.i(2805);
    a.n(b);
  },
  53338,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(54508),
      g = a.r(63874),
      h = f._(a.r(12546));
    function i(a) {
      let b = a.legacyBehavior,
        c =
          "string" == typeof a.children ||
          "number" == typeof a.children ||
          "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  88614,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(68962),
      d = a.i(23254);
    function e({ size: a }) {
      return (0, b.jsx)("div", {
        className: (0, c.default)(
          "flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black",
          {
            "h-[40px] w-[40px] rounded-xl": !a,
            "h-[30px] w-[30px] rounded-lg": "sm" === a,
          },
        ),
        children: (0, b.jsx)(d.default, {
          className: (0, c.default)({
            "h-[16px] w-[16px]": !a,
            "h-[10px] w-[10px]": "sm" === a,
          }),
        }),
      });
    }
    a.s(["default", () => e]);
  },
  69408,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/cart/cart-context.tsx <module evaluation>",
        "CartProvider",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/cart/cart-context.tsx <module evaluation>",
        "useCart",
      );
    a.s(["CartProvider", 0, c, "useCart", 0, d]);
  },
  25085,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/cart/cart-context.tsx",
        "CartProvider",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/cart/cart-context.tsx",
        "useCart",
      );
    a.s(["CartProvider", 0, c, "useCart", 0, d]);
  },
  35379,
  (a) => {
    "use strict";
    a.i(69408);
    var b = a.i(25085);
    a.n(b);
  },
  48747,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/components/cart/modal.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/cart/modal.tsx <module evaluation>",
      "default",
    );
    a.s(["default", 0, b]);
  },
  57220,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/components/cart/modal.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/cart/modal.tsx",
      "default",
    );
    a.s(["default", 0, b]);
  },
  34284,
  (a) => {
    "use strict";
    a.i(48747);
    var b = a.i(57220);
    a.n(b);
  },
  79122,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/components/layout/navbar/mobile-menu.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/layout/navbar/mobile-menu.tsx <module evaluation>",
      "default",
    );
    a.s(["default", 0, b]);
  },
  27139,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/components/layout/navbar/mobile-menu.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/layout/navbar/mobile-menu.tsx",
      "default",
    );
    a.s(["default", 0, b]);
  },
  65052,
  (a) => {
    "use strict";
    a.i(79122);
    var b = a.i(27139);
    a.n(b);
  },
  69183,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call SearchSkeleton() from the server but SearchSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/navbar/search.tsx <module evaluation>",
        "SearchSkeleton",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of [project]/components/layout/navbar/search.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/navbar/search.tsx <module evaluation>",
        "default",
      );
    a.s(["SearchSkeleton", 0, c, "default", 0, d]);
  },
  54531,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call SearchSkeleton() from the server but SearchSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/navbar/search.tsx",
        "SearchSkeleton",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of [project]/components/layout/navbar/search.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/navbar/search.tsx",
        "default",
      );
    a.s(["SearchSkeleton", 0, c, "default", 0, d]);
  },
  36625,
  (a) => {
    "use strict";
    a.i(69183);
    var b = a.i(54531);
    a.n(b);
  },
  18462,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call WelcomeToast() from the server but WelcomeToast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/welcome-toast.tsx <module evaluation>",
      "WelcomeToast",
    );
    a.s(["WelcomeToast", 0, b]);
  },
  22380,
  (a) => {
    "use strict";
    let b = (0, a.i(56520).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call WelcomeToast() from the server but WelcomeToast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/components/welcome-toast.tsx",
      "WelcomeToast",
    );
    a.s(["WelcomeToast", 0, b]);
  },
  48273,
  (a) => {
    "use strict";
    a.i(18462);
    var b = a.i(22380);
    a.n(b);
  },
  90522,
  (a) => {
    a.v({
      className: "geistsans_d5a4f12f-module__t0IYsq__className",
      variable: "geistsans_d5a4f12f-module__t0IYsq__variable",
    });
  },
  81554,
  (a) => {
    a.v({
      className: "upcubeinter_623a7017-module__IS7gsG__className",
      variable: "upcubeinter_623a7017-module__IS7gsG__variable",
    });
  },
  18885,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs <module evaluation>",
        "Toaster",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call toast() from the server but toast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs <module evaluation>",
        "toast",
      ),
      e = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useSonner() from the server but useSonner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs <module evaluation>",
        "useSonner",
      );
    a.s(["Toaster", 0, c, "toast", 0, d, "useSonner", 0, e]);
  },
  61312,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs",
        "Toaster",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call toast() from the server but toast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs",
        "toast",
      ),
      e = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useSonner() from the server but useSonner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/node_modules/.pnpm/sonner@2.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/sonner/dist/index.mjs",
        "useSonner",
      );
    a.s(["Toaster", 0, c, "toast", 0, d, "useSonner", 0, e]);
  },
  30415,
  (a) => {
    "use strict";
    a.i(18885);
    var b = a.i(61312);
    a.n(b);
  },
  33290,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(35379),
      d = a.i(34284),
      e = a.i(88614),
      f = a.i(92213),
      g = a.i(53338),
      h = a.i(83839),
      i = a.i(65052),
      j = a.i(36625);
    let { SITE_NAME: k } = process.env;
    async function l() {
      let a = await (0, f.getMenu)("next-js-frontend-header-menu");
      return (0, b.jsxs)("nav", {
        className:
          "commerce-navbar relative flex items-center justify-between p-4 lg:px-6",
        children: [
          (0, b.jsx)("div", {
            className: "block flex-none md:hidden",
            children: (0, b.jsx)(h.Suspense, {
              fallback: null,
              children: (0, b.jsx)(i.default, { menu: a }),
            }),
          }),
          (0, b.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
              (0, b.jsxs)("div", {
                className: "flex w-full md:w-1/3",
                children: [
                  (0, b.jsxs)(g.default, {
                    href: "/",
                    prefetch: !0,
                    className:
                      "mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6",
                    children: [
                      (0, b.jsx)(e.default, {}),
                      (0, b.jsx)("div", {
                        className:
                          "ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block",
                        children: k,
                      }),
                    ],
                  }),
                  a.length
                    ? (0, b.jsx)("ul", {
                        className:
                          "hidden gap-6 text-sm md:flex md:items-center",
                        children: a.map((a) =>
                          (0, b.jsx)(
                            "li",
                            {
                              children: (0, b.jsx)(g.default, {
                                href: a.path,
                                prefetch: !0,
                                className:
                                  "text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300",
                                children: a.title,
                              }),
                            },
                            a.title,
                          ),
                        ),
                      })
                    : null,
                ],
              }),
              (0, b.jsx)("div", {
                className: "hidden justify-center md:flex md:w-1/3",
                children: (0, b.jsx)(h.Suspense, {
                  fallback: (0, b.jsx)(j.SearchSkeleton, {}),
                  children: (0, b.jsx)(j.default, {}),
                }),
              }),
              (0, b.jsx)("div", {
                className: "flex justify-end md:w-1/3",
                children: (0, b.jsx)(d.default, {}),
              }),
            ],
          }),
        ],
      });
    }
    var m = a.i(48273),
      n = a.i(90522);
    let o = {
      className: n.default.className,
      style: { fontFamily: "'GeistSans', 'GeistSans Fallback'" },
    };
    null != n.default.variable && (o.variable = n.default.variable);
    var p = a.i(81554);
    let q = {
      className: p.default.className,
      style: { fontFamily: "'upcubeInter', 'upcubeInter Fallback'" },
    };
    null != p.default.variable && (q.variable = p.default.variable);
    var r = a.i(30415),
      s = a.i(82248);
    let { SITE_NAME: t } = process.env,
      u = {
        metadataBase: new URL(s.baseUrl),
        title: { default: t, template: `%s | ${t}` },
        robots: { follow: !0, index: !0 },
      };
    async function v({ children: a }) {
      let d = (0, f.getCart)();
      return (0, b.jsx)("html", {
        lang: "en",
        className: `${o.variable} ${q.variable}`,
        children: (0, b.jsx)("body", {
          className:
            "bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white",
          children: (0, b.jsxs)(c.CartProvider, {
            cartPromise: d,
            children: [
              (0, b.jsx)(l, {}),
              (0, b.jsxs)("main", {
                children: [
                  a,
                  (0, b.jsx)(r.Toaster, { closeButton: !0 }),
                  (0, b.jsx)(m.WelcomeToast, {}),
                ],
              }),
            ],
          }),
        }),
      });
    }
    a.s(["default", () => v, "metadata", 0, u], 33290);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2befafc6._.js.map
