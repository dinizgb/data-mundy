/* eslint-disable react/prop-types */
import React from "react";
import LayoutCardGallery from "components/Layouts/LayoutCardGallery";
import { fetchSingle } from "services/core/fetchSingle";

/**
 * Special Page route.
 * @return {TSX.Element}: The TSX code for the Specials Index page.
 */
export default function SpecialsHome({ response }) {
  return (
    <LayoutCardGallery
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
  return fetchSingle(
    "web-stories",
    "per_page=10",
    `${process.env.NEXT_PUBLIC_ENV_WP_AMP_API_BASE_PATH}`
  );
}
