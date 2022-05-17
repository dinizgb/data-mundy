import * as React from 'react';
import ArticleFormat from 'components/Layouts/ArticleFormat';
import { fetchSingle } from 'services/core/fetchSingle';
import { fetchPaths } from 'services/core/fetchPaths';

export default function NewsArticlePage({ response }) {
  const articleData = response[0];

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
  return fetchSingle('posts', `slug=${context.params.slug}`);
}

export async function getStaticPaths() {
  return fetchPaths('posts', 2);
}