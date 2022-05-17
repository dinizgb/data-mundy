import LayoutListWithAside from 'components/Layouts/LayoutListWithAside';
import { fetchSingle } from 'services/core/fetchSingle';

export default function NewsHome({ response }) {
  return (
    <LayoutListWithAside
    postData={response} 
    layoutSection={`news`}
    layoutTitle={`News`}
    layoutSlug={``}
    layoutDescription={`Daily news articles, stories, reviews and much more.`}
    />
  );
}

export async function getStaticProps() {
  return fetchSingle('posts', 'per_page=10');
}