// Design note: Contemporary Digital Atelier — page metadata is factual, concise, and aligned with the independent-studio positioning.
import { useEffect } from "react";

const siteOrigin = (import.meta.env.VITE_SITE_URL || "https://devyeasin24.github.io").replace(/\/+$/, "");

type PageMetadata = {
  title: string;
  description: string;
  path: "/" | "/about" | "/work" | "/privacy" | "/working-together";
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

export function usePageMetadata({ title, description, path }: PageMetadata) {
  useEffect(() => {
    const canonicalUrl = `${siteOrigin}${path}`;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", canonicalUrl);
  }, [description, path, title]);
}
