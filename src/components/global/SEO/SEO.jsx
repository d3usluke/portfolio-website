import React from 'react';
import { useSiteMetadata } from 'hooks';
import { slugify } from 'utils';

const Seo = ({ children, ...props }) => {
  const { title, description, siteUrl, twitterUsername, keywords } =
    useSiteMetadata();

  const seo = {
    title: `${props.title} | ${title}`,
    description: props.description || description,
    image: `${siteUrl}/card_${slugify(props.title)}.jpg`,
    url: `${siteUrl}/${props.pathname || ``}`,
    twitterUsername,
    keywords: props.keywords || keywords
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default Seo;
