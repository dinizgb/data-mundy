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
  const specialData = response[0];

  return (
    <>
      <SpecialFormat
        specialTitle={specialData.title.rendered}
        specialExcerpt={htmlTagCleaner(specialData.excerpt.rendered)}
        specialDate={specialData.modified}
        specialFeaturedImage={specialData.featured_media_url}
        specialACFData={specialData.ACF}
      />
    </>
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  return fetchSingle("specials", `slug=${context.params.slug}`);
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("specials", 2);
}
