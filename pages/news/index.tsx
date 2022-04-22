import LayoutListWithAside from 'components/LayoutListWithAside';
import { fetchListNews } from 'services/news/fetchListNews';

export default function NewsHome({ listPostData }) {
  return (
    <LayoutListWithAside
    postData={listPostData} 
    layoutSection={`news`}
    layoutTitle={`News`}
    layoutSlug={``}
    layoutDescription={`Daily news articles, stories, reviews and much more.`}
    />
  );
}

export async function getStaticProps() {
  return fetchListNews(15);
}