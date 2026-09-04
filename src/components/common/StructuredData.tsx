import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function StructuredData() {
  const { t } = useTranslation();
  useEffect(() => {
    const id = "structured-data";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://pangkreas.com/#organization",
          name: "Pangkreas",
          alternateName: "Pangkalan Kreasi",
          url: "https://pangkreas.com/",
        },
        {
          "@type": "WebSite",
          "@id": "https://pangkreas.com/#website",
          url: "https://pangkreas.com/",
          name: "Pangkreas",
          description: t("seo.home.description"),
          publisher: { "@id": "https://pangkreas.com/#organization" },
        },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [t]);
  return null;
}
