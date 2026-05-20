import type { JsonLdObject } from "lib/upcube-seo/jsonld";

type JsonLdProps = {
  data: JsonLdObject | JsonLdObject[];
};

function serializeJsonLd(data: JsonLdObject | JsonLdObject[]) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
