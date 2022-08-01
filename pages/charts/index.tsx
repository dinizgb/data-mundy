/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Charts Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the Charts Index Page.
 */
export default function ChartsHome(props: any) {
  return (
    <LayoutListWithAside
      postData={props.chartData}
      TopFiveWidgetData={props.lastFiveNews}
      TopFiveWidgetTitle={`Top five news`}
      layoutSection={`charts`}
      layoutTitle={`Charts`}
      layoutSlug={``}
      layoutDescription={`Charts with all type of data from various subject.`}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const chartData = await fetchSingle("charts", "per_page=10");
  const lastFiveNews = await fetchSingle("posts", "per_page=5");

  const newsResponse = lastFiveNews.props.response;
  const chartsResponse = chartData.props.response;

  return {
    props: {
      chartData: chartsResponse,
      lastFiveNews: newsResponse,
    },
  };
}
