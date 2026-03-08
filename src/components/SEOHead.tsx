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
  "@id": "https://netrades.co.uk/#business",
  name: "NE1 Digital",
  alternateName: "NE Trades",
  description: "Professional websites and local SEO for trade businesses in the North East. We help electricians, plumbers, builders and tradespeople get more local enquiries.",
  url: "https://netrades.co.uk",
  telephone: "+447463687129",
  email: "hello@netrades.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 2.6a, North Tyneside Business Centre",
    addressLocality: "North Shields",
    addressRegion: "Tyne and Wear",
    postalCode: "NE30 1NT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.0077,
    longitude: -1.4443,
  },
  areaServed: [
    { "@type": "City", name: "Newcastle upon Tyne" },
    { "@type": "City", name: "Sunderland" },
    { "@type": "City", name: "North Shields" },
    { "@type": "City", name: "Gateshead" },
    { "@type": "City", name: "Durham" },
    { "@type": "AdministrativeArea", name: "North East England" },
  ],
  serviceType: [
    "Web Design for Tradespeople",
    "Local SEO",
    "Google Business Profile Optimisation",
    "Trade Website Design",
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
  "@id": "https://netrades.co.uk/#organization",
  name: "NE1 Digital",
  url: "https://netrades.co.uk",
  logo: "https://netrades.co.uk/favicon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447463687129",
    contactType: "sales",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://netrades.co.uk/#website",
  name: "NE Trades",
  url: "https://netrades.co.uk",
  publisher: { "@id": "https://netrades.co.uk/#organization" },
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
