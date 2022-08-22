/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SmallSpecialThumbCard from "components/Cards/SmallSpecialThumbCard";

const ScrollCarouselWrapper = styled.div`
  .alice-carousel__stage {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    li {
      margin: 0 25px 0 0;
    }
  }
`;

const Item = styled.div`
  width: 250px;
  height: 390px;
  background-color: #333;
`;

const responsive = {
  0: { items: 0 },
  568: { items: 0 },
  1024: { items: 0 },
};

/**
 * ScrollCarousel Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the ScrollCarousel Component. NPM package URL: https://www.npmjs.com/package/react-alice-carousel.
 */
export default function ScrollCarousel(props: any) {
  let items = [];
  props.carouselData.map(({ featured_media_url, title, slug }) => {
    return (items = [
      ...items,
      <Item className="item" data-value={slug} key={`item-${slug}`}>
        <SmallSpecialThumbCard
          key={slug}
          cardImage={featured_media_url}
          cardSection={`specials`}
          cardTitle={title}
          cardSlug={slug}
          margin={`0 0 30px 0`}
        />
      </Item>,
    ]);
  });

  return (
    <ScrollCarouselWrapper>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
        disableButtonsControls={true}
        autoWidth={true}
      />
    </ScrollCarouselWrapper>
  );
}
