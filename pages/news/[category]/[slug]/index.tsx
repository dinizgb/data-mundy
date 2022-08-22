/* eslint-disable react/prop-types */
import React from "react";
import ArticleFormat from "components/Layouts/ArticleFormat";
import { fetchSingle } from "services/core/fetchSingle";
import { fetchPaths } from "services/core/fetchPaths";
import htmlTagCleaner from "utils/htmlTagCleaner";

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
        articleExcerpt={htmlTagCleaner(articleData.excerpt.rendered)}
        articleSectionName={"News"}
        articleSectionSlug={"news"}
        articleCategoryName={articleData.categories_data[0].category_name}
        articleCategorySlug={articleData.categories_data[0].category_slug}
        articleSlug={articleData.slug}
        articleDate={articleData.date}
        articleModifiedDate={articleData.modified}
        articleAuthor={"Data Mundy Staff"} // TODO: Add author data on API response
        articleFeaturedImage={articleData.featured_media_url}
        articleContent={articleData.content.rendered}
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
