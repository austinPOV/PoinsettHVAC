import { useEffect } from 'react';
import { BUSINESS_INFO } from '../lib/data';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  image?: string;
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

export default function SEO({
  title = `${BUSINESS_INFO.name} - 24/7 HVAC Repair & Installation in Greer, SC`,
  description = `Expert HVAC services in Greer, SC. A/C repair, heating installation, 24/7 emergency service. Rated 5.0 stars. Call ${BUSINESS_INFO.phone} for same-day service.`,
  type = 'website',
  image = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg',
  article
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:image', content: image },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    if (article) {
      if (article.publishedTime) {
        metaTags.push({ property: 'article:published_time', content: article.publishedTime });
      }
      if (article.author) {
        metaTags.push({ property: 'article:author', content: article.author });
      }
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title, description, type, image, article]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg",
    "@id": window.location.origin,
    "url": window.location.origin,
    "telephone": BUSINESS_INFO.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.lat,
      "longitude": BUSINESS_INFO.lng
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Greenville, SC" },
      { "@type": "City", "name": "Greer, SC" },
      { "@type": "City", "name": "Taylors, SC" },
      { "@type": "City", "name": "Simpsonville, SC" },
      { "@type": "City", "name": "Mauldin, SC" },
      { "@type": "City", "name": "Travelers Rest, SC" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.rating.toString(),
      "reviewCount": BUSINESS_INFO.reviewCount.toString()
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: { name: string; description: string; provider: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "description": service.description,
    "provider": {
      "@type": "HVACBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.state,
        "postalCode": BUSINESS_INFO.address.zip
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Greer, SC"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
