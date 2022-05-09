import LayoutListWithAside from 'components/LayoutListWithAside';
import { fetchSingleByCategory } from 'services/core/fetchSingleByCategory';
import { fetchPaths } from 'services/core/fetchPaths';
import htmlTagCleaner from 'utils/htmlTagCleaner';

export default function ChartsCategoryHome({ categoryData, listSingleData }) {
  return (
    <LayoutListWithAside
    postData={listSingleData}
    layoutSection={`charts`}
    layoutTitle={categoryData[0].title.rendered}
    layoutSlug={categoryData[0].slug}
    layoutDescription={htmlTagCleaner(categoryData[0].excerpt.rendered)}
    />
  );
}

export async function getStaticProps(context) {
  return fetchSingleByCategory('chart_category', `slug=${context.params.category}`, 'charts', 'chart_category_data', 'per_page=10'); 
}

export async function getStaticPaths() {
  return fetchPaths('chart_category', 1);
}