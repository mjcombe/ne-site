import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({ title, description, canonical, ogType = "website", jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonical, true);

    // Update canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach(schema => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach(s => s.remove());
    };
  }, [title, description, canonical, ogType, jsonLd]);

  return null;
};

export default SEOHead;

// Shared schema fragments
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ne1webdesign.co.uk/#business",
  name: "NE1 Digital",
  alternateName: "NE1 Digital",
  description: "Professional web design and local SEO for businesses across North Tyneside, Teesside and beyond. We help businesses get found online and generate more enquiries.",
  url: "https://ne1webdesign.co.uk",
  telephone: "+441916941463",
  email: "hello@ne1webdesign.co.uk",
  areaServed: [
    { "@type": "AdministrativeArea", name: "North Tyneside" },
    { "@type": "AdministrativeArea", name: "Teesside" },
    { "@type": "City", name: "Newcastle upon Tyne" },
    { "@type": "City", name: "Sunderland" },
    { "@type": "City", name: "Middlesbrough" },
    { "@type": "City", name: "Gateshead" },
    { "@type": "City", name: "Durham" },
    { "@type": "AdministrativeArea", name: "North East England" },
  ],
  serviceType: [
    "Web Design",
    "Local SEO",
    "Google Business Profile Optimisation",
    "Website Development",
  ],
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ne1webdesign.co.uk/#organization",
  name: "NE1 Digital",
  url: "https://ne1webdesign.co.uk",
  logo: "https://ne1webdesign.co.uk/logo-ne1digital.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+441916941463",
    contactType: "sales",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ne1webdesign.co.uk/#website",
  name: "NE1 Digital",
  url: "https://ne1webdesign.co.uk",
  publisher: { "@id": "https://ne1webdesign.co.uk/#organization" },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});