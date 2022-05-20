/* eslint-disable react/prop-types */
import React from "react";
import LayoutCardGalleryList from "components/Lists/LayoutCardGalleryList";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Special Page route.
 * @return {TSX.Element}: The TSX code for the Specials Index page.
 */
export default function SpecialsHome({ response }) {
  return (
    <LayoutCardGalleryList
      postData={response}
      layoutSection={`specials`}
      layoutTitle={`Specials`}
      layoutSlug={``}
      layoutDescription={`A deep dive in special stories from different subjects.`}
    />
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  return fetchSingle("specials", "per_page=10");
}
