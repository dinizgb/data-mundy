import * as React from 'react';
import ChartFormat from 'components/Layouts/ChartFormat';
import { fetchSingle } from 'services/core/fetchSingle';
import { fetchPaths } from 'services/core/fetchPaths';
import htmlTagCleaner from 'utils/htmlTagCleaner';

export default function ChartFormatPage({ response }) {
  const chartData = response[0];

  return (
    <>
      <ChartFormat 
      chartTitle={chartData.title.rendered}
      chartExcerpt={htmlTagCleaner(chartData.excerpt.rendered)}
      chartDate={chartData.modified}
      chartFeaturedImage={chartData.featured_media_url}
      chartContent={chartData.content.rendered}
      chartACFData={chartData.ACF}
      />
    </>
  );
}

export async function getStaticProps(context) {
  return fetchSingle('charts', `slug=${context.params.slug}`);
}

export async function getStaticPaths() {
  return fetchPaths('charts', 2);
}