import React from "react";
import JSONLD from "services/SEO/JSONLD";
import { singlePageSEOProps } from "types/singlePageSEOTypes";

/**
 * Function that returns the required tags for Single Page SEO.
 * Obs: The <title> tag is out of this constructor because for some reason it only renders on the top level component.
 * @param {any} props in raw format.
 * @return {TSX.Element}: with the required tags for Single Page SEO.
 */
export default function AMPPageSEOConstructor(props: singlePageSEOProps) {
  const canonicalUrl = `
  https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/${
    props.singlePageSectionSlug
  }/${props.singlePageCategorySlug ? props.singlePageCategorySlug + "/" : ""}${
    props.singlePageSlug
  }/
  `;
  return (
    <>
      <meta name="description" content={props.singlePageExcerpt} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content={props.singlePageTitle + " | Data Mundy"}
        key="title"
      />
      <meta property="og:description" content={props.singlePageExcerpt} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={props.singlePageFeaturedImage} />
      <link itemProp="thumbnailUrl" href={props.singlePageFeaturedImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:alt" content={props.singlePageExcerpt} />
      <meta
        property="article:published_time"
        content={`${new Date(props.singlePageDate).toISOString()}`}
      />
      <meta
        property="article:modified_time"
        content={`${new Date(props.singlePageModifiedDate).toISOString()}`}
      />
      <meta
        name="twitter:text:title"
        content={props.singlePageTitle + " | Data Mundy"}
      />
      <meta name="twitter:image" content={props.singlePageFeaturedImage} />
      <meta name="twitter:image:alt" content={props.singlePageExcerpt} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preload" href={props.singlePageFeaturedImage} as="image" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="preload" href={props.singlePageFeaturedImage} as="image" />
      <link rel="preconnect" href="https://cdn.ampproject.org/"></link>
      <script
        async
        custom-element="amp-iframe"
        src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-analytics"
        src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-instagram"
        src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
      ></script>
      <JSONLD
        data={{
          "@context": "https://schema.org/",
          "@type": "NewsArticle",
          headline: props.singlePageTitle,
          alternativeHeadline: props.singlePageExcerpt,
          image: props.singlePageFeaturedImage,
          articleSection: props.singlePageSectionName,
          datePublished: new Date(props.singlePageDate).toISOString(),
          dateModified: new Date(props.singlePageModifiedDate).toISOString(),
          author: [
            {
              "@type": "Person",
              name: props.singlePageAuthor,
              url: "datamundy.com",
            },
          ],
          publisher: [
            {
              "@type": "Organization",
              name: "datamundy.com",
            },
          ],
          isPartOf: [
            {
              "@type": ["CreativeWork", "Product"],
              name: "datamundy.com",
              productID: "datamundy.com:basic",
            },
          ],
          isAccessibleForFree: "True",
        }}
      />
    </>
  );
}
