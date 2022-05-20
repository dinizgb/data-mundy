/* eslint-disable react/prop-types */
import React from "react";
import ChartFormat from "components/Layouts/ChartFormat";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";
import htmlTagCleaner from "utils/htmlTagCleaner";

/**
 * Chart Article Page.
 * @return {TSX.Element}: The TSX code for the Chart Article Page.
 */
export default function ChartArticlePage({ response }) {
  const chartData = response[0];

  return (
    <>
      <ChartFormat
        chartTitle={chartData.title.rendered}
        chartExcerpt={htmlTagCleaner(chartData.excerpt.rendered)}
        chartDate={chartData.modified}
        chartFeaturedImage={chartData.featured_media_url}
        chartContent={chartData.content.rendered}
        chartACFData={chartData.ACF}
      />
    </>
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  return fetchSingle("charts", `slug=${context.params.slug}`);
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("charts", 2);
}
