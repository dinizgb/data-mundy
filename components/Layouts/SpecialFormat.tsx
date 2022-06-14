import React from "react";
import Head from "next/head";
import AMPPageSEOConstructor from "services/SEO/AMPPageSEOConstructor";
import { SinglePageProps } from "types/singlePageTypes";
import { AmpWebStoriesRunTime } from "styles/amp-web-stories-runtime";
import { AmpBoilerplateWebStories } from "styles/amp-boilerplate-web-stories";

export const config = {
  amp: true,
};

/**
 * Special Single Page Layout Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Special Single Page Layout Component.
 */
export default function SpecialFormat(props: SinglePageProps) {
  // TODO: Transform metas into a SEO Component
  return (
    <>
      <Head>
        <title>
          Data Mundy | {props.singlePageTitle} | Providing Data from and to an
          amazing World
        </title>
        <meta name="amp-story-generator-name" content={props.singlePageTitle} />
        <link
          rel="stylesheet"
          amp-extension="amp-story"
          href="https://cdn.ampproject.org/v0/amp-story-1.0.css"
        ></link>
        <style
          amp-runtime
          i-amphtml-version="012205270638004"
          dangerouslySetInnerHTML={{
            __html: AmpWebStoriesRunTime,
          }}
        />
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{
            __html: props.singlePageCustomCSS,
          }}
        />
        <style
          amp-boilerplate={`true`}
          dangerouslySetInnerHTML={{
            __html: AmpBoilerplateWebStories,
          }}
        />
        <script
          async
          noModule
          src="https://cdn.ampproject.org/v0.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdn.ampproject.org/v0.mjs"
          type="module"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdn.ampproject.org/v0/amp-story-1.0.mjs"
          custom-element="amp-story"
          type="module"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          noModule
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          crossOrigin="anonymous"
          custom-element="amp-story"
        ></script>
        <script
          async
          src="https://cdn.ampproject.org/v0/amp-video-0.1.mjs"
          custom-element="amp-video"
          type="module"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          noModule
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
          crossOrigin="anonymous"
          custom-element="amp-video"
        ></script>
        <script
          async
          custom-element="amp-animation"
          data-script="amp-animation"
          i-amphtml-inserted=""
          type="module"
          crossOrigin="anonymous"
          src="https://cdn.ampproject.org/rtv/012205270638004/v0/amp-animation-0.1.mjs"
        ></script>
        <script
          async
          custom-element="amp-loader"
          data-script="amp-loader"
          i-amphtml-inserted=""
          type="module"
          crossOrigin="anonymous"
          src="https://cdn.ampproject.org/rtv/012205270638004/v0/amp-loader-0.1.mjs"
        ></script>
        <script
          amp-onerror=""
          dangerouslySetInnerHTML={{
            __html: `document.querySelector("script[src*='/v0.js']").onerror=function(){document.querySelector('style[amp-boilerplate]').textContent=''}`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style amp-boilerplate="">body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>`,
          }}
        />
        <script
          amp-story-dvh-polyfill=""
          dangerouslySetInnerHTML={{
            __html: `
            "use strict";if(!self.CSS||!CSS.supports||!CSS.supports("height:1dvh")){function e(){document.documentElement.style.setProperty("--story-dvh",innerHeight/100+"px","important")}addEventListener("resize",e,{passive:!0}),e()}
            `,
          }}
        />
        <AMPPageSEOConstructor
          singlePageTitle={props.singlePageTitle}
          singlePageExcerpt={props.singlePageExcerpt}
          singlePageSectionName={props.singlePageSectionName}
          singlePageSectionSlug={props.singlePageSectionSlug}
          singlePageCategoryName={props.singlePageCategoryName}
          singlePageCategorySlug={props.singlePageCategorySlug}
          singlePageSlug={props.singlePageSlug}
          singlePageDate={props.singlePageDate}
          singlePageModifiedDate={props.singlePageModifiedDate}
          singlePageFeaturedImage={props.singlePageFeaturedImage}
          singlePageAuthor={props.singlePageAuthor}
        />
      </Head>
      <div
        id="AMP-stories-content"
        dangerouslySetInnerHTML={{ __html: props.singlePageContent }}
      />
    </>
  );
}
