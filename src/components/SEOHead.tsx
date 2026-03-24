import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const BASE_URL = 'https://shreesairamtrust.org';
const SITE_NAME = 'Shree Sai Ram Trust';
const DEFAULT_OG_IMAGE = '/images/home_hero_image.png';

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-seo-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SEOHead({ title, description, keywords, ogImage }: SEOHeadProps) {
  const location = useLocation();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${location.pathname === '/' ? '' : location.pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  useEffect(() => {
    // Page title
    document.title = fullTitle;

    // Standard meta tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);

    // Twitter
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // Canonical
    setCanonical(canonicalUrl);

    // WebPage JSON-LD
    setJsonLd('page-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': fullTitle,
      'description': description,
      'url': canonicalUrl,
      'isPartOf': {
        '@type': 'WebSite',
        'name': SITE_NAME,
        'url': BASE_URL
      }
    });
  }, [fullTitle, description, keywords, canonicalUrl, fullImageUrl]);

  return null;
}
