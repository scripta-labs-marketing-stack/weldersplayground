import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../seo/seoConfig';

const SEO = ({ page }) => {
  const pageConfig = seoConfig.pages[page] || {};
  const siteName = seoConfig.siteName;
  const defaultDescription = seoConfig.defaultDescription;
  const defaultKeywords = seoConfig.defaultKeywords;

  const title = pageConfig.title || `${siteName} - ${defaultDescription}`;
  const description = pageConfig.description || defaultDescription;
  const keywords = [...(pageConfig.keywords || []), ...defaultKeywords];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Welder's Playground" />
      <link rel="canonical" href={`https://weldersplayground.de/${page === 'home' ? '' : page}`} />
    </Helmet>
  );
};

export default SEO;
