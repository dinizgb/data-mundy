/* eslint-disable react/prop-types */
import React from "react";
import SpecialFormat from "components/Layouts/SpecialFormat";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";

/**
 * Special Content Page.
 * @return {TSX.Element}: The TSX code for the Specials Content Page.
 */
export default function SpecialsArticlePage({ response }) {
  const specialData = response;

  return (
    <>
      <SpecialFormat
        webStoriesHead={specialData.head}
        webStoriesContent={specialData.content}
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
