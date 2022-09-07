/* eslint-disable react/prop-types */
import React from "react";
import APODFormat from "components/Layouts/APODFormat";
import { fetchAPOD } from "services/apod/apod";

/**
 * NASA APOD Page.
 * @return {TSX.Element}: The TSX code for the NASA APOD Page.
 */
export default function NasaAPODPage({ response }) {
  return (
    <>
      <APODFormat
        apodExcerpt={response.title}
        apodDate={response.date}
        apodFeaturedImage={response.url}
        apodContent={response.explanation}
      />
    </>
  );
}

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const apod = await fetchAPOD();
  const apodResponse = apod.props.response;

  return {
    props: {
      response: apodResponse,
    },
    revalidate: 21600,
  };
}
