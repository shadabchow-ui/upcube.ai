module.exports = [
  4748,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/lib/cache-handlers/default.external.js",
      () => require("next/dist/server/lib/cache-handlers/default.external.js"),
    );
  },
  57975,
  (a) => {
    "use strict";
    a.i(16352), a.i(92213);
    var b = a.i(51408);
    let c = {};
    async function d(a) {
      let { __metadata_id__: d, ...e } = await a.params,
        f = (0, b.fillMetadataSegment)(
          "/search/[collection]",
          e,
          "opengraph-image",
        );
      return [
        (function (a, b) {
          let c = {
              alt: a.alt,
              type: a.contentType || "image/png",
              url: f + "?4ba760636779f559",
            },
            { size: d } = a;
          return d && ((c.width = d.width), (c.height = d.height)), c;
        })(c, 0),
      ];
    }
    a.s(["default", 0, d], 57975);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9673d5a4._.js.map
