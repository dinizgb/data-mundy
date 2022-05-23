/* eslint-disable camelcase */
import React from "react";
import BigHorizontalCard from "components/Cards/BigHorizontalCard";

/**
 * Component that renders a list of Big Horizontal Cards.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code with a list of Big Horizontal Cards.
 */
export default function BigHorizontalCardList(props) {
  // TODO: Try to find a more reduced way to do this.
  return props.postList[0].categories_data
    ? props.postList.map(
        ({ featured_media_url, categories_data, title, excerpt, slug }) => {
          return (
            <BigHorizontalCard
              key={slug}
              cardImage={featured_media_url}
              cardSection={props.layoutSection}
              cardCategory={categories_data[0].category_name}
              cardCategorySlug={categories_data[0].category_slug}
              cardTitle={title.rendered}
              cardSlug={slug}
              cardExcerpt={excerpt.rendered}
              margin={`0 0 30px 0`}
            />
          );
        }
      )
    : props.postList.map(
        ({ featured_media_url, ACF, title, excerpt, slug }) => {
          return (
            <BigHorizontalCard
              key={slug}
              cardImage={featured_media_url}
              cardSection={props.layoutSection}
              cardCategory={ACF.chart_category_data.post_title}
              cardCategorySlug={ACF.chart_category_data.post_name}
              cardTitle={title.rendered}
              cardSlug={slug}
              cardExcerpt={excerpt.rendered}
              margin={`0 0 30px 0`}
            />
          );
        }
      );
}
