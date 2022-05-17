import LayoutListWithAside from 'components/Layouts/LayoutListWithAside';
import { fetchSingleByCategory } from 'services/core/fetchSingleByCategory';
import { fetchPaths } from 'services/core/fetchPaths';

export default function NewsCategoryHome({ categoryData, listSingleData }) {
  return (
    <LayoutListWithAside
    postData={listSingleData}
    layoutSection={`news`}
    layoutTitle={categoryData[0].name}
    layoutSlug={categoryData[0].slug}
    layoutDescription={categoryData[0].description}
    />
  );
}

export async function getStaticProps(context) {
  return fetchSingleByCategory('categories', `slug=${context.params.category}`, 'posts', 'categories', 'per_page=10'); 
}

export async function getStaticPaths() {
  return fetchPaths('categories', 1);
}