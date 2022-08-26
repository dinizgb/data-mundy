import React from "react";
import LayoutHomePage from "components/Layouts/LayoutHomePage";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Website Index Page.
 * @param {any} props Data Fetched.
 * @return {TSX.Element}: The TSX code for the Home Page.
 */
export default function Home(props: any) {
  console.log("PROPS:", props);
  return (
    <LayoutHomePage
      postData={props.lastFiveNews}
      TopFiveWidgetData={props.lastFiveChart}
      carouselData={props.lastSpecials}
      TopFiveWidgetTitle={`Latest Charts`}
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
  const lastSpecials = await fetchSingle(
    "web-stories",
    "per_page=10",
    `${process.env.NEXT_PUBLIC_ENV_WP_AMP_API_BASE_PATH}`
  );

  const newsResponse = lastFiveNews.props.response;
  const chartsResponse = lastFiveChart.props.response;
  const specialResponse = lastSpecials.props.response;

  return {
    props: {
      lastFiveNews: newsResponse,
      lastFiveChart: chartsResponse,
      lastSpecials: specialResponse,
    },
  };
}
