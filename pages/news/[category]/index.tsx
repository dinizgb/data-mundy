/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingleByCategory } from "services/core/fetchSingleByCategory";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";

/**
 * News Category Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the News Category Index Page.
 */
export default function NewsCategoryHome(props: any) {
  return (
    <LayoutListWithAside
      postData={props.newsData.listSingleData}
      TopFiveWidgetData={props.lastFiveCharts}
      TopFiveWidgetTitle={`Top five charts`}
      layoutSection={`news`}
      layoutTitle={props.newsData.categoryData[0].name}
      layoutSlug={props.newsData.categoryData[0].slug}
      layoutDescription={props.newsData.categoryData[0].description}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  const newsData = await fetchSingleByCategory(
    "categories",
    `slug=${context.params.category}`,
    "posts",
    "categories",
    "per_page=10"
  );
  const lastFiveCharts = await fetchSingle("charts", "per_page=5");

  const newsResponse = newsData.props;
  const chartsResponse = lastFiveCharts.props.response;

  return {
    props: {
      newsData: newsResponse,
      lastFiveCharts: chartsResponse,
    },
  };
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("categories", 1);
}
