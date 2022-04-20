import LayoutListWithAside from 'components/LayoutListWithAside';
import { fetchListSingleCategoryNews } from 'services/news/fetchListSingleCategoryNews';
import { fetchCategoryNewsPaths } from 'services/news/fetchCategoryNewsPaths';

export default function NewsCategoryHome({ categoryData, listPostData }) {
  const postsList = listPostData;

  return (
    <LayoutListWithAside
    postData={postsList}
    layoutSection={`news`}
    layoutTitle={categoryData[0].name}
    layoutSlug={categoryData[0].slug}
    layoutDescription={categoryData[0].description}
    />
  );
}

export async function getStaticProps(context) {
  return fetchListSingleCategoryNews(context.params.category, 15);
}

export async function getStaticPaths() {
  return fetchCategoryNewsPaths();
}