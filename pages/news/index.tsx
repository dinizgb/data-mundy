/* eslint-disable react/prop-types */
import React from "react";
import LayoutListWithAside from "components/Layouts/LayoutListWithAside";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * News Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the News Index Page.
 */
export default function NewsHome(props: any) {
  return (
    <LayoutListWithAside
      postData={props.newsData}
      TopFiveWidgetData={props.lastFiveCharts}
      TopFiveWidgetTitle={`Top five charts`}
      layoutSection={`news`}
      layoutTitle={`News`}
      layoutSlug={``}
      layoutDescription={`Daily news articles, stories, reviews and much more.`}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const newsData = await fetchSingle("posts", "per_page=10");
  const lastFiveCharts = await fetchSingle("charts", "per_page=5");

  const newsResponse = newsData.props.response;
  const chartsResponse = lastFiveCharts.props.response;

  return {
    props: {
      newsData: newsResponse,
      lastFiveCharts: chartsResponse,
    },
  };
}
