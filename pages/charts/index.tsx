/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Charts Index Page.
 * @return {TSX.Element}: The TSX code for the Charts Index Page.
 */
export default function ChartsHome({ response }) {
  return (
    <LayoutListWithAside
      postData={response}
      layoutSection={`charts`}
      layoutTitle={`Charts`}
      layoutSlug={``}
      layoutDescription={`Charts with all type of data from various subject.`}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  return fetchSingle("charts", "per_page=10");
}
