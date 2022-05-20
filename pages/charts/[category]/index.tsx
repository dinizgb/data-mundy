/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingleByCategory } from "services/core/fetchSingleByCategory";
import { fetchPaths } from "services/core/fetchPaths";
import htmlTagCleaner from "utils/htmlTagCleaner";

/**
 * Charts Category Index Page.
 * @return {TSX.Element}: The TSX code for the Charts Category Index Page.
 */
export default function ChartsCategoryHome({ categoryData, listSingleData }) {
  return (
    <LayoutListWithAside
      postData={listSingleData}
      layoutSection={`charts`}
      layoutTitle={categoryData[0].title.rendered}
      layoutSlug={categoryData[0].slug}
      layoutDescription={htmlTagCleaner(categoryData[0].excerpt.rendered)}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  return fetchSingleByCategory(
    "chart_category",
    `slug=${context.params.category}`,
    "charts",
    "chart_category_data",
    "per_page=10"
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("chart_category", 1);
}
