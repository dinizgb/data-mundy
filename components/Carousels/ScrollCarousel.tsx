import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
  height: 300px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
`;

const responsive = {
  0: { items: 0 },
  568: { items: 0 },
  1024: { items: 0 },
};

const items = [
  <Item className="item" data-value="1" key="item-1">
    1
  </Item>,
  <Item className="item" data-value="2" key="item-2">
    2
  </Item>,
  <Item className="item" data-value="3" key="item-3">
    3
  </Item>,
  <Item className="item" data-value="4" key="item-4">
    4
  </Item>,
  <Item className="item" data-value="5" key="item-5">
    5
  </Item>,
  <Item className="item" data-value="5" key="item-5">
    6
  </Item>,
  <Item className="item" data-value="5" key="item-5">
    7
  </Item>,
];

/**
 * ScrollCarousel Component.
 * @return {TSX.Element}: The TSX code for the ScrollCarousel Component. NPM package URL: https://www.npmjs.com/package/react-alice-carousel.
 */
export default function ScrollCarousel() {
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
