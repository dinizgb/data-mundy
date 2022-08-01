/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingleByCategory } from "services/core/fetchSingleByCategory";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";
import htmlTagCleaner from "utils/htmlTagCleaner";

/**
 * Charts Category Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the Charts Category Index Page.
 */
export default function ChartsCategoryHome(props: any) {
  return (
    <LayoutListWithAside
      postData={props.chartData?.listSingleData}
      TopFiveWidgetData={props.lastFiveNews}
      TopFiveWidgetTitle={`Top five news`}
      layoutSection={`charts`}
      layoutTitle={props.chartData.categoryData[0].title.rendered}
      layoutSlug={props.chartData.categoryData[0].slug}
      layoutDescription={htmlTagCleaner(
        props.chartData.categoryData[0].excerpt.rendered
      )}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  const chartData = await fetchSingleByCategory(
    "chart_category",
    `slug=${context.params.category}`,
    "charts",
    "chart_category_data",
    "per_page=10"
  );
  const lastFiveNews = await fetchSingle("posts", "per_page=5");

  const chartsResponse = chartData.props;
  const newsResponse = lastFiveNews.props.response;

  return {
    props: {
      chartData: chartsResponse,
      lastFiveNews: newsResponse,
    },
  };
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("chart_category", 1);
}
