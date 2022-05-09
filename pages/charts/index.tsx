import LayoutListWithAside from 'components/LayoutListWithAside';
import { fetchSingle } from 'services/core/fetchSingle';

export default function ChartsHome({ response }) {
  return (
    <LayoutListWithAside
    postData={response} 
    layoutSection={`charts`}
    layoutTitle={`Charts`}
    layoutSlug={``}
    layoutDescription={`Charts with all type of data from various subject.`}
    />
  );
}

export async function getStaticProps() {
  return fetchSingle('charts', 'per_page=10');
}