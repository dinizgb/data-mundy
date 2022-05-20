import React from "react";
import LayoutHomePage from "components/Layouts/LayoutHomePage";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Website Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the Home Page.
 */
export default function Home(props: any) {
  return (
    <LayoutHomePage
      postData={props.lastFiveNews}
      chartData={props.lastFiveChart}
      layoutDescription={
        "Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it."
      }
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const lastFiveNews = await fetchSingle("posts", "per_page=5");
  const lastFiveChart = await fetchSingle("charts", "per_page=5");

  const newsResponse = lastFiveNews.props.response;
  const chartsResponse = lastFiveChart.props.response;

  return {
    props: {
      lastFiveNews: newsResponse,
      lastFiveChart: chartsResponse,
    },
  };
}
