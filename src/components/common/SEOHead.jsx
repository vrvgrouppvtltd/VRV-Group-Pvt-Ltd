import React, { useEffect } from "react";
import { SITE_CONFIG } from "../../constants/siteConfig";

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = "/vrv-logo.webp",
  ogType = "website",
  jsonLd = null,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.shortName}`
    : `${SITE_CONFIG.name} | Real Estate Vrindavan–Mathura`;

  const fullDescription =
    description ||
    `Find verified residential flats, apartments, villas, studios, and plots in Vrindavan & Mathura  with ${SITE_CONFIG.name}. Your trust, our promise.`;

  const pageUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : SITE_CONFIG.domain);

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Helper function to set meta tag content
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const match = selector.match(/\[name="(.*?)"\]/) || selector.match(/\[property="(.*?)"\]/);
        if (match) {
          if (selector.includes("property=")) {
            element.setAttribute("property", match[1]);
          } else {
            element.setAttribute("name", match[1]);
          }
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag('meta[name="description"]', "content", fullDescription);
    setMetaTag('meta[property="og:title"]', "content", fullTitle);
    setMetaTag('meta[property="og:description"]', "content", fullDescription);
    setMetaTag('meta[property="og:type"]', "content", ogType);
    setMetaTag('meta[property="og:url"]', "content", pageUrl);
    setMetaTag('meta[property="og:image"]', "content", ogImage);
    setMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "content", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "content", fullDescription);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", pageUrl);

    // JSON-LD Structured Data
    let scriptTag = document.querySelector("#seo-json-ld");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("id", "seo-json-ld");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }

    const defaultJsonLd = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain,
      "logo": `${SITE_CONFIG.domain}/vrv-logo.webp`,
      "description": SITE_CONFIG.subTagline,
      "telephone": [SITE_CONFIG.phone1Formatted, SITE_CONFIG.phone2Formatted],
      "email": SITE_CONFIG.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mathura",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": ["Vrindavan", "Mathura"]
    };

    scriptTag.textContent = JSON.stringify(jsonLd || defaultJsonLd);
  }, [fullTitle, fullDescription, pageUrl, ogImage, ogType, jsonLd]);

  return null;
}
