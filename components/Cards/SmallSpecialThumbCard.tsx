import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { H3, FaviconText } from "components/Texts/Typographies";

const SmallSpecialThumbCardWrapper = styled.div<SmallSpecialThumbCardWrapperProps>`
  width: 100%;
  min-height: 390px;
  position: relative;
  margin: ${(props) => props.margin};
  background: ${({ theme }) => theme.colors.secondary}
    url(${(props) => props.cardImage}) 25% 15% no-repeat;
`;

const SmallSpecialThumbCardText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  text-align: left;
  h3 {
    font-family: "Teko", sans-serif;
    position: absolute;
    bottom: 5px;
    text-transform: uppercase;
  }
  em {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    h3 {
      font-size: 36px;
      line-height: 42px;
    }
  }
`;

type SmallSpecialThumbCardProps = {
  key: string;
  cardImage: string;
  cardSection: string;
  cardTitle: string;
  cardSlug: string;
  margin?: any;
};

type SmallSpecialThumbCardWrapperProps = {
  margin?: any;
  cardImage: string;
};

/**
 * Special Thumb Card Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Special Thumb Card Card Component.
 */
export default function SmallSpecialThumbCard(
  props: SmallSpecialThumbCardProps
) {
  return (
    <a href={`/${props.cardSection}/${props.cardSlug}/`}>
      <SmallSpecialThumbCardWrapper
        margin={props.margin}
        cardImage={props.cardImage}
      >
        <Box sx={{ width: "100%" }}>
          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
            <Grid item xs={12}>
              <SmallSpecialThumbCardText>
                <Grid container>
                  <Grid item xs={12}>
                    <FaviconText
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={700}
                      fontSize={20}
                      lineHeight={20}
                      xsFontSize={20}
                      xsLineHeight={20}
                      margin={0}
                    >
                      DM.
                    </FaviconText>
                    <H3
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={800}
                      fontSize={36}
                      lineHeight={42}
                      xsFontSize={28}
                      xsLineHeight={36}
                      margin={`5px 15px`}
                    >
                      {props.cardTitle}
                    </H3>
                  </Grid>
                </Grid>
              </SmallSpecialThumbCardText>
            </Grid>
          </Grid>
        </Box>
      </SmallSpecialThumbCardWrapper>
    </a>
  );
}
