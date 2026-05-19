module.exports = [
  88822,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call FooterMenuItem() from the server but FooterMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/footer-menu.tsx <module evaluation>",
        "FooterMenuItem",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of [project]/components/layout/footer-menu.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/footer-menu.tsx <module evaluation>",
        "default",
      );
    a.s(["FooterMenuItem", 0, c, "default", 0, d]);
  },
  53252,
  (a) => {
    "use strict";
    var b = a.i(56520);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call FooterMenuItem() from the server but FooterMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/footer-menu.tsx",
        "FooterMenuItem",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of [project]/components/layout/footer-menu.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/components/layout/footer-menu.tsx",
        "default",
      );
    a.s(["FooterMenuItem", 0, c, "default", 0, d]);
  },
  91505,
  (a) => {
    "use strict";
    a.i(88822);
    var b = a.i(53252);
    a.n(b);
  },
  61277,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(53338),
      d = a.i(91505),
      e = a.i(88614),
      f = a.i(92213),
      g = a.i(83839);
    let { COMPANY_NAME: h, SITE_NAME: i } = process.env;
    async function j() {
      let a = new Date().getFullYear(),
        j = "2023" + (a > 2023 ? `-${a}` : ""),
        k =
          "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700",
        l = await (0, f.getMenu)("next-js-frontend-footer-menu"),
        m = h || i || "";
      return (0, b.jsxs)("footer", {
        className: "text-sm text-neutral-500 dark:text-neutral-400",
        children: [
          (0, b.jsxs)("div", {
            className:
              "mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700",
            children: [
              (0, b.jsx)("div", {
                children: (0, b.jsxs)(c.default, {
                  className:
                    "flex items-center gap-2 text-black md:pt-1 dark:text-white",
                  href: "/",
                  children: [
                    (0, b.jsx)(e.default, { size: "sm" }),
                    (0, b.jsx)("span", { className: "uppercase", children: i }),
                  ],
                }),
              }),
              (0, b.jsx)(g.Suspense, {
                fallback: (0, b.jsxs)("div", {
                  className: "flex h-[188px] w-[200px] flex-col gap-2",
                  children: [
                    (0, b.jsx)("div", { className: k }),
                    (0, b.jsx)("div", { className: k }),
                    (0, b.jsx)("div", { className: k }),
                    (0, b.jsx)("div", { className: k }),
                    (0, b.jsx)("div", { className: k }),
                    (0, b.jsx)("div", { className: k }),
                  ],
                }),
                children: (0, b.jsx)(d.default, { menu: l }),
              }),
              (0, b.jsx)("div", {
                className: "md:ml-auto",
                children: (0, b.jsxs)("a", {
                  className:
                    "flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white",
                  "aria-label": "Deploy on Vercel",
                  href: "https://vercel.com/templates/next.js/nextjs-commerce",
                  children: [
                    (0, b.jsx)("span", { className: "px-3", children: "▲" }),
                    (0, b.jsx)("hr", {
                      className:
                        "h-full border-r border-neutral-200 dark:border-neutral-700",
                    }),
                    (0, b.jsx)("span", {
                      className: "px-3",
                      children: "Deploy",
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, b.jsx)("div", {
            className:
              "border-t border-neutral-200 py-6 text-sm dark:border-neutral-700",
            children: (0, b.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0",
              children: [
                (0, b.jsxs)("p", {
                  children: [
                    "© ",
                    j,
                    " ",
                    m,
                    m.length && !m.endsWith(".") ? "." : "",
                    " ",
                    "All rights reserved.",
                  ],
                }),
                (0, b.jsx)("hr", {
                  className:
                    "mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block",
                }),
                (0, b.jsx)("p", {
                  children: (0, b.jsx)("a", {
                    href: "https://github.com/vercel/commerce",
                    children: "View the source",
                  }),
                }),
                (0, b.jsx)("p", {
                  className: "md:ml-auto",
                  children: (0, b.jsx)("a", {
                    href: "https://vercel.com",
                    className: "text-black dark:text-white",
                    children: "Created by ▲ Vercel",
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => j]);
  },
  35012,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(61277);
    function d({ children: a }) {
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)("div", {
            className: "w-full",
            children: (0, b.jsx)("div", {
              className: "mx-8 max-w-2xl py-20 sm:mx-auto",
              children: a,
            }),
          }),
          (0, b.jsx)(c.default, {}),
        ],
      });
    }
    a.s(["default", () => d]);
  },
];

//# sourceMappingURL=_2dced5e8._.js.map
