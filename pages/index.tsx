import LayoutHomePage from 'components/LayoutHomePage';
import { fetchSingle } from 'services/core/fetchSingle';

export default function Home(props) { //TODO: Transform this into a Home Component
  return (
      <LayoutHomePage 
      postData={props.lastFiveNews}
      chartData={props.lastFiveChart}
      layoutDescription={'Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it.'}
      />
  );
}

export async function getStaticProps() {
  const lastFiveNews = await fetchSingle('posts', 'per_page=5');
  const lastFiveChart = await fetchSingle('charts', 'per_page=5');
  
  const newsResponse = lastFiveNews.props.response;
  const chartsResponse = lastFiveChart.props.response;

  return {
    props: { 
      lastFiveNews: newsResponse, 
      lastFiveChart: chartsResponse
    }
  };
}