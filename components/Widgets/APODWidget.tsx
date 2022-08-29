import React from "react";
import styled from "styled-components";
import { H2, H3, Span } from "components/Texts/Typographies";
import Image from "next/image";

const APODWidgetWrapper = styled.div<APODWidgetWrapperProps>`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0 0;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 20px 0;
`;

const APODWidgetImage = styled.div`
  height: 250px;
  position: relative;
  margin: 10px 20px 10px 20px;
  background: #222;
  img {
    border-radius: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 90%;
    margin-top: 0;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
  }
`;

type APODWidgetWrapperProps = {
  data?: any;
};

/**
 * Donate Widget Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Donate Widget Component.
 */
export default function APODWidget(props: APODWidgetWrapperProps) {
  return (
    <APODWidgetWrapper>
      <H2
        fontColor={({ theme }) => theme.colors.text_4}
        fontWeight={600}
        fontSize={20}
        lineHeight={32}
        xsFontSize={20}
        xsLineHeight={32}
        margin={`0 20px 5px 20px`}
      >
        Astronomy Picture of the Day
      </H2>
      <H3
        fontColor={({ theme }) => theme.colors.subtitle}
        fontWeight={600}
        fontSize={15}
        lineHeight={24}
        xsFontSize={15}
        xsLineHeight={24}
        margin={`0 20px`}
      >
        {props.data.title}
      </H3>
      <Span
        fontColor={({ theme }) => theme.colors.subtitle}
        fontWeight={400}
        fontSize={14.5}
        lineHeight={24}
        xsFontSize={14.5}
        xsLineHeight={24}
        margin={`5px 20px 10px 20px`}
      >
        Image Credit: {props.data.copyright}
      </Span>
      <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noreferrer">
        <APODWidgetImage>
          <Image
            src={props.data.url}
            alt={props.data.title}
            layout="fill"
            objectFit="cover"
          />
        </APODWidgetImage>
      </a>
    </APODWidgetWrapper>
  );
}
