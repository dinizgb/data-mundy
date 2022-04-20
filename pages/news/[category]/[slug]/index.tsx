import * as React from 'react';
import ArticleFormat from 'components/ArticleFormat';
import { fetchSingleNews } from 'services/news/fetchSingleNews';
import { fetchSingleNewsPaths } from 'services/news/fetchSingleNewsPaths';

export default function NewsArticlePage({ singlePostData }) {
  const articleData = singlePostData[0];

  return (
    <>
      <ArticleFormat 
      articleTitle={articleData.title.rendered}
      articleExcerpt={articleData.title.rendered}
      articleCategoryName={articleData.categories_data[0].category_name}
      articleCategorySlug={articleData.categories_data[0].category_slug}
      articleFeaturedImage={articleData.featured_media_url}
      articleContent={articleData.content.rendered}
      articleDate={articleData.date}
      />
    </>
  );
}

export async function getStaticProps(context) {
  return fetchSingleNews(context.params.slug);
}

export async function getStaticPaths() {
  return fetchSingleNewsPaths();
}