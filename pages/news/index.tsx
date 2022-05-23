/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * News Index Page.
 * @return {TSX.Element}: The TSX code for the News Index Page.
 */
export default function NewsHome({ response }) {
  return (
    <LayoutListWithAside
      postData={response}
      layoutSection={`news`}
      layoutTitle={`News`}
      layoutSlug={``}
      layoutDescription={`Daily news articles, stories, reviews and much more.`}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  return fetchSingle("posts", "per_page=10");
}
