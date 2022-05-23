/* eslint-disable react/prop-types */
import React from "react";
import ArticleFormat from "components/Layouts/ArticleFormat";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";

/**
 * News Article Page.
 * @return {TSX.Element}: The TSX code for the News Article Page.
 */
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

// eslint-disable-next-line require-jsdoc
export async function getStaticProps(context) {
  return fetchSingle("posts", `slug=${context.params.slug}`);
}

// eslint-disable-next-line require-jsdoc
export async function getStaticPaths() {
  return fetchPaths("posts", 2);
}
