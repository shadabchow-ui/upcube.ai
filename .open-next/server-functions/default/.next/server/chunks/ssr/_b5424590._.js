module.exports = [
  56472,
  33958,
  16645,
  (a) => {
    "use strict";
    let b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
    var r,
      s,
      t = a.i(56778),
      u =
        (((b = u || {}).Space = " "),
        (b.Enter = "Enter"),
        (b.Escape = "Escape"),
        (b.Backspace = "Backspace"),
        (b.Delete = "Delete"),
        (b.ArrowLeft = "ArrowLeft"),
        (b.ArrowUp = "ArrowUp"),
        (b.ArrowRight = "ArrowRight"),
        (b.ArrowDown = "ArrowDown"),
        (b.Home = "Home"),
        (b.End = "End"),
        (b.PageUp = "PageUp"),
        (b.PageDown = "PageDown"),
        (b.Tab = "Tab"),
        b),
      v = Object.defineProperty,
      w = (a, b, c) => {
        let d;
        return (
          (d = "symbol" != typeof b ? b + "" : b) in a
            ? v(a, d, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (a[d] = c),
          c
        );
      };
    let x = new (class {
        constructor() {
          w(this, "current", this.detect()),
            w(this, "handoffState", "pending"),
            w(this, "currentId", 0);
        }
        set(a) {
          this.current !== a &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = a));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "server";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })(),
      y = (a, b) => {
        x.isServer ? (0, t.useEffect)(a, b) : (0, t.useLayoutEffect)(a, b);
      };
    function z(a) {
      let b = (0, t.useRef)(a);
      return (
        y(() => {
          b.current = a;
        }, [a]),
        b
      );
    }
    function A(a, b, c, d) {
      let e = z(c);
      (0, t.useEffect)(() => {
        function c(a) {
          e.current(a);
        }
        return (
          (a = null != a ? a : window).addEventListener(b, c, d),
          () => a.removeEventListener(b, c, d)
        );
      }, [a, b, d]);
    }
    class B extends Map {
      constructor(a) {
        super(), (this.factory = a);
      }
      get(a) {
        let b = super.get(a);
        return void 0 === b && ((b = this.factory(a)), this.set(a, b)), b;
      }
    }
    function C(a, b) {
      let c = a(),
        d = new Set();
      return {
        getSnapshot: () => c,
        subscribe: (a) => (d.add(a), () => d.delete(a)),
        dispatch(a, ...e) {
          let f = b[a].call(c, ...e);
          f && ((c = f), d.forEach((a) => a()));
        },
      };
    }
    function D(a) {
      return (0, t.useSyncExternalStore)(
        a.subscribe,
        a.getSnapshot,
        a.getSnapshot,
      );
    }
    let E = new B(() =>
      C(() => [], {
        ADD(a) {
          return this.includes(a) ? this : [...this, a];
        },
        REMOVE(a) {
          let b = this.indexOf(a);
          if (-1 === b) return this;
          let c = this.slice();
          return c.splice(b, 1), c;
        },
      }),
    );
    function F(a, b) {
      let c = E.get(b),
        d = (0, t.useId)(),
        e = D(c);
      if (
        (y(() => {
          if (a) return c.dispatch("ADD", d), () => c.dispatch("REMOVE", d);
        }, [c, a]),
        !a)
      )
        return !1;
      let f = e.indexOf(d),
        g = e.length;
      return -1 === f && ((f = g), (g += 1)), f === g - 1;
    }
    let G = function (a) {
      let b = z(a);
      return t.default.useCallback((...a) => b.current(...a), [b]);
    };
    function H(a) {
      "function" == typeof queueMicrotask
        ? queueMicrotask(a)
        : Promise.resolve()
            .then(a)
            .catch((a) =>
              setTimeout(() => {
                throw a;
              }),
            );
    }
    function I() {
      let a = [],
        b = {
          addEventListener: (a, c, d, e) => (
            a.addEventListener(c, d, e),
            b.add(() => a.removeEventListener(c, d, e))
          ),
          requestAnimationFrame(...a) {
            let c = requestAnimationFrame(...a);
            return b.add(() => cancelAnimationFrame(c));
          },
          nextFrame: (...a) =>
            b.requestAnimationFrame(() => b.requestAnimationFrame(...a)),
          setTimeout(...a) {
            let c = setTimeout(...a);
            return b.add(() => clearTimeout(c));
          },
          microTask(...a) {
            let c = { current: !0 };
            return (
              H(() => {
                c.current && a[0]();
              }),
              b.add(() => {
                c.current = !1;
              })
            );
          },
          style(a, b, c) {
            let d = a.style.getPropertyValue(b);
            return (
              Object.assign(a.style, { [b]: c }),
              this.add(() => {
                Object.assign(a.style, { [b]: d });
              })
            );
          },
          group(a) {
            let b = I();
            return a(b), this.add(() => b.dispose());
          },
          add: (b) => (
            a.includes(b) || a.push(b),
            () => {
              let c = a.indexOf(b);
              if (c >= 0) for (let b of a.splice(c, 1)) b();
            }
          ),
          dispose() {
            for (let b of a.splice(0)) b();
          },
        };
      return b;
    }
    function J(a) {
      return x.isServer
        ? null
        : a instanceof Node
          ? a.ownerDocument
          : null != a &&
              a.hasOwnProperty("current") &&
              a.current instanceof Node
            ? a.current.ownerDocument
            : document;
    }
    let K = new Map(),
      L = new Map();
    function M(a) {
      var b;
      let c = null != (b = L.get(a)) ? b : 0;
      return (
        L.set(a, c + 1),
        0 !== c ||
          (K.set(a, {
            "aria-hidden": a.getAttribute("aria-hidden"),
            inert: a.inert,
          }),
          a.setAttribute("aria-hidden", "true"),
          (a.inert = !0)),
        () =>
          (function (a) {
            var b;
            let c = null != (b = L.get(a)) ? b : 1;
            if ((1 === c ? L.delete(a) : L.set(a, c - 1), 1 !== c)) return;
            let d = K.get(a);
            d &&
              (null === d["aria-hidden"]
                ? a.removeAttribute("aria-hidden")
                : a.setAttribute("aria-hidden", d["aria-hidden"]),
              (a.inert = d.inert),
              K.delete(a));
          })(a)
      );
    }
    function N(a, b, ...c) {
      if (a in b) {
        let d = b[a];
        return "function" == typeof d ? d(...c) : d;
      }
      let d = Error(
        `Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(
          b,
        )
          .map((a) => `"${a}"`)
          .join(", ")}.`,
      );
      throw (Error.captureStackTrace && Error.captureStackTrace(d, N), d);
    }
    let O = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((a) => `${a}:not([tabindex='-1'])`)
        .join(","),
      P = ["[data-autofocus]"]
        .map((a) => `${a}:not([tabindex='-1'])`)
        .join(",");
    var Q =
        (((c = Q || {})[(c.First = 1)] = "First"),
        (c[(c.Previous = 2)] = "Previous"),
        (c[(c.Next = 4)] = "Next"),
        (c[(c.Last = 8)] = "Last"),
        (c[(c.WrapAround = 16)] = "WrapAround"),
        (c[(c.NoScroll = 32)] = "NoScroll"),
        (c[(c.AutoFocus = 64)] = "AutoFocus"),
        c),
      R =
        (((d = R || {})[(d.Error = 0)] = "Error"),
        (d[(d.Overflow = 1)] = "Overflow"),
        (d[(d.Success = 2)] = "Success"),
        (d[(d.Underflow = 3)] = "Underflow"),
        d),
      S =
        (((e = S || {})[(e.Previous = -1)] = "Previous"),
        (e[(e.Next = 1)] = "Next"),
        e),
      T =
        (((f = T || {})[(f.Strict = 0)] = "Strict"),
        (f[(f.Loose = 1)] = "Loose"),
        f),
      U =
        (((g = U || {})[(g.Keyboard = 0)] = "Keyboard"),
        (g[(g.Mouse = 1)] = "Mouse"),
        g);
    function V(a) {
      null == a || a.focus({ preventScroll: !0 });
    }
    function W(
      a,
      b,
      { sorted: c = !0, relativeTo: d = null, skipElements: e = [] } = {},
    ) {
      var f, g, h;
      let i = Array.isArray(a)
          ? a.length > 0
            ? a[0].ownerDocument
            : document
          : a.ownerDocument,
        j = Array.isArray(a)
          ? c
            ? (function (a, b = (a) => a) {
                return a.slice().sort((a, c) => {
                  let d = b(a),
                    e = b(c);
                  if (null === d || null === e) return 0;
                  let f = d.compareDocumentPosition(e);
                  return f & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : f & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : 0;
                });
              })(a)
            : a
          : 64 & b
            ? (function (a = document.body) {
                return null == a
                  ? []
                  : Array.from(a.querySelectorAll(P)).sort((a, b) =>
                      Math.sign(
                        (a.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (b.tabIndex || Number.MAX_SAFE_INTEGER),
                      ),
                    );
              })(a)
            : (function (a = document.body) {
                return null == a
                  ? []
                  : Array.from(a.querySelectorAll(O)).sort((a, b) =>
                      Math.sign(
                        (a.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (b.tabIndex || Number.MAX_SAFE_INTEGER),
                      ),
                    );
              })(a);
      e.length > 0 &&
        j.length > 1 &&
        (j = j.filter(
          (a) =>
            !e.some((b) =>
              null != b && "current" in b
                ? (null == b ? void 0 : b.current) === a
                : b === a,
            ),
        )),
        (d = null != d ? d : i.activeElement);
      let k = (() => {
          if (5 & b) return 1;
          if (10 & b) return -1;
          throw Error(
            "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
          );
        })(),
        l = (() => {
          if (1 & b) return 0;
          if (2 & b) return Math.max(0, j.indexOf(d)) - 1;
          if (4 & b) return Math.max(0, j.indexOf(d)) + 1;
          if (8 & b) return j.length - 1;
          throw Error(
            "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
          );
        })(),
        m = 32 & b ? { preventScroll: !0 } : {},
        n = 0,
        o = j.length,
        p;
      do {
        if (n >= o || n + o <= 0) return 0;
        let a = l + n;
        if (16 & b) a = (a + o) % o;
        else {
          if (a < 0) return 3;
          if (a >= o) return 1;
        }
        null == (p = j[a]) || p.focus(m), (n += k);
      } while (p !== i.activeElement);
      return (
        6 & b &&
          null !=
            (h =
              null == (g = null == (f = p) ? void 0 : f.matches)
                ? void 0
                : g.call(f, "textarea,input")) &&
          h &&
          p.select(),
        2
      );
    }
    function X() {
      return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
          window.navigator.maxTouchPoints > 0)
      );
    }
    function Y(a, b, c, d) {
      let e = z(c);
      (0, t.useEffect)(() => {
        if (a)
          return (
            document.addEventListener(b, c, d),
            () => document.removeEventListener(b, c, d)
          );
        function c(a) {
          e.current(a);
        }
      }, [a, b, d]);
    }
    function Z(a, b, c, d) {
      let e = z(c);
      (0, t.useEffect)(() => {
        if (a)
          return (
            window.addEventListener(b, c, d),
            () => window.removeEventListener(b, c, d)
          );
        function c(a) {
          e.current(a);
        }
      }, [a, b, d]);
    }
    function $(...a) {
      return (0, t.useMemo)(() => J(...a), [...a]);
    }
    function _(...a) {
      return Array.from(
        new Set(a.flatMap((a) => ("string" == typeof a ? a.split(" ") : []))),
      )
        .filter(Boolean)
        .join(" ");
    }
    var aa =
        (((h = aa || {})[(h.None = 0)] = "None"),
        (h[(h.RenderStrategy = 1)] = "RenderStrategy"),
        (h[(h.Static = 2)] = "Static"),
        h),
      ab =
        (((i = ab || {})[(i.Unmount = 0)] = "Unmount"),
        (i[(i.Hidden = 1)] = "Hidden"),
        i);
    function ac() {
      let a,
        b,
        c =
          ((a = (0, t.useRef)([])),
          (b = (0, t.useCallback)((b) => {
            for (let c of a.current)
              null != c && ("function" == typeof c ? c(b) : (c.current = b));
          }, [])),
          (...c) => {
            if (!c.every((a) => null == a)) return (a.current = c), b;
          });
      return (0, t.useCallback)(
        (a) =>
          (function ({
            ourProps: a,
            theirProps: b,
            slot: c,
            defaultTag: d,
            features: e,
            visible: f = !0,
            name: g,
            mergeRefs: h,
          }) {
            h = null != h ? h : ae;
            let i = af(b, a);
            if (f) return ad(i, c, d, g, h);
            let j = null != e ? e : 0;
            if (2 & j) {
              let { static: a = !1, ...b } = i;
              if (a) return ad(b, c, d, g, h);
            }
            if (1 & j) {
              let { unmount: a = !0, ...b } = i;
              return N(+!a, {
                0: () => null,
                1: () =>
                  ad(
                    { ...b, hidden: !0, style: { display: "none" } },
                    c,
                    d,
                    g,
                    h,
                  ),
              });
            }
            return ad(i, c, d, g, h);
          })({ mergeRefs: c, ...a }),
        [c],
      );
    }
    function ad(a, b = {}, c, d, e) {
      let {
          as: f = c,
          children: g,
          refName: h = "ref",
          ...i
        } = ai(a, ["unmount", "static"]),
        j = void 0 !== a.ref ? { [h]: a.ref } : {},
        k = "function" == typeof g ? g(b) : g;
      "className" in i &&
        i.className &&
        "function" == typeof i.className &&
        (i.className = i.className(b)),
        i["aria-labelledby"] &&
          i["aria-labelledby"] === i.id &&
          (i["aria-labelledby"] = void 0);
      let l = {};
      if (b) {
        let a = !1,
          c = [];
        for (let [d, e] of Object.entries(b))
          "boolean" == typeof e && (a = !0),
            !0 === e &&
              c.push(d.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`));
        if (a)
          for (let a of ((l["data-headlessui-state"] = c.join(" ")), c))
            l[`data-${a}`] = "";
      }
      if (
        f === t.Fragment &&
        (Object.keys(ah(i)).length > 0 || Object.keys(ah(l)).length > 0)
      )
        if (!(0, t.isValidElement)(k) || (Array.isArray(k) && k.length > 1)) {
          if (Object.keys(ah(i)).length > 0)
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${d} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(ah(i))
                  .concat(Object.keys(ah(l)))
                  .map((a) => `  - ${a}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((a) => `  - ${a}`).join(`
`),
              ].join(`
`),
            );
        } else {
          var m;
          let a = k.props,
            b = null == a ? void 0 : a.className,
            c =
              "function" == typeof b
                ? (...a) => _(b(...a), i.className)
                : _(b, i.className),
            d = af(k.props, ah(ai(i, ["ref"])));
          for (let a in l) a in d && delete l[a];
          return (0, t.cloneElement)(
            k,
            Object.assign(
              {},
              d,
              l,
              j,
              {
                ref: e(
                  ((m = k),
                  t.default.version.split(".")[0] >= "19"
                    ? m.props.ref
                    : m.ref),
                  j.ref,
                ),
              },
              c ? { className: c } : {},
            ),
          );
        }
      return (0, t.createElement)(
        f,
        Object.assign(
          {},
          ai(i, ["ref"]),
          f !== t.Fragment && j,
          f !== t.Fragment && l,
        ),
        k,
      );
    }
    function ae(...a) {
      return a.every((a) => null == a)
        ? void 0
        : (b) => {
            for (let c of a)
              null != c && ("function" == typeof c ? c(b) : (c.current = b));
          };
    }
    function af(...a) {
      if (0 === a.length) return {};
      if (1 === a.length) return a[0];
      let b = {},
        c = {};
      for (let d of a)
        for (let a in d)
          a.startsWith("on") && "function" == typeof d[a]
            ? (null != c[a] || (c[a] = []), c[a].push(d[a]))
            : (b[a] = d[a]);
      if (b.disabled || b["aria-disabled"])
        for (let a in c)
          /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(a) &&
            (c[a] = [
              (a) => {
                var b;
                return null == (b = null == a ? void 0 : a.preventDefault)
                  ? void 0
                  : b.call(a);
              },
            ]);
      for (let a in c)
        Object.assign(b, {
          [a](b, ...d) {
            for (let e of c[a]) {
              if (
                (b instanceof Event ||
                  (null == b ? void 0 : b.nativeEvent) instanceof Event) &&
                b.defaultPrevented
              )
                return;
              e(b, ...d);
            }
          },
        });
      return b;
    }
    function ag(a) {
      var b;
      return Object.assign((0, t.forwardRef)(a), {
        displayName: null != (b = a.displayName) ? b : a.name,
      });
    }
    function ah(a) {
      let b = Object.assign({}, a);
      for (let a in b) void 0 === b[a] && delete b[a];
      return b;
    }
    function ai(a, b = []) {
      let c = Object.assign({}, a);
      for (let a of b) a in c && delete c[a];
      return c;
    }
    var aj =
      (((j = aj || {})[(j.None = 1)] = "None"),
      (j[(j.Focusable = 2)] = "Focusable"),
      (j[(j.Hidden = 4)] = "Hidden"),
      j);
    let ak = ag(function (a, b) {
        var c;
        let { features: d = 1, ...e } = a,
          f = {
            ref: b,
            "aria-hidden":
              (2 & d) == 2 || (null != (c = e["aria-hidden"]) ? c : void 0),
            hidden: (4 & d) == 4 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & d) == 4 && (2 & d) != 2 && { display: "none" }),
            },
          };
        return ac()({
          ourProps: f,
          theirProps: e,
          slot: {},
          defaultTag: "span",
          name: "Hidden",
        });
      }),
      al = (0, t.createContext)(null);
    function am({ children: a, node: b }) {
      let [c, d] = (0, t.useState)(null),
        e = an(null != b ? b : c);
      return t.default.createElement(
        al.Provider,
        { value: e },
        a,
        null === e &&
          t.default.createElement(ak, {
            features: aj.Hidden,
            ref: (a) => {
              var b, c;
              if (a) {
                for (let e of null !=
                (c =
                  null == (b = J(a))
                    ? void 0
                    : b.querySelectorAll("html > *, body > *"))
                  ? c
                  : [])
                  if (
                    e !== document.body &&
                    e !== document.head &&
                    e instanceof HTMLElement &&
                    null != e &&
                    e.contains(a)
                  ) {
                    d(e);
                    break;
                  }
              }
            },
          }),
      );
    }
    function an(a = null) {
      var b;
      return null != (b = (0, t.useContext)(al)) ? b : a;
    }
    let ao = C(() => new Map(), {
      PUSH(a, b) {
        var c;
        let d =
          null != (c = this.get(a))
            ? c
            : { doc: a, count: 0, d: I(), meta: new Set() };
        return d.count++, d.meta.add(b), this.set(a, d), this;
      },
      POP(a, b) {
        let c = this.get(a);
        return c && (c.count--, c.meta.delete(b)), this;
      },
      SCROLL_PREVENT({ doc: a, d: b, meta: c }) {
        let d,
          e = {
            doc: a,
            d: b,
            meta: (function (a) {
              let b = {};
              for (let c of a) Object.assign(b, c(b));
              return b;
            })(c),
          },
          f = [
            X()
              ? {
                  before({ doc: a, d: b, meta: c }) {
                    function d(a) {
                      return c.containers
                        .flatMap((a) => a())
                        .some((b) => b.contains(a));
                    }
                    b.microTask(() => {
                      var c;
                      if (
                        "auto" !==
                        window.getComputedStyle(a.documentElement)
                          .scrollBehavior
                      ) {
                        let c = I();
                        c.style(a.documentElement, "scrollBehavior", "auto"),
                          b.add(() => b.microTask(() => c.dispose()));
                      }
                      let e =
                          null != (c = window.scrollY) ? c : window.pageYOffset,
                        f = null;
                      b.addEventListener(
                        a,
                        "click",
                        (b) => {
                          if (b.target instanceof HTMLElement)
                            try {
                              let c = b.target.closest("a");
                              if (!c) return;
                              let { hash: e } = new URL(c.href),
                                g = a.querySelector(e);
                              g && !d(g) && (f = g);
                            } catch {}
                        },
                        !0,
                      ),
                        b.addEventListener(a, "touchstart", (a) => {
                          if (a.target instanceof HTMLElement)
                            if (d(a.target)) {
                              let c = a.target;
                              for (; c.parentElement && d(c.parentElement); )
                                c = c.parentElement;
                              b.style(c, "overscrollBehavior", "contain");
                            } else b.style(a.target, "touchAction", "none");
                        }),
                        b.addEventListener(
                          a,
                          "touchmove",
                          (a) => {
                            if (
                              a.target instanceof HTMLElement &&
                              "INPUT" !== a.target.tagName
                            )
                              if (d(a.target)) {
                                let b = a.target;
                                for (
                                  ;
                                  b.parentElement &&
                                  "" !== b.dataset.headlessuiPortal &&
                                  !(
                                    b.scrollHeight > b.clientHeight ||
                                    b.scrollWidth > b.clientWidth
                                  );

                                )
                                  b = b.parentElement;
                                "" === b.dataset.headlessuiPortal &&
                                  a.preventDefault();
                              } else a.preventDefault();
                          },
                          { passive: !1 },
                        ),
                        b.add(() => {
                          var a;
                          e !==
                            (null != (a = window.scrollY)
                              ? a
                              : window.pageYOffset) && window.scrollTo(0, e),
                            f &&
                              f.isConnected &&
                              (f.scrollIntoView({ block: "nearest" }),
                              (f = null));
                        });
                    });
                  },
                }
              : {},
            {
              before({ doc: a }) {
                var b;
                let c = a.documentElement;
                d = Math.max(
                  0,
                  (null != (b = a.defaultView) ? b : window).innerWidth -
                    c.clientWidth,
                );
              },
              after({ doc: a, d: b }) {
                let c = a.documentElement,
                  e = Math.max(0, c.clientWidth - c.offsetWidth),
                  f = Math.max(0, d - e);
                b.style(c, "paddingRight", `${f}px`);
              },
            },
            {
              before({ doc: a, d: b }) {
                b.style(a.documentElement, "overflow", "hidden");
              },
            },
          ];
        f.forEach(({ before: a }) => (null == a ? void 0 : a(e))),
          f.forEach(({ after: a }) => (null == a ? void 0 : a(e)));
      },
      SCROLL_ALLOW({ d: a }) {
        a.dispose();
      },
      TEARDOWN({ doc: a }) {
        this.delete(a);
      },
    });
    function ap() {
      let a,
        b =
          ((a = "undefined" == typeof document),
          "useSyncExternalStore" in t &&
            (0, t.useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !a,
            )),
        [c, d] = t.useState(x.isHandoffComplete);
      return (
        c && !1 === x.isHandoffComplete && d(!1),
        t.useEffect(() => {
          !0 !== c && d(!0);
        }, [c]),
        t.useEffect(() => x.handoff(), []),
        !b && c
      );
    }
    ao.subscribe(() => {
      let a = ao.getSnapshot(),
        b = new Map();
      for (let [c] of a) b.set(c, c.documentElement.style.overflow);
      for (let c of a.values()) {
        let a = "hidden" === b.get(c.doc),
          d = 0 !== c.count;
        ((d && !a) || (!d && a)) &&
          ao.dispatch(c.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", c),
          0 === c.count && ao.dispatch("TEARDOWN", c);
      }
    });
    let aq = Symbol();
    function ar(...a) {
      let b = (0, t.useRef)(a);
      (0, t.useEffect)(() => {
        b.current = a;
      }, [a]);
      let c = G((a) => {
        for (let c of b.current)
          null != c && ("function" == typeof c ? c(a) : (c.current = a));
      });
      return a.every((a) => null == a || (null == a ? void 0 : a[aq]))
        ? void 0
        : c;
    }
    let as = (0, t.createContext)(() => {});
    function at({ value: a, children: b }) {
      return t.default.createElement(as.Provider, { value: a }, b);
    }
    let au = (0, t.createContext)(null);
    au.displayName = "OpenClosedContext";
    var av =
      (((k = av || {})[(k.Open = 1)] = "Open"),
      (k[(k.Closed = 2)] = "Closed"),
      (k[(k.Closing = 4)] = "Closing"),
      (k[(k.Opening = 8)] = "Opening"),
      k);
    function aw() {
      return (0, t.useContext)(au);
    }
    function ax({ value: a, children: b }) {
      return t.default.createElement(au.Provider, { value: a }, b);
    }
    function ay({ children: a }) {
      return t.default.createElement(au.Provider, { value: null }, a);
    }
    let az = (0, t.createContext)(!1);
    function aA(a) {
      return t.default.createElement(
        az.Provider,
        { value: a.force },
        a.children,
      );
    }
    let aB = (0, t.createContext)(void 0),
      aC = (0, t.createContext)(null);
    aC.displayName = "DescriptionContext";
    let aD = Object.assign(
      ag(function (a, b) {
        let c = (0, t.useId)(),
          d = (0, t.useContext)(aB),
          { id: e = `headlessui-description-${c}`, ...f } = a,
          g = (function a() {
            let b = (0, t.useContext)(aC);
            if (null === b) {
              let b = Error(
                "You used a <Description /> component, but it is not inside a relevant parent.",
              );
              throw (
                (Error.captureStackTrace && Error.captureStackTrace(b, a), b)
              );
            }
            return b;
          })(),
          h = ar(b);
        y(() => g.register(e), [e, g.register]);
        let i = d || !1,
          j = (0, t.useMemo)(() => ({ ...g.slot, disabled: i }), [g.slot, i]),
          k = { ref: h, ...g.props, id: e };
        return ac()({
          ourProps: k,
          theirProps: f,
          slot: j,
          defaultTag: "p",
          name: g.name || "Description",
        });
      }),
      {},
    );
    function aE() {
      let [a] = (0, t.useState)(I);
      return (0, t.useEffect)(() => () => a.dispose(), [a]), a;
    }
    function aF() {
      let a = (0, t.useRef)(!1);
      return (
        y(
          () => (
            (a.current = !0),
            () => {
              a.current = !1;
            }
          ),
          [],
        ),
        a
      );
    }
    function aG(a) {
      let b = G(a),
        c = (0, t.useRef)(!1);
      (0, t.useEffect)(
        () => (
          (c.current = !1),
          () => {
            (c.current = !0),
              H(() => {
                c.current && b();
              });
          }
        ),
        [b],
      );
    }
    var aH =
      (((l = aH || {})[(l.Forwards = 0)] = "Forwards"),
      (l[(l.Backwards = 1)] = "Backwards"),
      l);
    function aI(a, b) {
      let c = (0, t.useRef)([]),
        d = G(a);
      (0, t.useEffect)(() => {
        let a = [...c.current];
        for (let [e, f] of b.entries())
          if (c.current[e] !== f) {
            let e = d(b, a);
            return (c.current = b), e;
          }
      }, [d, ...b]);
    }
    let aJ = [];
    function aK(a) {
      if (!a) return new Set();
      if ("function" == typeof a) return new Set(a());
      let b = new Set();
      for (let c of a.current)
        c.current instanceof HTMLElement && b.add(c.current);
      return b;
    }
    var aL =
      (((m = aL || {})[(m.None = 0)] = "None"),
      (m[(m.InitialFocus = 1)] = "InitialFocus"),
      (m[(m.TabLock = 2)] = "TabLock"),
      (m[(m.FocusLock = 4)] = "FocusLock"),
      (m[(m.RestoreFocus = 8)] = "RestoreFocus"),
      (m[(m.AutoFocus = 16)] = "AutoFocus"),
      m);
    let aM = Object.assign(
      ag(function (a, b) {
        let c,
          d = (0, t.useRef)(null),
          e = ar(d, b),
          {
            initialFocus: f,
            initialFocusFallback: g,
            containers: h,
            features: i = 15,
            ...j
          } = a;
        ap() || (i = 0);
        let k = $(d);
        !(function (a, { ownerDocument: b }) {
          let c = !!(8 & a),
            d = (function (a = !0) {
              let b = (0, t.useRef)(aJ.slice());
              return (
                aI(
                  ([a], [c]) => {
                    !0 === c &&
                      !1 === a &&
                      H(() => {
                        b.current.splice(0);
                      }),
                      !1 === c && !0 === a && (b.current = aJ.slice());
                  },
                  [a, aJ, b],
                ),
                G(() => {
                  var a;
                  return null !=
                    (a = b.current.find((a) => null != a && a.isConnected))
                    ? a
                    : null;
                })
              );
            })(c);
          aI(() => {
            c ||
              ((null == b ? void 0 : b.activeElement) ===
                (null == b ? void 0 : b.body) &&
                V(d()));
          }, [c]),
            aG(() => {
              c && V(d());
            });
        })(i, { ownerDocument: k });
        let l = (function (
          a,
          {
            ownerDocument: b,
            container: c,
            initialFocus: d,
            initialFocusFallback: e,
          },
        ) {
          let f = (0, t.useRef)(null),
            g = F(!!(1 & a), "focus-trap#initial-focus"),
            h = aF();
          return (
            aI(() => {
              if (0 === a) return;
              if (!g) {
                null != e && e.current && V(e.current);
                return;
              }
              let i = c.current;
              i &&
                H(() => {
                  if (!h.current) return;
                  let c = null == b ? void 0 : b.activeElement;
                  if (null != d && d.current) {
                    if ((null == d ? void 0 : d.current) === c) {
                      f.current = c;
                      return;
                    }
                  } else if (i.contains(c)) {
                    f.current = c;
                    return;
                  }
                  if (null != d && d.current) V(d.current);
                  else {
                    if (16 & a) {
                      if (W(i, Q.First | Q.AutoFocus) !== R.Error) return;
                    } else if (W(i, Q.First) !== R.Error) return;
                    if (
                      null != e &&
                      e.current &&
                      (V(e.current),
                      (null == b ? void 0 : b.activeElement) === e.current)
                    )
                      return;
                    console.warn(
                      "There are no focusable elements inside the <FocusTrap />",
                    );
                  }
                  f.current = null == b ? void 0 : b.activeElement;
                });
            }, [e, g, a]),
            f
          );
        })(i, {
          ownerDocument: k,
          container: d,
          initialFocus: f,
          initialFocusFallback: g,
        });
        !(function (
          a,
          {
            ownerDocument: b,
            container: c,
            containers: d,
            previousActiveElement: e,
          },
        ) {
          let f = aF(),
            g = !!(4 & a);
          A(
            null == b ? void 0 : b.defaultView,
            "focus",
            (a) => {
              if (!g || !f.current) return;
              let b = aK(d);
              c.current instanceof HTMLElement && b.add(c.current);
              let h = e.current;
              if (!h) return;
              let i = a.target;
              i && i instanceof HTMLElement
                ? aN(b, i)
                  ? ((e.current = i), V(i))
                  : (a.preventDefault(), a.stopPropagation(), V(h))
                : V(e.current);
            },
            !0,
          );
        })(i, {
          ownerDocument: k,
          container: d,
          containers: h,
          previousActiveElement: l,
        });
        let m =
            ((c = (0, t.useRef)(0)),
            Z(
              !0,
              "keydown",
              (a) => {
                "Tab" === a.key && (c.current = +!!a.shiftKey);
              },
              !0,
            ),
            c),
          n = G((a) => {
            let b = d.current;
            b &&
              N(m.current, {
                [aH.Forwards]: () => {
                  W(b, Q.First, { skipElements: [a.relatedTarget, g] });
                },
                [aH.Backwards]: () => {
                  W(b, Q.Last, { skipElements: [a.relatedTarget, g] });
                },
              });
          }),
          o = F(!!(2 & i), "focus-trap#tab-lock"),
          p = aE(),
          q = (0, t.useRef)(!1),
          r = ac();
        return t.default.createElement(
          t.default.Fragment,
          null,
          o &&
            t.default.createElement(ak, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: n,
              features: aj.Focusable,
            }),
          r({
            ourProps: {
              ref: e,
              onKeyDown(a) {
                "Tab" == a.key &&
                  ((q.current = !0),
                  p.requestAnimationFrame(() => {
                    q.current = !1;
                  }));
              },
              onBlur(a) {
                if (!(4 & i)) return;
                let b = aK(h);
                d.current instanceof HTMLElement && b.add(d.current);
                let c = a.relatedTarget;
                c instanceof HTMLElement &&
                  "true" !== c.dataset.headlessuiFocusGuard &&
                  (aN(b, c) ||
                    (q.current
                      ? W(
                          d.current,
                          N(m.current, {
                            [aH.Forwards]: () => Q.Next,
                            [aH.Backwards]: () => Q.Previous,
                          }) | Q.WrapAround,
                          { relativeTo: a.target },
                        )
                      : a.target instanceof HTMLElement && V(a.target)));
              },
            },
            theirProps: j,
            defaultTag: "div",
            name: "FocusTrap",
          }),
          o &&
            t.default.createElement(ak, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: n,
              features: aj.Focusable,
            }),
        );
      }),
      { features: aL },
    );
    function aN(a, b) {
      for (let c of a) if (c.contains(b)) return !0;
      return !1;
    }
    var aO = a.i(99938);
    let aP = t.Fragment,
      aQ = ag(function (a, b) {
        let c = (0, t.useRef)(null),
          d = ar(
            (function (a, b = !0) {
              return Object.assign(a, { [aq]: b });
            })((a) => {
              c.current = a;
            }),
            b,
          ),
          e = $(c),
          f = (function (a) {
            let b = (0, t.useContext)(az),
              c = (0, t.useContext)(aS),
              d = $(a),
              [e, f] = (0, t.useState)(() => {
                var a;
                if (!b && null !== c) return null != (a = c.current) ? a : null;
                if (x.isServer) return null;
                let e =
                  null == d
                    ? void 0
                    : d.getElementById("headlessui-portal-root");
                if (e) return e;
                if (null === d) return null;
                let f = d.createElement("div");
                return (
                  f.setAttribute("id", "headlessui-portal-root"),
                  d.body.appendChild(f)
                );
              });
            return (
              (0, t.useEffect)(() => {
                null !== e &&
                  ((null != d && d.body.contains(e)) ||
                    null == d ||
                    d.body.appendChild(e));
              }, [e, d]),
              (0, t.useEffect)(() => {
                b || (null !== c && f(c.current));
              }, [c, f, b]),
              e
            );
          })(c),
          [g] = (0, t.useState)(() => {
            var a;
            return x.isServer
              ? null
              : null != (a = null == e ? void 0 : e.createElement("div"))
                ? a
                : null;
          }),
          h = (0, t.useContext)(aT),
          i = ap();
        y(() => {
          !f ||
            !g ||
            f.contains(g) ||
            (g.setAttribute("data-headlessui-portal", ""), f.appendChild(g));
        }, [f, g]),
          y(() => {
            if (g && h) return h.register(g);
          }, [h, g]),
          aG(() => {
            var a;
            f &&
              g &&
              (g instanceof Node && f.contains(g) && f.removeChild(g),
              f.childNodes.length <= 0 &&
                (null == (a = f.parentElement) || a.removeChild(f)));
          });
        let j = ac();
        return i && f && g
          ? (0, aO.createPortal)(
              j({
                ourProps: { ref: d },
                theirProps: a,
                slot: {},
                defaultTag: aP,
                name: "Portal",
              }),
              g,
            )
          : null;
      }),
      aR = t.Fragment,
      aS = (0, t.createContext)(null),
      aT = (0, t.createContext)(null),
      aU = ag(function (a, b) {
        let c = ar(b),
          { enabled: d = !0, ...e } = a,
          f = ac();
        return d
          ? t.default.createElement(aQ, { ...e, ref: c })
          : f({
              ourProps: { ref: c },
              theirProps: e,
              slot: {},
              defaultTag: aP,
              name: "Portal",
            });
      }),
      aV = ag(function (a, b) {
        let { target: c, ...d } = a,
          e = { ref: ar(b) },
          f = ac();
        return t.default.createElement(
          aS.Provider,
          { value: c },
          f({
            ourProps: e,
            theirProps: d,
            defaultTag: aR,
            name: "Popover.Group",
          }),
        );
      }),
      aW = Object.assign(aU, { Group: aV });
    "undefined" != typeof process &&
      "undefined" != typeof globalThis &&
      "undefined" != typeof Element &&
      (null == (r = null == process ? void 0 : process.env)
        ? void 0
        : r.NODE_ENV) === "test" &&
      void 0 ===
        (null == (s = null == Element ? void 0 : Element.prototype)
          ? void 0
          : s.getAnimations) &&
      (Element.prototype.getAnimations = function () {
        return (
          console.warn(
            [
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
              "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
              "",
              "Example usage:",
              "```js",
              "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
              "mockAnimationsApi()",
              "```",
            ].join(`
`),
          ),
          []
        );
      });
    var aX =
      (((n = aX || {})[(n.None = 0)] = "None"),
      (n[(n.Closed = 1)] = "Closed"),
      (n[(n.Enter = 2)] = "Enter"),
      (n[(n.Leave = 4)] = "Leave"),
      n);
    function aY(a) {
      var b;
      return (
        !!(
          a.enter ||
          a.enterFrom ||
          a.enterTo ||
          a.leave ||
          a.leaveFrom ||
          a.leaveTo
        ) ||
        (null != (b = a.as) ? b : a2) !== t.Fragment ||
        1 === t.default.Children.count(a.children)
      );
    }
    let aZ = (0, t.createContext)(null);
    aZ.displayName = "TransitionContext";
    var a$ = (((o = a$ || {}).Visible = "visible"), (o.Hidden = "hidden"), o);
    let a_ = (0, t.createContext)(null);
    function a0(a) {
      return "children" in a
        ? a0(a.children)
        : a.current
            .filter(({ el: a }) => null !== a.current)
            .filter(({ state: a }) => "visible" === a).length > 0;
    }
    function a1(a, b) {
      let c = z(a),
        d = (0, t.useRef)([]),
        e = aF(),
        f = aE(),
        g = G((a, b = ab.Hidden) => {
          let g = d.current.findIndex(({ el: b }) => b === a);
          -1 !== g &&
            (N(b, {
              [ab.Unmount]() {
                d.current.splice(g, 1);
              },
              [ab.Hidden]() {
                d.current[g].state = "hidden";
              },
            }),
            f.microTask(() => {
              var a;
              !a0(d) && e.current && (null == (a = c.current) || a.call(c));
            }));
        }),
        h = G((a) => {
          let b = d.current.find(({ el: b }) => b === a);
          return (
            b
              ? "visible" !== b.state && (b.state = "visible")
              : d.current.push({ el: a, state: "visible" }),
            () => g(a, ab.Unmount)
          );
        }),
        i = (0, t.useRef)([]),
        j = (0, t.useRef)(Promise.resolve()),
        k = (0, t.useRef)({ enter: [], leave: [] }),
        l = G((a, c, d) => {
          i.current.splice(0),
            b &&
              (b.chains.current[c] = b.chains.current[c].filter(
                ([b]) => b !== a,
              )),
            null == b ||
              b.chains.current[c].push([
                a,
                new Promise((a) => {
                  i.current.push(a);
                }),
              ]),
            null == b ||
              b.chains.current[c].push([
                a,
                new Promise((a) => {
                  Promise.all(k.current[c].map(([a, b]) => b)).then(() => a());
                }),
              ]),
            "enter" === c
              ? (j.current = j.current
                  .then(() => (null == b ? void 0 : b.wait.current))
                  .then(() => d(c)))
              : d(c);
        }),
        m = G((a, b, c) => {
          Promise.all(k.current[b].splice(0).map(([a, b]) => b))
            .then(() => {
              var a;
              null == (a = i.current.shift()) || a();
            })
            .then(() => c(b));
        });
      return (0, t.useMemo)(
        () => ({
          children: d,
          register: h,
          unregister: g,
          onStart: l,
          onStop: m,
          wait: j,
          chains: k,
        }),
        [h, g, d, l, m, k, j],
      );
    }
    a_.displayName = "NestingContext";
    let a2 = t.Fragment,
      a3 = aa.RenderStrategy,
      a4 = ag(function (a, b) {
        let { show: c, appear: d = !1, unmount: e = !0, ...f } = a,
          g = (0, t.useRef)(null),
          h = ar(...(aY(a) ? [g, b] : null === b ? [] : [b]));
        ap();
        let i = aw();
        if (
          (void 0 === c && null !== i && (c = (i & av.Open) === av.Open),
          void 0 === c)
        )
          throw Error(
            "A <Transition /> is used but it is missing a `show={true | false}` prop.",
          );
        let [j, k] = (0, t.useState)(c ? "visible" : "hidden"),
          l = a1(() => {
            c || k("hidden");
          }),
          [m, n] = (0, t.useState)(!0),
          o = (0, t.useRef)([c]);
        y(() => {
          !1 !== m &&
            o.current[o.current.length - 1] !== c &&
            (o.current.push(c), n(!1));
        }, [o, c]);
        let p = (0, t.useMemo)(
          () => ({ show: c, appear: d, initial: m }),
          [c, d, m],
        );
        y(() => {
          c ? k("visible") : a0(l) || null === g.current || k("hidden");
        }, [c, l]);
        let q = { unmount: e },
          r = G(() => {
            var b;
            m && n(!1), null == (b = a.beforeEnter) || b.call(a);
          }),
          s = G(() => {
            var b;
            m && n(!1), null == (b = a.beforeLeave) || b.call(a);
          }),
          u = ac();
        return t.default.createElement(
          a_.Provider,
          { value: l },
          t.default.createElement(
            aZ.Provider,
            { value: p },
            u({
              ourProps: {
                ...q,
                as: t.Fragment,
                children: t.default.createElement(a5, {
                  ref: h,
                  ...q,
                  ...f,
                  beforeEnter: r,
                  beforeLeave: s,
                }),
              },
              theirProps: {},
              defaultTag: t.Fragment,
              features: a3,
              visible: "visible" === j,
              name: "Transition",
            }),
          ),
        );
      }),
      a5 = ag(function (a, b) {
        var c, d;
        let {
            transition: e = !0,
            beforeEnter: f,
            afterEnter: g,
            beforeLeave: h,
            afterLeave: i,
            enter: j,
            enterFrom: k,
            enterTo: l,
            entered: m,
            leave: n,
            leaveFrom: o,
            leaveTo: p,
            ...q
          } = a,
          [r, s] = (0, t.useState)(null),
          u = (0, t.useRef)(null),
          v = aY(a),
          w = ar(...(v ? [u, b, s] : null === b ? [] : [b])),
          x = null == (c = q.unmount) || c ? ab.Unmount : ab.Hidden,
          {
            show: z,
            appear: A,
            initial: B,
          } = (function () {
            let a = (0, t.useContext)(aZ);
            if (null === a)
              throw Error(
                "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
              );
            return a;
          })(),
          [C, D] = (0, t.useState)(z ? "visible" : "hidden"),
          E = (function () {
            let a = (0, t.useContext)(a_);
            if (null === a)
              throw Error(
                "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
              );
            return a;
          })(),
          { register: F, unregister: H } = E;
        y(() => F(u), [F, u]),
          y(() => {
            if (x === ab.Hidden && u.current)
              return z && "visible" !== C
                ? void D("visible")
                : N(C, { hidden: () => H(u), visible: () => F(u) });
          }, [C, u, F, H, z, x]);
        let J = ap();
        y(() => {
          if (v && J && "visible" === C && null === u.current)
            throw Error(
              "Did you forget to passthrough the `ref` to the actual DOM node?",
            );
        }, [u, C, J, v]);
        let K = B && !A,
          L = A && z && B,
          M = (0, t.useRef)(!1),
          O = a1(() => {
            M.current || (D("hidden"), H(u));
          }, E),
          P = G((a) => {
            (M.current = !0),
              O.onStart(u, a ? "enter" : "leave", (a) => {
                "enter" === a
                  ? null == f || f()
                  : "leave" === a && (null == h || h());
              });
          }),
          Q = G((a) => {
            let b = a ? "enter" : "leave";
            (M.current = !1),
              O.onStop(u, b, (a) => {
                "enter" === a
                  ? null == g || g()
                  : "leave" === a && (null == i || i());
              }),
              "leave" !== b || a0(O) || (D("hidden"), H(u));
          });
        (0, t.useEffect)(() => {
          (v && e) || (P(z), Q(z));
        }, [z, v, e]);
        let [, R] = (function (a, b, c, d) {
            let [e, f] = (0, t.useState)(c),
              {
                hasFlag: g,
                addFlag: h,
                removeFlag: i,
              } = (function (a = 0) {
                let [b, c] = (0, t.useState)(a),
                  d = (0, t.useCallback)((a) => c(a), [b]),
                  e = (0, t.useCallback)((a) => c((b) => b | a), [b]),
                  f = (0, t.useCallback)((a) => (b & a) === a, [b]);
                return {
                  flags: b,
                  setFlag: d,
                  addFlag: e,
                  hasFlag: f,
                  removeFlag: (0, t.useCallback)((a) => c((b) => b & ~a), [c]),
                  toggleFlag: (0, t.useCallback)((a) => c((b) => b ^ a), [c]),
                };
              })(a && e ? 3 : 0),
              j = (0, t.useRef)(!1),
              k = (0, t.useRef)(!1);
            return (
              y(() => {
                var e;
                if (a) {
                  if ((c && f(!0), !b)) {
                    c && h(3);
                    return;
                  }
                  return (
                    null == (e = null == d ? void 0 : d.start) || e.call(d, c),
                    (function (
                      a,
                      { prepare: b, run: c, done: d, inFlight: e },
                    ) {
                      let f = I();
                      return (
                        (function (a, { inFlight: b, prepare: c }) {
                          if (null != b && b.current) return c();
                          let d = a.style.transition;
                          (a.style.transition = "none"),
                            c(),
                            a.offsetHeight,
                            (a.style.transition = d);
                        })(a, { prepare: b, inFlight: e }),
                        f.nextFrame(() => {
                          c(),
                            f.requestAnimationFrame(() => {
                              f.add(
                                (function (a, b) {
                                  var c, d;
                                  let e = I();
                                  if (!a) return e.dispose;
                                  let f = !1;
                                  e.add(() => {
                                    f = !0;
                                  });
                                  let g =
                                    null !=
                                    (d =
                                      null == (c = a.getAnimations)
                                        ? void 0
                                        : c
                                            .call(a)
                                            .filter(
                                              (a) => a instanceof CSSTransition,
                                            ))
                                      ? d
                                      : [];
                                  return (
                                    0 === g.length
                                      ? b()
                                      : Promise.allSettled(
                                          g.map((a) => a.finished),
                                        ).then(() => {
                                          f || b();
                                        }),
                                    e.dispose
                                  );
                                })(a, d),
                              );
                            });
                        }),
                        f.dispose
                      );
                    })(b, {
                      inFlight: j,
                      prepare() {
                        k.current ? (k.current = !1) : (k.current = j.current),
                          (j.current = !0),
                          k.current || (c ? (h(3), i(4)) : (h(4), i(2)));
                      },
                      run() {
                        k.current
                          ? c
                            ? (i(3), h(4))
                            : (i(4), h(3))
                          : c
                            ? i(1)
                            : h(1);
                      },
                      done() {
                        var a;
                        (k.current &&
                          "function" == typeof b.getAnimations &&
                          b.getAnimations().length > 0) ||
                          ((j.current = !1),
                          i(7),
                          c || f(!1),
                          null == (a = null == d ? void 0 : d.end) ||
                            a.call(d, c));
                      },
                    })
                  );
                }
              }, [a, c, b, aE()]),
              a
                ? [
                    e,
                    {
                      closed: g(1),
                      enter: g(2),
                      leave: g(4),
                      transition: g(2) || g(4),
                    },
                  ]
                : [
                    c,
                    {
                      closed: void 0,
                      enter: void 0,
                      leave: void 0,
                      transition: void 0,
                    },
                  ]
            );
          })(!(!e || !v || !J || K), r, z, { start: P, end: Q }),
          S = ah({
            ref: w,
            className:
              (null ==
              (d = _(
                q.className,
                L && j,
                L && k,
                R.enter && j,
                R.enter && R.closed && k,
                R.enter && !R.closed && l,
                R.leave && n,
                R.leave && !R.closed && o,
                R.leave && R.closed && p,
                !R.transition && z && m,
              ))
                ? void 0
                : d.trim()) || void 0,
            ...(function (a) {
              let b = {};
              for (let c in a) !0 === a[c] && (b[`data-${c}`] = "");
              return b;
            })(R),
          }),
          T = 0;
        "visible" === C && (T |= av.Open),
          "hidden" === C && (T |= av.Closed),
          R.enter && (T |= av.Opening),
          R.leave && (T |= av.Closing);
        let U = ac();
        return t.default.createElement(
          a_.Provider,
          { value: O },
          t.default.createElement(
            ax,
            { value: T },
            U({
              ourProps: S,
              theirProps: q,
              defaultTag: a2,
              features: a3,
              visible: "visible" === C,
              name: "Transition.Child",
            }),
          ),
        );
      }),
      a6 = ag(function (a, b) {
        let c = null !== (0, t.useContext)(aZ),
          d = null !== aw();
        return t.default.createElement(
          t.default.Fragment,
          null,
          !c && d
            ? t.default.createElement(a4, { ref: b, ...a })
            : t.default.createElement(a5, { ref: b, ...a }),
        );
      }),
      a7 = Object.assign(a4, { Child: a6, Root: a4 });
    a.s(["Transition", () => a7, "TransitionChild", () => a6], 33958);
    var a8 =
        (((p = a8 || {})[(p.Open = 0)] = "Open"),
        (p[(p.Closed = 1)] = "Closed"),
        p),
      a9 = (((q = a9 || {})[(q.SetTitleId = 0)] = "SetTitleId"), q);
    let ba = {
        0: (a, b) => (a.titleId === b.id ? a : { ...a, titleId: b.id }),
      },
      bb = (0, t.createContext)(null);
    function bc(a) {
      let b = (0, t.useContext)(bb);
      if (null === b) {
        let b = Error(`<${a} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(b, bc), b);
      }
      return b;
    }
    function bd(a, b) {
      return N(b.type, ba, a, b);
    }
    bb.displayName = "DialogContext";
    let be = ag(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n = (0, t.useId)(),
          {
            id: o = `headlessui-dialog-${n}`,
            open: p,
            onClose: q,
            initialFocus: r,
            role: s = "dialog",
            autoFocus: v = !0,
            __demoMode: w = !1,
            unmount: x = !1,
            ...B
          } = a,
          C = (0, t.useRef)(!1);
        s =
          "dialog" === s || "alertdialog" === s
            ? s
            : (C.current ||
                ((C.current = !0),
                console.warn(
                  `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                )),
              "dialog");
        let E = aw();
        void 0 === p && null !== E && (p = (E & av.Open) === av.Open);
        let H = (0, t.useRef)(null),
          K = ar(H, b),
          L = $(H),
          P = +!p,
          [Q, R] = (0, t.useReducer)(bd, {
            titleId: null,
            descriptionId: null,
            panelRef: (0, t.createRef)(),
          }),
          S = G(() => q(!1)),
          U = G((a) => R({ type: 0, id: a })),
          V = !!ap() && 0 === P,
          [W, _] =
            ((c = (0, t.useContext)(aT)),
            (d = (0, t.useRef)([])),
            (e = G((a) => (d.current.push(a), c && c.register(a), () => f(a)))),
            (f = G((a) => {
              let b = d.current.indexOf(a);
              -1 !== b && d.current.splice(b, 1), c && c.unregister(a);
            })),
            (g = (0, t.useMemo)(
              () => ({ register: e, unregister: f, portals: d }),
              [e, f, d],
            )),
            [
              d,
              (0, t.useMemo)(
                () =>
                  function ({ children: a }) {
                    return t.default.createElement(
                      aT.Provider,
                      { value: g },
                      a,
                    );
                  },
                [g],
              ),
            ]),
          aa = an(),
          { resolveContainers: ab } = (function ({
            defaultContainers: a = [],
            portals: b,
            mainTreeNode: c,
          } = {}) {
            let d = $(c),
              e = G(() => {
                var e, f;
                let g = [];
                for (let b of a)
                  null !== b &&
                    (b instanceof HTMLElement
                      ? g.push(b)
                      : "current" in b &&
                        b.current instanceof HTMLElement &&
                        g.push(b.current));
                if (null != b && b.current) for (let a of b.current) g.push(a);
                for (let a of null !=
                (e =
                  null == d ? void 0 : d.querySelectorAll("html > *, body > *"))
                  ? e
                  : [])
                  a !== document.body &&
                    a !== document.head &&
                    a instanceof HTMLElement &&
                    "headlessui-portal-root" !== a.id &&
                    ((c &&
                      (a.contains(c) ||
                        a.contains(
                          null == (f = null == c ? void 0 : c.getRootNode())
                            ? void 0
                            : f.host,
                        ))) ||
                      g.some((b) => a.contains(b)) ||
                      g.push(a));
                return g;
              });
            return {
              resolveContainers: e,
              contains: G((a) => e().some((b) => b.contains(a))),
            };
          })({
            mainTreeNode: aa,
            portals: W,
            defaultContainers: [
              {
                get current() {
                  var ad;
                  return null != (ad = Q.panelRef.current) ? ad : H.current;
                },
              },
            ],
          }),
          ae = null !== E && (E & av.Closing) === av.Closing;
        (function (a, { allowed: b, disallowed: c } = {}) {
          let d = F(a, "inert-others");
          y(() => {
            var a, e;
            if (!d) return;
            let f = I();
            for (let b of null != (a = null == c ? void 0 : c()) ? a : [])
              b && f.add(M(b));
            let g = null != (e = null == b ? void 0 : b()) ? e : [];
            for (let a of g) {
              if (!a) continue;
              let b = J(a);
              if (!b) continue;
              let c = a.parentElement;
              for (; c && c !== b.body; ) {
                for (let a of c.children)
                  g.some((b) => a.contains(b)) || f.add(M(a));
                c = c.parentElement;
              }
            }
            return f.dispose;
          }, [d, b, c]);
        })(!w && !ae && V, {
          allowed: G(() => {
            var a, b;
            return [
              null !=
              (b =
                null == (a = H.current)
                  ? void 0
                  : a.closest("[data-headlessui-portal]"))
                ? b
                : null,
            ];
          }),
          disallowed: G(() => {
            var a;
            return [
              null !=
              (a =
                null == aa
                  ? void 0
                  : aa.closest("body > *:not(#headlessui-portal-root)"))
                ? a
                : null,
            ];
          }),
        }),
          (h = F(V, "outside-click")),
          (i = z((a) => {
            a.preventDefault(), S();
          })),
          (j = (0, t.useCallback)(
            function (a, b) {
              if (a.defaultPrevented) return;
              let c = b(a);
              if (null !== c && c.getRootNode().contains(c) && c.isConnected) {
                for (let b of (function a(b) {
                  return "function" == typeof b
                    ? a(b())
                    : Array.isArray(b) || b instanceof Set
                      ? b
                      : [b];
                })(ab))
                  if (
                    null !== b &&
                    (b.contains(c) ||
                      (a.composed && a.composedPath().includes(b)))
                  )
                    return;
                return (
                  (function (a, b = 0) {
                    var c;
                    return (
                      a !== (null == (c = J(a)) ? void 0 : c.body) &&
                      N(b, {
                        0: () => a.matches(O),
                        1() {
                          let b = a;
                          for (; null !== b; ) {
                            if (b.matches(O)) return !0;
                            b = b.parentElement;
                          }
                          return !1;
                        },
                      })
                    );
                  })(c, T.Loose) ||
                    -1 === c.tabIndex ||
                    a.preventDefault(),
                  i.current(a, c)
                );
              }
            },
            [i, ab],
          )),
          (k = (0, t.useRef)(null)),
          Y(
            h,
            "pointerdown",
            (a) => {
              var b, c;
              k.current =
                (null == (c = null == (b = a.composedPath) ? void 0 : b.call(a))
                  ? void 0
                  : c[0]) || a.target;
            },
            !0,
          ),
          Y(
            h,
            "mousedown",
            (a) => {
              var b, c;
              k.current =
                (null == (c = null == (b = a.composedPath) ? void 0 : b.call(a))
                  ? void 0
                  : c[0]) || a.target;
            },
            !0,
          ),
          Y(
            h,
            "click",
            (a) => {
              X() ||
                /Android/gi.test(window.navigator.userAgent) ||
                (k.current && (j(a, () => k.current), (k.current = null)));
            },
            !0,
          ),
          (l = (0, t.useRef)({ x: 0, y: 0 })),
          Y(
            h,
            "touchstart",
            (a) => {
              (l.current.x = a.touches[0].clientX),
                (l.current.y = a.touches[0].clientY);
            },
            !0,
          ),
          Y(
            h,
            "touchend",
            (a) => {
              let b = {
                x: a.changedTouches[0].clientX,
                y: a.changedTouches[0].clientY,
              };
              if (
                !(
                  Math.abs(b.x - l.current.x) >= 30 ||
                  Math.abs(b.y - l.current.y) >= 30
                )
              )
                return j(a, () =>
                  a.target instanceof HTMLElement ? a.target : null,
                );
            },
            !0,
          ),
          Z(
            h,
            "blur",
            (a) =>
              j(a, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null,
              ),
            !0,
          ),
          (function (
            a,
            b = "undefined" != typeof document ? document.defaultView : null,
            c,
          ) {
            let d = F(a, "escape");
            A(b, "keydown", (a) => {
              d && (a.defaultPrevented || (a.key === u.Escape && c(a)));
            });
          })(V, null == L ? void 0 : L.defaultView, (a) => {
            a.preventDefault(),
              a.stopPropagation(),
              document.activeElement &&
                "blur" in document.activeElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur(),
              S();
          }),
          (function (a, b, c = () => [document.body]) {
            !(function (a, b, c = () => ({ containers: [] })) {
              let d = D(ao),
                e = b ? d.get(b) : void 0;
              e && e.count,
                y(() => {
                  if (!(!b || !a))
                    return (
                      ao.dispatch("PUSH", b, c), () => ao.dispatch("POP", b, c)
                    );
                }, [a, b]);
            })(F(a, "scroll-lock"), b, (a) => {
              var b;
              return {
                containers: [...(null != (b = a.containers) ? b : []), c],
              };
            });
          })(!w && !ae && V, L, ab),
          (m = z((a) => {
            let b = a.getBoundingClientRect();
            0 === b.x && 0 === b.y && 0 === b.width && 0 === b.height && S();
          })),
          (0, t.useEffect)(() => {
            if (!V) return;
            let a =
              null === H ? null : H instanceof HTMLElement ? H : H.current;
            if (!a) return;
            let b = I();
            if ("undefined" != typeof ResizeObserver) {
              let c = new ResizeObserver(() => m.current(a));
              c.observe(a), b.add(() => c.disconnect());
            }
            if ("undefined" != typeof IntersectionObserver) {
              let c = new IntersectionObserver(() => m.current(a));
              c.observe(a), b.add(() => c.disconnect());
            }
            return () => b.dispose();
          }, [H, m, V]);
        let [af, ag] = (function () {
            let [a, b] = (0, t.useState)([]);
            return [
              a.length > 0 ? a.join(" ") : void 0,
              (0, t.useMemo)(
                () =>
                  function (a) {
                    let c = G(
                        (a) => (
                          b((b) => [...b, a]),
                          () =>
                            b((b) => {
                              let c = b.slice(),
                                d = c.indexOf(a);
                              return -1 !== d && c.splice(d, 1), c;
                            })
                        ),
                      ),
                      d = (0, t.useMemo)(
                        () => ({
                          register: c,
                          slot: a.slot,
                          name: a.name,
                          props: a.props,
                          value: a.value,
                        }),
                        [c, a.slot, a.name, a.props, a.value],
                      );
                    return t.default.createElement(
                      aC.Provider,
                      { value: d },
                      a.children,
                    );
                  },
                [b],
              ),
            ];
          })(),
          ah = (0, t.useMemo)(
            () => [{ dialogState: P, close: S, setTitleId: U, unmount: x }, Q],
            [P, Q, S, U, x],
          ),
          ai = (0, t.useMemo)(() => ({ open: 0 === P }), [P]),
          aj = {
            ref: K,
            id: o,
            role: s,
            tabIndex: -1,
            "aria-modal": w ? void 0 : 0 === P || void 0,
            "aria-labelledby": Q.titleId,
            "aria-describedby": af,
            unmount: x,
          },
          ak = !(function () {
            var a;
            let [b] = (0, t.useState)(() => null),
              [c, d] = (0, t.useState)(
                null != (a = null == b ? void 0 : b.matches) && a,
              );
            return (
              y(() => {
                if (b)
                  return (
                    b.addEventListener("change", a),
                    () => b.removeEventListener("change", a)
                  );
                function a(a) {
                  d(a.matches);
                }
              }, [b]),
              c
            );
          })(),
          al = aL.None;
        V &&
          !w &&
          ((al |= aL.RestoreFocus),
          (al |= aL.TabLock),
          v && (al |= aL.AutoFocus),
          ak && (al |= aL.InitialFocus));
        let am = ac();
        return t.default.createElement(
          ay,
          null,
          t.default.createElement(
            aA,
            { force: !0 },
            t.default.createElement(
              aW,
              null,
              t.default.createElement(
                bb.Provider,
                { value: ah },
                t.default.createElement(
                  aV,
                  { target: H },
                  t.default.createElement(
                    aA,
                    { force: !1 },
                    t.default.createElement(
                      ag,
                      { slot: ai },
                      t.default.createElement(
                        _,
                        null,
                        t.default.createElement(
                          aM,
                          {
                            initialFocus: r,
                            initialFocusFallback: H,
                            containers: ab,
                            features: al,
                          },
                          t.default.createElement(
                            at,
                            { value: S },
                            am({
                              ourProps: aj,
                              theirProps: B,
                              slot: ai,
                              defaultTag: bf,
                              features: bg,
                              visible: 0 === P,
                              name: "Dialog",
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }),
      bf = "div",
      bg = aa.RenderStrategy | aa.Static,
      bh = Object.assign(
        ag(function (a, b) {
          let { transition: c = !1, open: d, ...e } = a,
            f = aw(),
            g = a.hasOwnProperty("open") || null !== f,
            h = a.hasOwnProperty("onClose");
          if (!g && !h)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
            );
          if (!g)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
            );
          if (!h)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
            );
          if (!f && "boolean" != typeof a.open)
            throw Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a.open}`,
            );
          if ("function" != typeof a.onClose)
            throw Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a.onClose}`,
            );
          return (void 0 !== d || c) && !e.static
            ? t.default.createElement(
                am,
                null,
                t.default.createElement(
                  a7,
                  { show: d, transition: c, unmount: e.unmount },
                  t.default.createElement(be, { ref: b, ...e }),
                ),
              )
            : t.default.createElement(
                am,
                null,
                t.default.createElement(be, { ref: b, open: d, ...e }),
              );
        }),
        {
          Panel: ag(function (a, b) {
            let c = (0, t.useId)(),
              {
                id: d = `headlessui-dialog-panel-${c}`,
                transition: e = !1,
                ...f
              } = a,
              [{ dialogState: g, unmount: h }, i] = bc("Dialog.Panel"),
              j = ar(b, i.panelRef),
              k = (0, t.useMemo)(() => ({ open: 0 === g }), [g]),
              l = G((a) => {
                a.stopPropagation();
              }),
              m = e ? a6 : t.Fragment,
              n = ac();
            return t.default.createElement(
              m,
              { ...(e ? { unmount: h } : {}) },
              n({
                ourProps: { ref: j, id: d, onClick: l },
                theirProps: f,
                slot: k,
                defaultTag: "div",
                name: "Dialog.Panel",
              }),
            );
          }),
          Title:
            (ag(function (a, b) {
              let { transition: c = !1, ...d } = a,
                [{ dialogState: e, unmount: f }] = bc("Dialog.Backdrop"),
                g = (0, t.useMemo)(() => ({ open: 0 === e }), [e]),
                h = c ? a6 : t.Fragment,
                i = ac();
              return t.default.createElement(
                h,
                { ...(c ? { unmount: f } : {}) },
                i({
                  ourProps: { ref: b, "aria-hidden": !0 },
                  theirProps: d,
                  slot: g,
                  defaultTag: "div",
                  name: "Dialog.Backdrop",
                }),
              );
            }),
            ag(function (a, b) {
              let c = (0, t.useId)(),
                { id: d = `headlessui-dialog-title-${c}`, ...e } = a,
                [{ dialogState: f, setTitleId: g }] = bc("Dialog.Title"),
                h = ar(b);
              (0, t.useEffect)(() => (g(d), () => g(null)), [d, g]);
              let i = (0, t.useMemo)(() => ({ open: 0 === f }), [f]);
              return ac()({
                ourProps: { ref: h, id: d },
                theirProps: e,
                slot: i,
                defaultTag: "h2",
                name: "Dialog.Title",
              });
            })),
          Description: aD,
        },
      );
    a.s(["Dialog", () => bh], 56472);
    let bi = t.forwardRef(function ({ title: a, titleId: b, ...c }, d) {
      return t.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: d,
            "aria-labelledby": b,
          },
          c,
        ),
        a ? t.createElement("title", { id: b }, a) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18 18 6M6 6l12 12",
        }),
      );
    });
    a.s(["XMarkIcon", 0, bi], 16645);
  },
  93351,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(39337),
      d = a.i(56472),
      e = a.i(33958),
      f = a.i(56778);
    let g = f.forwardRef(function ({ title: a, titleId: b, ...c }, d) {
      return f.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: d,
            "aria-labelledby": b,
          },
          c,
        ),
        a ? f.createElement("title", { id: b }, a) : null,
        f.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
        }),
      );
    });
    var h = a.i(16645);
    let i = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md",
      j = ({ className: a }) =>
        (0, b.jsxs)("span", {
          className: "mx-2 inline-flex items-center",
          children: [
            (0, b.jsx)("span", { className: (0, c.default)(i, a) }),
            (0, b.jsx)("span", {
              className: (0, c.default)(i, "animation-delay-[200ms]", a),
            }),
            (0, b.jsx)("span", {
              className: (0, c.default)(i, "animation-delay-[400ms]", a),
            }),
          ],
        });
    var k = a.i(73709);
    let l = "Default Title";
    var m = a.i(97895),
      n = a.i(86102),
      o = a.i(37067),
      p = a.i(99938),
      q = a.i(86752),
      r = (0, q.createServerReference)(
        "009b4a1587e3d2a47cd619a5b166897f83eda9e010",
        q.callServer,
        void 0,
        q.findSourceMapURL,
        "createCartAndSetCookie",
      ),
      s = (0, q.createServerReference)(
        "00227bc1d80376c933e03488b754903f21c91acc98",
        q.callServer,
        void 0,
        q.findSourceMapURL,
        "redirectToCheckout",
      ),
      t = a.i(68298),
      u = (0, q.createServerReference)(
        "6093f79424fc50407f7b0a896a4a37335a90119100",
        q.callServer,
        void 0,
        q.findSourceMapURL,
        "removeItem",
      );
    function v({ item: a, optimisticUpdate: c }) {
      let [d, e] = (0, f.useActionState)(u, null),
        g = a.merchandise.id,
        i = e.bind(null, g);
      return (0, b.jsxs)("form", {
        action: async () => {
          c(g, "delete"), i();
        },
        children: [
          (0, b.jsx)("button", {
            type: "submit",
            "aria-label": "Remove cart item",
            className:
              "flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500",
            children: (0, b.jsx)(h.XMarkIcon, {
              className: "mx-[1px] h-4 w-4 text-white dark:text-black",
            }),
          }),
          (0, b.jsx)("p", {
            "aria-live": "polite",
            className: "sr-only",
            role: "status",
            children: d,
          }),
        ],
      });
    }
    let w = f.forwardRef(function ({ title: a, titleId: b, ...c }, d) {
      return f.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: d,
            "aria-labelledby": b,
          },
          c,
        ),
        a ? f.createElement("title", { id: b }, a) : null,
        f.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12h14",
        }),
      );
    });
    var x = a.i(74197),
      y = (0, q.createServerReference)(
        "60f8698591b6686671ccab662a991743f896fd8778",
        q.callServer,
        void 0,
        q.findSourceMapURL,
        "updateItemQuantity",
      );
    function z({ type: a }) {
      return (0, b.jsx)("button", {
        type: "submit",
        "aria-label":
          "plus" === a ? "Increase item quantity" : "Reduce item quantity",
        className: (0, c.default)(
          "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
          { "ml-auto": "minus" === a },
        ),
        children:
          "plus" === a
            ? (0, b.jsx)(x.PlusIcon, {
                className: "h-4 w-4 dark:text-neutral-500",
              })
            : (0, b.jsx)(w, { className: "h-4 w-4 dark:text-neutral-500" }),
      });
    }
    function A({ item: a, type: c, optimisticUpdate: d }) {
      let [e, g] = (0, f.useActionState)(y, null),
        h = {
          merchandiseId: a.merchandise.id,
          quantity: "plus" === c ? a.quantity + 1 : a.quantity - 1,
        },
        i = g.bind(null, h);
      return (0, b.jsxs)("form", {
        action: async () => {
          d(h.merchandiseId, c), i();
        },
        children: [
          (0, b.jsx)(z, { type: c }),
          (0, b.jsx)("p", {
            "aria-live": "polite",
            className: "sr-only",
            role: "status",
            children: e,
          }),
        ],
      });
    }
    function B({ className: a, quantity: d }) {
      return (0, b.jsxs)("div", {
        className:
          "relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",
        children: [
          (0, b.jsx)(g, {
            className: (0, c.default)(
              "h-4 transition-all ease-in-out hover:scale-110",
              a,
            ),
          }),
          d
            ? (0, b.jsx)("div", {
                className:
                  "absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-blue-600 text-[11px] font-medium text-white",
                children: d,
              })
            : null,
        ],
      });
    }
    function C() {
      let { cart: a, updateCartItem: c } = (0, t.useCart)(),
        [h, i] = (0, f.useState)(!1),
        j = (0, f.useRef)(a?.totalQuantity),
        p = () => i(!1);
      return (
        (0, f.useEffect)(() => {
          a || r();
        }, [a]),
        (0, f.useEffect)(() => {
          a?.totalQuantity &&
            a?.totalQuantity !== j.current &&
            a?.totalQuantity > 0 &&
            (h || i(!0), (j.current = a?.totalQuantity));
        }, [h, a?.totalQuantity, j]),
        (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)("button", {
              "aria-label": "Open cart",
              onClick: () => i(!0),
              children: (0, b.jsx)(B, { quantity: a?.totalQuantity }),
            }),
            (0, b.jsx)(e.Transition, {
              show: h,
              children: (0, b.jsxs)(d.Dialog, {
                onClose: p,
                className: "relative z-50",
                children: [
                  (0, b.jsx)(e.Transition.Child, {
                    as: f.Fragment,
                    enter: "transition-all ease-in-out duration-300",
                    enterFrom: "opacity-0 backdrop-blur-none",
                    enterTo: "opacity-100 backdrop-blur-[.5px]",
                    leave: "transition-all ease-in-out duration-200",
                    leaveFrom: "opacity-100 backdrop-blur-[.5px]",
                    leaveTo: "opacity-0 backdrop-blur-none",
                    children: (0, b.jsx)("div", {
                      className: "fixed inset-0 bg-black/30",
                      "aria-hidden": "true",
                    }),
                  }),
                  (0, b.jsx)(e.Transition.Child, {
                    as: f.Fragment,
                    enter: "transition-all ease-in-out duration-300",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transition-all ease-in-out duration-200",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                    children: (0, b.jsxs)(d.Dialog.Panel, {
                      className:
                        "fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, b.jsx)("p", {
                              className: "text-lg font-semibold",
                              children: "My Cart",
                            }),
                            (0, b.jsx)("button", {
                              "aria-label": "Close cart",
                              onClick: p,
                              children: (0, b.jsx)(D, {}),
                            }),
                          ],
                        }),
                        a && 0 !== a.lines.length
                          ? (0, b.jsxs)("div", {
                              className:
                                "flex h-full flex-col justify-between overflow-hidden p-1",
                              children: [
                                (0, b.jsx)("ul", {
                                  className: "grow overflow-auto py-4",
                                  children: a.lines
                                    .sort((a, b) =>
                                      a.merchandise.product.title.localeCompare(
                                        b.merchandise.product.title,
                                      ),
                                    )
                                    .map((a, d) => {
                                      let e = {};
                                      a.merchandise.selectedOptions.forEach(
                                        ({ name: a, value: b }) => {
                                          b !== l && (e[a.toLowerCase()] = b);
                                        },
                                      );
                                      let f = (0, m.createUrl)(
                                        `/product/${a.merchandise.product.handle}`,
                                        new URLSearchParams(e),
                                      );
                                      return (0, b.jsx)(
                                        "li",
                                        {
                                          className:
                                            "flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700",
                                          children: (0, b.jsxs)("div", {
                                            className:
                                              "relative flex w-full flex-row justify-between px-1 py-4",
                                            children: [
                                              (0, b.jsx)("div", {
                                                className:
                                                  "absolute z-40 -ml-1 -mt-2",
                                                children: (0, b.jsx)(v, {
                                                  item: a,
                                                  optimisticUpdate: c,
                                                }),
                                              }),
                                              (0, b.jsxs)("div", {
                                                className: "flex flex-row",
                                                children: [
                                                  (0, b.jsx)("div", {
                                                    className:
                                                      "relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                                                    children: (0, b.jsx)(
                                                      n.default,
                                                      {
                                                        className:
                                                          "h-full w-full object-cover",
                                                        width: 64,
                                                        height: 64,
                                                        alt:
                                                          a.merchandise.product
                                                            .featuredImage
                                                            .altText ||
                                                          a.merchandise.product
                                                            .title,
                                                        src: a.merchandise
                                                          .product.featuredImage
                                                          .url,
                                                      },
                                                    ),
                                                  }),
                                                  (0, b.jsx)(o.default, {
                                                    href: f,
                                                    onClick: p,
                                                    className:
                                                      "z-30 ml-2 flex flex-row space-x-4",
                                                    children: (0, b.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex flex-1 flex-col text-base",
                                                        children: [
                                                          (0, b.jsx)("span", {
                                                            className:
                                                              "leading-tight",
                                                            children:
                                                              a.merchandise
                                                                .product.title,
                                                          }),
                                                          a.merchandise
                                                            .title !== l
                                                            ? (0, b.jsx)("p", {
                                                                className:
                                                                  "text-sm text-neutral-500 dark:text-neutral-400",
                                                                children:
                                                                  a.merchandise
                                                                    .title,
                                                              })
                                                            : null,
                                                        ],
                                                      },
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, b.jsxs)("div", {
                                                className:
                                                  "flex h-16 flex-col justify-between",
                                                children: [
                                                  (0, b.jsx)(k.default, {
                                                    className:
                                                      "flex justify-end space-y-2 text-right text-sm",
                                                    amount:
                                                      a.cost.totalAmount.amount,
                                                    currencyCode:
                                                      a.cost.totalAmount
                                                        .currencyCode,
                                                  }),
                                                  (0, b.jsxs)("div", {
                                                    className:
                                                      "ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700",
                                                    children: [
                                                      (0, b.jsx)(A, {
                                                        item: a,
                                                        type: "minus",
                                                        optimisticUpdate: c,
                                                      }),
                                                      (0, b.jsx)("p", {
                                                        className:
                                                          "w-6 text-center",
                                                        children: (0, b.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "w-full text-sm",
                                                            children:
                                                              a.quantity,
                                                          },
                                                        ),
                                                      }),
                                                      (0, b.jsx)(A, {
                                                        item: a,
                                                        type: "plus",
                                                        optimisticUpdate: c,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        d,
                                      );
                                    }),
                                }),
                                (0, b.jsxs)("div", {
                                  className:
                                    "py-4 text-sm text-neutral-500 dark:text-neutral-400",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      className:
                                        "mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700",
                                      children: [
                                        (0, b.jsx)("p", { children: "Taxes" }),
                                        (0, b.jsx)(k.default, {
                                          className:
                                            "text-right text-base text-black dark:text-white",
                                          amount: a.cost.totalTaxAmount.amount,
                                          currencyCode:
                                            a.cost.totalTaxAmount.currencyCode,
                                        }),
                                      ],
                                    }),
                                    (0, b.jsxs)("div", {
                                      className:
                                        "mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",
                                      children: [
                                        (0, b.jsx)("p", {
                                          children: "Shipping",
                                        }),
                                        (0, b.jsx)("p", {
                                          className: "text-right",
                                          children: "Calculated at checkout",
                                        }),
                                      ],
                                    }),
                                    (0, b.jsxs)("div", {
                                      className:
                                        "mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",
                                      children: [
                                        (0, b.jsx)("p", { children: "Total" }),
                                        (0, b.jsx)(k.default, {
                                          className:
                                            "text-right text-base text-black dark:text-white",
                                          amount: a.cost.totalAmount.amount,
                                          currencyCode:
                                            a.cost.totalAmount.currencyCode,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, b.jsx)("form", {
                                  action: s,
                                  children: (0, b.jsx)(E, {}),
                                }),
                              ],
                            })
                          : (0, b.jsxs)("div", {
                              className:
                                "mt-20 flex w-full flex-col items-center justify-center overflow-hidden",
                              children: [
                                (0, b.jsx)(g, { className: "h-16" }),
                                (0, b.jsx)("p", {
                                  className:
                                    "mt-6 text-center text-2xl font-bold",
                                  children: "Your cart is empty.",
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    function D({ className: a }) {
      return (0, b.jsx)("div", {
        className:
          "relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",
        children: (0, b.jsx)(h.XMarkIcon, {
          className: (0, c.default)(
            "h-6 transition-all ease-in-out hover:scale-110",
            a,
          ),
        }),
      });
    }
    function E() {
      let { pending: a } = (0, p.useFormStatus)();
      return (0, b.jsx)("button", {
        className:
          "block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100",
        type: "submit",
        disabled: a,
        children: a
          ? (0, b.jsx)(j, { className: "bg-white" })
          : "Proceed to Checkout",
      });
    }
    a.s(["default", () => C], 93351);
  },
  91404,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      DISALLOWED_FORM_PROPS: function () {
        return f;
      },
      checkFormActionUrl: function () {
        return h;
      },
      createFormSubmitDestinationUrl: function () {
        return g;
      },
      hasReactClientActionAttributes: function () {
        return m;
      },
      hasUnsupportedSubmitterAttributes: function () {
        return l;
      },
      isSupportedFormEncType: function () {
        return i;
      },
      isSupportedFormMethod: function () {
        return j;
      },
      isSupportedFormTarget: function () {
        return k;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = ["method", "encType", "target"];
    function g(a, b) {
      let c;
      try {
        let b = window.location.href;
        c = new URL(a, b);
      } catch (b) {
        throw Object.defineProperty(
          Error(`Cannot parse form action "${a}" as a URL`, { cause: b }),
          "__NEXT_ERROR_CODE",
          { value: "E152", enumerable: !1, configurable: !0 },
        );
      }
      for (let [a, d] of (c.searchParams.size && (c.search = ""),
      new FormData(b)))
        "string" != typeof d && (d = d.name), c.searchParams.append(a, d);
      return c;
    }
    function h(a, b) {
      let c,
        d = "action" === b ? "an `action`" : "a `formAction`";
      try {
        c = new URL(a, "http://n");
      } catch (b) {
        console.error(
          `<Form> received ${d} that cannot be parsed as a URL: "${a}".`,
        );
        return;
      }
      c.searchParams.size &&
        console.warn(
          `<Form> received ${d} that contains search params: "${a}". This is not supported, and they will be ignored. If you need to pass in additional search params, use an \`<input type="hidden" />\` instead.`,
        );
    }
    let i = (a) => "application/x-www-form-urlencoded" === a,
      j = (a) => "get" === a,
      k = (a) => "_self" === a;
    function l(a) {
      let b = a.getAttribute("formEncType");
      if (null !== b && !i(b)) return !0;
      let c = a.getAttribute("formMethod");
      if (null !== c && !j(c)) return !0;
      let d = a.getAttribute("formTarget");
      return !(null === d || k(d));
    }
    function m(a) {
      let b = a.getAttribute("formAction");
      return b && /\s*javascript:/i.test(b);
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  49614,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let d = a.r(63895),
      e = a.r(56778),
      f = a.r(32173),
      g = a.r(2107),
      h = a.r(31901),
      i = a.r(91404),
      j = a.r(77613),
      k = a.r(15706);
    function l({ replace: a, scroll: b, prefetch: c, ref: l, ...m }) {
      let n = (0, e.useContext)(h.AppRouterContext),
        o = m.action,
        p = "string" == typeof o;
      for (let a of i.DISALLOWED_FORM_PROPS) a in m && delete m[a];
      let q = !!n && p && null === (!1 === c || null === c ? c : null),
        r = (0, e.useCallback)(
          (a) => (
            q &&
              null !== n &&
              (0, j.mountFormInstance)(a, o, n, k.FetchStrategy.PPR),
            () => {
              (0, j.unmountPrefetchableInstance)(a);
            }
          ),
          [q, o, n],
        ),
        s = (0, g.useMergedRef)(r, l ?? null);
      if (!p) return (0, d.jsx)("form", { ...m, ref: s });
      let t = (0, f.addBasePath)(o);
      return (0, d.jsx)("form", {
        ...m,
        ref: s,
        action: t,
        onSubmit: (c) =>
          (function (
            a,
            { actionHref: b, onSubmit: c, replace: d, scroll: e, router: f },
          ) {
            if (("function" == typeof c && (c(a), a.defaultPrevented)) || !f)
              return;
            let g = a.currentTarget,
              h = a.nativeEvent.submitter,
              j = b;
            if (h) {
              if (
                (0, i.hasUnsupportedSubmitterAttributes)(h) ||
                (0, i.hasReactClientActionAttributes)(h)
              )
                return;
              let a = h.getAttribute("formAction");
              null !== a && (j = a);
            }
            let k = (0, i.createFormSubmitDestinationUrl)(j, g);
            a.preventDefault();
            let l = k.href;
            f[d ? "replace" : "push"](l, { scroll: e });
          })(c, {
            router: n,
            actionHref: t,
            replace: a,
            scroll: b,
            onSubmit: m.onSubmit,
          }),
      });
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  4366,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(56778);
    let d = c.forwardRef(function ({ title: a, titleId: b, ...d }, e) {
      return c.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: e,
            "aria-labelledby": b,
          },
          d,
        ),
        a ? c.createElement("title", { id: b }, a) : null,
        c.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
        }),
      );
    });
    var e = a.i(49614),
      f = a.i(14522);
    function g() {
      let a = (0, f.useSearchParams)();
      return (0, b.jsxs)(e.default, {
        action: "/search",
        className: "w-max-[550px] relative w-full lg:w-80 xl:w-full",
        children: [
          (0, b.jsx)(
            "input",
            {
              type: "text",
              name: "q",
              placeholder: "Search for products...",
              autoComplete: "off",
              defaultValue: a?.get("q") || "",
              className:
                "text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400",
            },
            a?.get("q"),
          ),
          (0, b.jsx)("div", {
            className: "absolute right-0 top-0 mr-3 flex h-full items-center",
            children: (0, b.jsx)(d, { className: "h-4" }),
          }),
        ],
      });
    }
    function h() {
      return (0, b.jsxs)("form", {
        className: "w-max-[550px] relative w-full lg:w-80 xl:w-full",
        children: [
          (0, b.jsx)("input", {
            placeholder: "Search for products...",
            className:
              "w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400",
          }),
          (0, b.jsx)("div", {
            className: "absolute right-0 top-0 mr-3 flex h-full items-center",
            children: (0, b.jsx)(d, { className: "h-4" }),
          }),
        ],
      });
    }
    a.s(["SearchSkeleton", () => h, "default", () => g], 4366);
  },
  77752,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(56472),
      d = a.i(33958),
      e = a.i(37067),
      f = a.i(14522),
      g = a.i(56778);
    let h = g.forwardRef(function ({ title: a, titleId: b, ...c }, d) {
      return g.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: d,
            "aria-labelledby": b,
          },
          c,
        ),
        a ? g.createElement("title", { id: b }, a) : null,
        g.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
        }),
      );
    });
    var i = a.i(16645),
      j = a.i(4366);
    function k({ menu: a }) {
      let k = (0, f.usePathname)(),
        l = (0, f.useSearchParams)(),
        [m, n] = (0, g.useState)(!1),
        o = () => n(!1);
      return (
        (0, g.useEffect)(() => {
          let a = () => {
            window.innerWidth > 768 && n(!1);
          };
          return (
            window.addEventListener("resize", a),
            () => window.removeEventListener("resize", a)
          );
        }, [m]),
        (0, g.useEffect)(() => {
          n(!1);
        }, [k, l]),
        (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)("button", {
              onClick: () => n(!0),
              "aria-label": "Open mobile menu",
              className:
                "flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white",
              children: (0, b.jsx)(h, { className: "h-4" }),
            }),
            (0, b.jsx)(d.Transition, {
              show: m,
              children: (0, b.jsxs)(c.Dialog, {
                onClose: o,
                className: "relative z-50",
                children: [
                  (0, b.jsx)(d.Transition.Child, {
                    as: g.Fragment,
                    enter: "transition-all ease-in-out duration-300",
                    enterFrom: "opacity-0 backdrop-blur-none",
                    enterTo: "opacity-100 backdrop-blur-[.5px]",
                    leave: "transition-all ease-in-out duration-200",
                    leaveFrom: "opacity-100 backdrop-blur-[.5px]",
                    leaveTo: "opacity-0 backdrop-blur-none",
                    children: (0, b.jsx)("div", {
                      className: "fixed inset-0 bg-black/30",
                      "aria-hidden": "true",
                    }),
                  }),
                  (0, b.jsx)(d.Transition.Child, {
                    as: g.Fragment,
                    enter: "transition-all ease-in-out duration-300",
                    enterFrom: "translate-x-[-100%]",
                    enterTo: "translate-x-0",
                    leave: "transition-all ease-in-out duration-200",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-[-100%]",
                    children: (0, b.jsx)(c.Dialog.Panel, {
                      className:
                        "fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black",
                      children: (0, b.jsxs)("div", {
                        className: "p-4",
                        children: [
                          (0, b.jsx)("button", {
                            className:
                              "mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white",
                            onClick: o,
                            "aria-label": "Close mobile menu",
                            children: (0, b.jsx)(i.XMarkIcon, {
                              className: "h-6",
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className: "mb-4 w-full",
                            children: (0, b.jsx)(g.Suspense, {
                              fallback: (0, b.jsx)(j.SearchSkeleton, {}),
                              children: (0, b.jsx)(j.default, {}),
                            }),
                          }),
                          a.length
                            ? (0, b.jsx)("ul", {
                                className: "flex w-full flex-col",
                                children: a.map((a) =>
                                  (0, b.jsx)(
                                    "li",
                                    {
                                      className:
                                        "py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white",
                                      children: (0, b.jsx)(e.default, {
                                        href: a.path,
                                        prefetch: !0,
                                        onClick: o,
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
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    a.s(["default", () => k], 77752);
  },
  97599,
  (a) => {
    "use strict";
    var b = a.i(56778),
      c = a.i(99938);
    let d = Array(12).fill(0),
      e = ({ visible: a, className: c }) =>
        b.default.createElement(
          "div",
          {
            className: ["sonner-loading-wrapper", c].filter(Boolean).join(" "),
            "data-visible": a,
          },
          b.default.createElement(
            "div",
            { className: "sonner-spinner" },
            d.map((a, c) =>
              b.default.createElement("div", {
                className: "sonner-loading-bar",
                key: `spinner-bar-${c}`,
              }),
            ),
          ),
        ),
      f = b.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        b.default.createElement("path", {
          fillRule: "evenodd",
          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
          clipRule: "evenodd",
        }),
      ),
      g = b.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        b.default.createElement("path", {
          fillRule: "evenodd",
          d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd",
        }),
      ),
      h = b.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        b.default.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
          clipRule: "evenodd",
        }),
      ),
      i = b.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        b.default.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
          clipRule: "evenodd",
        }),
      ),
      j = b.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        b.default.createElement("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18",
        }),
        b.default.createElement("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18",
        }),
      ),
      k = 1,
      l = new (class {
        constructor() {
          (this.subscribe = (a) => (
            this.subscribers.push(a),
            () => {
              let b = this.subscribers.indexOf(a);
              this.subscribers.splice(b, 1);
            }
          )),
            (this.publish = (a) => {
              this.subscribers.forEach((b) => b(a));
            }),
            (this.addToast = (a) => {
              this.publish(a), (this.toasts = [...this.toasts, a]);
            }),
            (this.create = (a) => {
              var b;
              let { message: c, ...d } = a,
                e =
                  "number" == typeof (null == a ? void 0 : a.id) ||
                  (null == (b = a.id) ? void 0 : b.length) > 0
                    ? a.id
                    : k++,
                f = this.toasts.find((a) => a.id === e),
                g = void 0 === a.dismissible || a.dismissible;
              return (
                this.dismissedToasts.has(e) && this.dismissedToasts.delete(e),
                f
                  ? (this.toasts = this.toasts.map((b) =>
                      b.id === e
                        ? (this.publish({ ...b, ...a, id: e, title: c }),
                          { ...b, ...a, id: e, dismissible: g, title: c })
                        : b,
                    ))
                  : this.addToast({ title: c, ...d, dismissible: g, id: e }),
                e
              );
            }),
            (this.dismiss = (a) => (
              this.dismissedToasts.add(a),
              a ||
                this.toasts.forEach((a) => {
                  this.subscribers.forEach((b) => b({ id: a.id, dismiss: !0 }));
                }),
              requestAnimationFrame(() =>
                this.subscribers.forEach((b) => b({ id: a, dismiss: !0 })),
              ),
              a
            )),
            (this.message = (a, b) => this.create({ ...b, message: a })),
            (this.error = (a, b) =>
              this.create({ ...b, message: a, type: "error" })),
            (this.success = (a, b) =>
              this.create({ ...b, type: "success", message: a })),
            (this.info = (a, b) =>
              this.create({ ...b, type: "info", message: a })),
            (this.warning = (a, b) =>
              this.create({ ...b, type: "warning", message: a })),
            (this.loading = (a, b) =>
              this.create({ ...b, type: "loading", message: a })),
            (this.promise = (a, c) => {
              let d, e;
              if (!c) return;
              void 0 !== c.loading &&
                (e = this.create({
                  ...c,
                  promise: a,
                  type: "loading",
                  message: c.loading,
                  description:
                    "function" != typeof c.description ? c.description : void 0,
                }));
              let f = Promise.resolve(a instanceof Function ? a() : a),
                g = void 0 !== e,
                h = f
                  .then(async (a) => {
                    if (((d = ["resolve", a]), b.default.isValidElement(a)))
                      (g = !1),
                        this.create({ id: e, type: "default", message: a });
                    else if (m(a) && !a.ok) {
                      g = !1;
                      let b =
                          "function" == typeof c.error
                            ? await c.error(`HTTP error! status: ${a.status}`)
                            : c.error,
                        d =
                          "function" == typeof c.description
                            ? await c.description(
                                `HTTP error! status: ${a.status}`,
                              )
                            : c.description;
                      this.create({
                        id: e,
                        type: "error",
                        description: d,
                        ...("object" == typeof b ? b : { message: b }),
                      });
                    } else if (a instanceof Error) {
                      g = !1;
                      let b =
                          "function" == typeof c.error
                            ? await c.error(a)
                            : c.error,
                        d =
                          "function" == typeof c.description
                            ? await c.description(a)
                            : c.description;
                      this.create({
                        id: e,
                        type: "error",
                        description: d,
                        ...("object" == typeof b ? b : { message: b }),
                      });
                    } else if (void 0 !== c.success) {
                      g = !1;
                      let b =
                          "function" == typeof c.success
                            ? await c.success(a)
                            : c.success,
                        d =
                          "function" == typeof c.description
                            ? await c.description(a)
                            : c.description;
                      this.create({
                        id: e,
                        type: "success",
                        description: d,
                        ...("object" == typeof b ? b : { message: b }),
                      });
                    }
                  })
                  .catch(async (a) => {
                    if (((d = ["reject", a]), void 0 !== c.error)) {
                      g = !1;
                      let b =
                          "function" == typeof c.error
                            ? await c.error(a)
                            : c.error,
                        d =
                          "function" == typeof c.description
                            ? await c.description(a)
                            : c.description;
                      this.create({
                        id: e,
                        type: "error",
                        description: d,
                        ...("object" == typeof b ? b : { message: b }),
                      });
                    }
                  })
                  .finally(() => {
                    g && (this.dismiss(e), (e = void 0)),
                      null == c.finally || c.finally.call(c);
                  }),
                i = () =>
                  new Promise((a, b) =>
                    h
                      .then(() => ("reject" === d[0] ? b(d[1]) : a(d[1])))
                      .catch(b),
                  );
              return "string" != typeof e && "number" != typeof e
                ? { unwrap: i }
                : Object.assign(e, { unwrap: i });
            }),
            (this.custom = (a, b) => {
              let c = (null == b ? void 0 : b.id) || k++;
              return this.create({ jsx: a(c), id: c, ...b }), c;
            }),
            (this.getActiveToasts = () =>
              this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set());
        }
      })(),
      m = (a) =>
        a &&
        "object" == typeof a &&
        "ok" in a &&
        "boolean" == typeof a.ok &&
        "status" in a &&
        "number" == typeof a.status,
      n = Object.assign(
        (a, b) => {
          let c = (null == b ? void 0 : b.id) || k++;
          return l.addToast({ title: a, ...b, id: c }), c;
        },
        {
          success: l.success,
          info: l.info,
          warning: l.warning,
          error: l.error,
          custom: l.custom,
          message: l.message,
          promise: l.promise,
          dismiss: l.dismiss,
          loading: l.loading,
        },
        { getHistory: () => l.toasts, getToasts: () => l.getActiveToasts() },
      );
    function o(a) {
      return void 0 !== a.label;
    }
    function p(...a) {
      return a.filter(Boolean).join(" ");
    }
    !(function (a) {
      if (!a || "undefined" == typeof document) return;
      let b = document.head || document.getElementsByTagName("head")[0],
        c = document.createElement("style");
      (c.type = "text/css"),
        b.appendChild(c),
        c.styleSheet
          ? (c.styleSheet.cssText = a)
          : c.appendChild(document.createTextNode(a));
    })(
      "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
    );
    let q = (a) => {
      var c, d, k, l, m, n, q, r, s, t, u, v, w;
      let {
          invert: x,
          toast: y,
          unstyled: z,
          interacting: A,
          setHeights: B,
          visibleToasts: C,
          heights: D,
          index: E,
          toasts: F,
          expanded: G,
          removeToast: H,
          defaultRichColors: I,
          closeButton: J,
          style: K,
          cancelButtonStyle: L,
          actionButtonStyle: M,
          className: N = "",
          descriptionClassName: O = "",
          duration: P,
          position: Q,
          gap: R,
          expandByDefault: S,
          classNames: T,
          icons: U,
          closeButtonAriaLabel: V = "Close toast",
        } = a,
        [W, X] = b.default.useState(null),
        [Y, Z] = b.default.useState(null),
        [$, _] = b.default.useState(!1),
        [aa, ab] = b.default.useState(!1),
        [ac, ad] = b.default.useState(!1),
        [ae, af] = b.default.useState(!1),
        [ag, ah] = b.default.useState(!1),
        [ai, aj] = b.default.useState(0),
        [ak, al] = b.default.useState(0),
        am = b.default.useRef(y.duration || P || 4e3),
        an = b.default.useRef(null),
        ao = b.default.useRef(null),
        ap = 0 === E,
        aq = E + 1 <= C,
        ar = y.type,
        as = !1 !== y.dismissible,
        at = y.className || "",
        au = y.descriptionClassName || "",
        av = b.default.useMemo(
          () => D.findIndex((a) => a.toastId === y.id) || 0,
          [D, y.id],
        ),
        aw = b.default.useMemo(() => {
          var a;
          return null != (a = y.closeButton) ? a : J;
        }, [y.closeButton, J]),
        ax = b.default.useMemo(() => y.duration || P || 4e3, [y.duration, P]),
        ay = b.default.useRef(0),
        az = b.default.useRef(0),
        aA = b.default.useRef(0),
        aB = b.default.useRef(null),
        [aC, aD] = Q.split("-"),
        aE = b.default.useMemo(
          () => D.reduce((a, b, c) => (c >= av ? a : a + b.height), 0),
          [D, av],
        ),
        aF = (() => {
          let [a, c] = b.default.useState(document.hidden);
          return (
            b.default.useEffect(() => {
              let a = () => {
                c(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", a),
                () => window.removeEventListener("visibilitychange", a)
              );
            }, []),
            a
          );
        })(),
        aG = y.invert || x,
        aH = "loading" === ar;
      (az.current = b.default.useMemo(() => av * R + aE, [av, aE])),
        b.default.useEffect(() => {
          am.current = ax;
        }, [ax]),
        b.default.useEffect(() => {
          _(!0);
        }, []),
        b.default.useEffect(() => {
          let a = ao.current;
          if (a) {
            let b = a.getBoundingClientRect().height;
            return (
              al(b),
              B((a) => [
                { toastId: y.id, height: b, position: y.position },
                ...a,
              ]),
              () => B((a) => a.filter((a) => a.toastId !== y.id))
            );
          }
        }, [B, y.id]),
        b.default.useLayoutEffect(() => {
          if (!$) return;
          let a = ao.current,
            b = a.style.height;
          a.style.height = "auto";
          let c = a.getBoundingClientRect().height;
          (a.style.height = b),
            al(c),
            B((a) =>
              a.find((a) => a.toastId === y.id)
                ? a.map((a) => (a.toastId === y.id ? { ...a, height: c } : a))
                : [{ toastId: y.id, height: c, position: y.position }, ...a],
            );
        }, [$, y.title, y.description, B, y.id]);
      let aI = b.default.useCallback(() => {
        ab(!0),
          aj(az.current),
          B((a) => a.filter((a) => a.toastId !== y.id)),
          setTimeout(() => {
            H(y);
          }, 200);
      }, [y, H, B, az]);
      return (
        b.default.useEffect(() => {
          let a;
          if (
            (!y.promise || "loading" !== ar) &&
            y.duration !== 1 / 0 &&
            "loading" !== y.type
          ) {
            if (G || A || aF) {
              if (aA.current < ay.current) {
                let a = new Date().getTime() - ay.current;
                am.current = am.current - a;
              }
              aA.current = new Date().getTime();
            } else
              am.current !== 1 / 0 &&
                ((ay.current = new Date().getTime()),
                (a = setTimeout(() => {
                  null == y.onAutoClose || y.onAutoClose.call(y, y), aI();
                }, am.current)));
            return () => clearTimeout(a);
          }
        }, [G, A, y, ar, aF, aI]),
        b.default.useEffect(() => {
          y.delete && aI();
        }, [aI, y.delete]),
        b.default.createElement(
          "li",
          {
            tabIndex: 0,
            ref: ao,
            className: p(
              N,
              at,
              null == T ? void 0 : T.toast,
              null == y || null == (c = y.classNames) ? void 0 : c.toast,
              null == T ? void 0 : T.default,
              null == T ? void 0 : T[ar],
              null == y || null == (d = y.classNames) ? void 0 : d[ar],
            ),
            "data-sonner-toast": "",
            "data-rich-colors": null != (t = y.richColors) ? t : I,
            "data-styled": !(y.jsx || y.unstyled || z),
            "data-mounted": $,
            "data-promise": !!y.promise,
            "data-swiped": ag,
            "data-removed": aa,
            "data-visible": aq,
            "data-y-position": aC,
            "data-x-position": aD,
            "data-index": E,
            "data-front": ap,
            "data-swiping": ac,
            "data-dismissible": as,
            "data-type": ar,
            "data-invert": aG,
            "data-swipe-out": ae,
            "data-swipe-direction": Y,
            "data-expanded": !!(G || (S && $)),
            style: {
              "--index": E,
              "--toasts-before": E,
              "--z-index": F.length - E,
              "--offset": `${aa ? ai : az.current}px`,
              "--initial-height": S ? "auto" : `${ak}px`,
              ...K,
              ...y.style,
            },
            onDragEnd: () => {
              ad(!1), X(null), (aB.current = null);
            },
            onPointerDown: (a) => {
              aH ||
                !as ||
                ((an.current = new Date()),
                aj(az.current),
                a.target.setPointerCapture(a.pointerId),
                "BUTTON" !== a.target.tagName &&
                  (ad(!0), (aB.current = { x: a.clientX, y: a.clientY })));
            },
            onPointerUp: () => {
              var a, b, c, d, e;
              if (ae || !as) return;
              aB.current = null;
              let f = Number(
                  (null == (a = ao.current)
                    ? void 0
                    : a.style
                        .getPropertyValue("--swipe-amount-x")
                        .replace("px", "")) || 0,
                ),
                g = Number(
                  (null == (b = ao.current)
                    ? void 0
                    : b.style
                        .getPropertyValue("--swipe-amount-y")
                        .replace("px", "")) || 0,
                ),
                h =
                  new Date().getTime() -
                  (null == (c = an.current) ? void 0 : c.getTime()),
                i = "x" === W ? f : g,
                j = Math.abs(i) / h;
              if (Math.abs(i) >= 45 || j > 0.11) {
                aj(az.current),
                  null == y.onDismiss || y.onDismiss.call(y, y),
                  "x" === W
                    ? Z(f > 0 ? "right" : "left")
                    : Z(g > 0 ? "down" : "up"),
                  aI(),
                  af(!0);
                return;
              }
              null == (d = ao.current) ||
                d.style.setProperty("--swipe-amount-x", "0px"),
                null == (e = ao.current) ||
                  e.style.setProperty("--swipe-amount-y", "0px"),
                ah(!1),
                ad(!1),
                X(null);
            },
            onPointerMove: (b) => {
              var c, d, e, f;
              if (
                !aB.current ||
                !as ||
                (null == (c = window.getSelection())
                  ? void 0
                  : c.toString().length) > 0
              )
                return;
              let g = b.clientY - aB.current.y,
                h = b.clientX - aB.current.x,
                i =
                  null != (f = a.swipeDirections)
                    ? f
                    : (function (a) {
                        let [b, c] = a.split("-"),
                          d = [];
                        return b && d.push(b), c && d.push(c), d;
                      })(Q);
              !W &&
                (Math.abs(h) > 1 || Math.abs(g) > 1) &&
                X(Math.abs(h) > Math.abs(g) ? "x" : "y");
              let j = { x: 0, y: 0 },
                k = (a) => 1 / (1.5 + Math.abs(a) / 20);
              if ("y" === W) {
                if (i.includes("top") || i.includes("bottom"))
                  if (
                    (i.includes("top") && g < 0) ||
                    (i.includes("bottom") && g > 0)
                  )
                    j.y = g;
                  else {
                    let a = g * k(g);
                    j.y = Math.abs(a) < Math.abs(g) ? a : g;
                  }
              } else if (
                "x" === W &&
                (i.includes("left") || i.includes("right"))
              )
                if (
                  (i.includes("left") && h < 0) ||
                  (i.includes("right") && h > 0)
                )
                  j.x = h;
                else {
                  let a = h * k(h);
                  j.x = Math.abs(a) < Math.abs(h) ? a : h;
                }
              (Math.abs(j.x) > 0 || Math.abs(j.y) > 0) && ah(!0),
                null == (d = ao.current) ||
                  d.style.setProperty("--swipe-amount-x", `${j.x}px`),
                null == (e = ao.current) ||
                  e.style.setProperty("--swipe-amount-y", `${j.y}px`);
            },
          },
          aw && !y.jsx && "loading" !== ar
            ? b.default.createElement(
                "button",
                {
                  "aria-label": V,
                  "data-disabled": aH,
                  "data-close-button": !0,
                  onClick:
                    aH || !as
                      ? () => {}
                      : () => {
                          aI(), null == y.onDismiss || y.onDismiss.call(y, y);
                        },
                  className: p(
                    null == T ? void 0 : T.closeButton,
                    null == y || null == (k = y.classNames)
                      ? void 0
                      : k.closeButton,
                  ),
                },
                null != (u = null == U ? void 0 : U.close) ? u : j,
              )
            : null,
          ar || y.icon || y.promise
            ? b.default.createElement(
                "div",
                {
                  "data-icon": "",
                  className: p(
                    null == T ? void 0 : T.icon,
                    null == y || null == (l = y.classNames) ? void 0 : l.icon,
                  ),
                },
                y.promise || ("loading" === y.type && !y.icon)
                  ? y.icon ||
                      ((null == U ? void 0 : U.loading)
                        ? b.default.createElement(
                            "div",
                            {
                              className: p(
                                null == T ? void 0 : T.loader,
                                null == y || null == (w = y.classNames)
                                  ? void 0
                                  : w.loader,
                                "sonner-loader",
                              ),
                              "data-visible": "loading" === ar,
                            },
                            U.loading,
                          )
                        : b.default.createElement(e, {
                            className: p(
                              null == T ? void 0 : T.loader,
                              null == y || null == (v = y.classNames)
                                ? void 0
                                : v.loader,
                            ),
                            visible: "loading" === ar,
                          }))
                  : null,
                "loading" !== y.type
                  ? y.icon ||
                      (null == U ? void 0 : U[ar]) ||
                      ((a) => {
                        switch (a) {
                          case "success":
                            return f;
                          case "info":
                            return h;
                          case "warning":
                            return g;
                          case "error":
                            return i;
                          default:
                            return null;
                        }
                      })(ar)
                  : null,
              )
            : null,
          b.default.createElement(
            "div",
            {
              "data-content": "",
              className: p(
                null == T ? void 0 : T.content,
                null == y || null == (m = y.classNames) ? void 0 : m.content,
              ),
            },
            b.default.createElement(
              "div",
              {
                "data-title": "",
                className: p(
                  null == T ? void 0 : T.title,
                  null == y || null == (n = y.classNames) ? void 0 : n.title,
                ),
              },
              y.jsx
                ? y.jsx
                : "function" == typeof y.title
                  ? y.title()
                  : y.title,
            ),
            y.description
              ? b.default.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: p(
                      O,
                      au,
                      null == T ? void 0 : T.description,
                      null == y || null == (q = y.classNames)
                        ? void 0
                        : q.description,
                    ),
                  },
                  "function" == typeof y.description
                    ? y.description()
                    : y.description,
                )
              : null,
          ),
          b.default.isValidElement(y.cancel)
            ? y.cancel
            : y.cancel && o(y.cancel)
              ? b.default.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: y.cancelButtonStyle || L,
                    onClick: (a) => {
                      !o(y.cancel) ||
                        (as &&
                          (null == y.cancel.onClick ||
                            y.cancel.onClick.call(y.cancel, a),
                          aI()));
                    },
                    className: p(
                      null == T ? void 0 : T.cancelButton,
                      null == y || null == (r = y.classNames)
                        ? void 0
                        : r.cancelButton,
                    ),
                  },
                  y.cancel.label,
                )
              : null,
          b.default.isValidElement(y.action)
            ? y.action
            : y.action && o(y.action)
              ? b.default.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: y.actionButtonStyle || M,
                    onClick: (a) => {
                      !o(y.action) ||
                        (null == y.action.onClick ||
                          y.action.onClick.call(y.action, a),
                        a.defaultPrevented || aI());
                    },
                    className: p(
                      null == T ? void 0 : T.actionButton,
                      null == y || null == (s = y.classNames)
                        ? void 0
                        : s.actionButton,
                    ),
                  },
                  y.action.label,
                )
              : null,
        )
      );
    };
    function r() {
      let [a, d] = b.default.useState([]);
      return (
        b.default.useEffect(
          () =>
            l.subscribe((a) => {
              a.dismiss
                ? setTimeout(() => {
                    c.default.flushSync(() => {
                      d((b) => b.filter((b) => b.id !== a.id));
                    });
                  })
                : setTimeout(() => {
                    c.default.flushSync(() => {
                      d((b) => {
                        let c = b.findIndex((b) => b.id === a.id);
                        return -1 !== c
                          ? [
                              ...b.slice(0, c),
                              { ...b[c], ...a },
                              ...b.slice(c + 1),
                            ]
                          : [a, ...b];
                      });
                    });
                  });
            }),
          [],
        ),
        { toasts: a }
      );
    }
    let s = b.default.forwardRef(function (a, d) {
      let {
          invert: e,
          position: f = "bottom-right",
          hotkey: g = ["altKey", "KeyT"],
          expand: h,
          closeButton: i,
          className: j,
          offset: k,
          mobileOffset: m,
          theme: n = "light",
          richColors: o,
          duration: p,
          style: r,
          visibleToasts: s = 3,
          toastOptions: t,
          dir: u = "ltr",
          gap: v = 14,
          icons: w,
          containerAriaLabel: x = "Notifications",
        } = a,
        [y, z] = b.default.useState([]),
        A = b.default.useMemo(
          () =>
            Array.from(
              new Set(
                [f].concat(y.filter((a) => a.position).map((a) => a.position)),
              ),
            ),
          [y, f],
        ),
        [B, C] = b.default.useState([]),
        [D, E] = b.default.useState(!1),
        [F, G] = b.default.useState(!1),
        [H, I] = b.default.useState("system" !== n ? n : "light"),
        J = b.default.useRef(null),
        K = g.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        L = b.default.useRef(null),
        M = b.default.useRef(!1),
        N = b.default.useCallback((a) => {
          z((b) => {
            var c;
            return (
              (null == (c = b.find((b) => b.id === a.id))
                ? void 0
                : c.delete) || l.dismiss(a.id),
              b.filter(({ id: b }) => b !== a.id)
            );
          });
        }, []);
      return (
        b.default.useEffect(
          () =>
            l.subscribe((a) => {
              if (a.dismiss) {
                let b = y.map((b) =>
                  b.id === a.id ? { ...b, delete: !0 } : b,
                );
                requestAnimationFrame(() => {
                  z(b);
                });
                return;
              }
              setTimeout(() => {
                c.default.flushSync(() => {
                  z((b) => {
                    let c = b.findIndex((b) => b.id === a.id);
                    return -1 !== c
                      ? [...b.slice(0, c), { ...b[c], ...a }, ...b.slice(c + 1)]
                      : [a, ...b];
                  });
                });
              });
            }),
          [y],
        ),
        b.default.useEffect(() => {
          "system" !== n
            ? I(n)
            : "system" === n &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? I("dark")
                : I("light"));
        }, [n]),
        b.default.useEffect(() => {
          y.length <= 1 && E(!1);
        }, [y]),
        b.default.useEffect(() => {
          let a = (a) => {
            var b, c;
            g.every((b) => a[b] || a.code === b) &&
              (E(!0), null == (c = J.current) || c.focus()),
              "Escape" === a.code &&
                (document.activeElement === J.current ||
                  (null == (b = J.current)
                    ? void 0
                    : b.contains(document.activeElement))) &&
                E(!1);
          };
          return (
            document.addEventListener("keydown", a),
            () => document.removeEventListener("keydown", a)
          );
        }, [g]),
        b.default.useEffect(() => {
          if (J.current)
            return () => {
              L.current &&
                (L.current.focus({ preventScroll: !0 }),
                (L.current = null),
                (M.current = !1));
            };
        }, [J.current]),
        b.default.createElement(
          "section",
          {
            ref: d,
            "aria-label": `${x} ${K}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0,
          },
          A.map((c, d) => {
            var f;
            let g,
              [l, n] = c.split("-");
            return y.length
              ? b.default.createElement(
                  "ol",
                  {
                    key: c,
                    dir: "auto" === u ? "ltr" : u,
                    tabIndex: -1,
                    ref: J,
                    className: j,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": H,
                    "data-y-position": l,
                    "data-lifted": D && y.length > 1 && !h,
                    "data-x-position": n,
                    style: {
                      "--front-toast-height": `${(null == (f = B[0]) ? void 0 : f.height) || 0}px`,
                      "--width": "356px",
                      "--gap": `${v}px`,
                      ...r,
                      ...((g = {}),
                      [k, m].forEach((a, b) => {
                        let c = 1 === b,
                          d = c ? "--mobile-offset" : "--offset",
                          e = c ? "16px" : "24px";
                        function f(a) {
                          ["top", "right", "bottom", "left"].forEach((b) => {
                            g[`${d}-${b}`] =
                              "number" == typeof a ? `${a}px` : a;
                          });
                        }
                        "number" == typeof a || "string" == typeof a
                          ? f(a)
                          : "object" == typeof a
                            ? ["top", "right", "bottom", "left"].forEach(
                                (b) => {
                                  void 0 === a[b]
                                    ? (g[`${d}-${b}`] = e)
                                    : (g[`${d}-${b}`] =
                                        "number" == typeof a[b]
                                          ? `${a[b]}px`
                                          : a[b]);
                                },
                              )
                            : f(e);
                      }),
                      g),
                    },
                    onBlur: (a) => {
                      M.current &&
                        !a.currentTarget.contains(a.relatedTarget) &&
                        ((M.current = !1),
                        L.current &&
                          (L.current.focus({ preventScroll: !0 }),
                          (L.current = null)));
                    },
                    onFocus: (a) => {
                      !(
                        a.target instanceof HTMLElement &&
                        "false" === a.target.dataset.dismissible
                      ) &&
                        (M.current ||
                          ((M.current = !0), (L.current = a.relatedTarget)));
                    },
                    onMouseEnter: () => E(!0),
                    onMouseMove: () => E(!0),
                    onMouseLeave: () => {
                      F || E(!1);
                    },
                    onDragEnd: () => E(!1),
                    onPointerDown: (a) => {
                      (a.target instanceof HTMLElement &&
                        "false" === a.target.dataset.dismissible) ||
                        G(!0);
                    },
                    onPointerUp: () => G(!1),
                  },
                  y
                    .filter((a) => (!a.position && 0 === d) || a.position === c)
                    .map((d, f) => {
                      var g, j;
                      return b.default.createElement(q, {
                        key: d.id,
                        icons: w,
                        index: f,
                        toast: d,
                        defaultRichColors: o,
                        duration:
                          null != (g = null == t ? void 0 : t.duration) ? g : p,
                        className: null == t ? void 0 : t.className,
                        descriptionClassName:
                          null == t ? void 0 : t.descriptionClassName,
                        invert: e,
                        visibleToasts: s,
                        closeButton:
                          null != (j = null == t ? void 0 : t.closeButton)
                            ? j
                            : i,
                        interacting: F,
                        position: c,
                        style: null == t ? void 0 : t.style,
                        unstyled: null == t ? void 0 : t.unstyled,
                        classNames: null == t ? void 0 : t.classNames,
                        cancelButtonStyle:
                          null == t ? void 0 : t.cancelButtonStyle,
                        actionButtonStyle:
                          null == t ? void 0 : t.actionButtonStyle,
                        closeButtonAriaLabel:
                          null == t ? void 0 : t.closeButtonAriaLabel,
                        removeToast: N,
                        toasts: y.filter((a) => a.position == d.position),
                        heights: B.filter((a) => a.position == d.position),
                        setHeights: C,
                        expandByDefault: h,
                        gap: v,
                        expanded: D,
                        swipeDirections: a.swipeDirections,
                      });
                    }),
                )
              : null;
          }),
        )
      );
    });
    a.s(["Toaster", () => s, "toast", () => n, "useSonner", () => r]);
  },
  83396,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(56778),
      d = a.i(97599);
    function e() {
      return (
        (0, c.useEffect)(() => {
          !(window.innerHeight < 650) &&
            (document.cookie.includes("welcome-toast=2") ||
              (0, d.toast)("🛍️ Welcome to Next.js Commerce!", {
                id: "welcome-toast",
                duration: 1 / 0,
                onDismiss: () => {
                  document.cookie = "welcome-toast=2; max-age=31536000; path=/";
                },
                description: (0, b.jsxs)(b.Fragment, {
                  children: [
                    "This is a high-performance, SSR storefront powered by Shopify, Next.js, and Vercel.",
                    " ",
                    (0, b.jsx)("a", {
                      href: "https://vercel.com/templates/next.js/nextjs-commerce",
                      className: "text-blue-600 hover:underline",
                      target: "_blank",
                      children: "Deploy your own",
                    }),
                    ".",
                  ],
                }),
              }));
        }, []),
        null
      );
    }
    a.s(["WelcomeToast", () => e]);
  },
];

//# sourceMappingURL=_b5424590._.js.map
