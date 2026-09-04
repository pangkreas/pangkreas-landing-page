import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function Seo({
  titleKey,
  descriptionKey,
  path,
}: {
  titleKey: string;
  descriptionKey: string;
  path: string;
}) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const title = `${t(titleKey)} | Pangkreas`,
      url = `https://pangkreas.com${path}`;
    document.title = title;
    document.documentElement.lang = i18n.resolvedLanguage?.startsWith("en")
      ? "en"
      : "id";
    const set = (selector: string, key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(.+?)="(.+?)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(key, value);
    };
    set('meta[name="description"]', "content", t(descriptionKey));
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", t(descriptionKey));
    set('meta[property="og:url"]', "content", url);
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    document
      .querySelectorAll('link[rel="alternate"]')
      .forEach((el) => el.remove());
    ["id", "en", "x-default"].forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });
  }, [descriptionKey, i18n.resolvedLanguage, path, t, titleKey]);
  return null;
}
