/* eslint-disable react/prop-types */
import React from "react";
import SpecialFormat from "components/Layouts/SpecialFormat";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";
import htmlTagCleaner from "utils/htmlTagCleaner";

/**
 * Special Content Page.
 * @return {TSX.Element}: The TSX code for the Specials Content Page.
 */
export default function SpecialsArticlePage({ response }) {
  const specialData = response;

  return (
    <>
      <SpecialFormat
        singlePageTitle={specialData.title}
        singlePageExcerpt={htmlTagCleaner(specialData.title)}
        singlePageSectionName={"Specials"}
        singlePageSectionSlug={"specials"}
        singlePageCategoryName={""}
        singlePageCategorySlug={""}
        singlePageSlug={specialData.slug}
        singlePageDate={specialData.date}
        singlePageModifiedDate={specialData.modified}
        singlePageFeaturedImage={specialData.featured_media_url}
        singlePageAuthor={"Data Mundy Staff"}
        singlePageContent={specialData.content}
        singlePageCustomCSS={specialData.web_stories_custom_css}
      />
    </>
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  return fetchSingle(
    "web-stories",
    `slug=${context.params.slug}`,
    `${process.env.NEXT_PUBLIC_ENV_WP_AMP_API_BASE_PATH}`
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths(
    "web-stories",
    2,
    `${process.env.NEXT_PUBLIC_ENV_WP_AMP_API_BASE_PATH}`
  );
}
