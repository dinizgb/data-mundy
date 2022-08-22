import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import specialHeadConstructor from "services/specials/specialHeadConstructor";
import { WebStoriesProps } from "types/webStoriesTypes";

export const config = {
  amp: true,
};

/**
 * Special Single Page Layout Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Special Single Page Layout Component.
 */
export default function SpecialFormat(props: WebStoriesProps) {
  const specialFormattedHead = parse(specialHeadConstructor(props));
  // TODO: Transform metas into a SEO Component
  return (
    <>
      <Head>{specialFormattedHead}</Head>
      <div
        id="AMP-stories-content"
        dangerouslySetInnerHTML={{ __html: props.webStoriesContent }}
      />
    </>
  );
}
