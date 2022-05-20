import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { H3, FaviconText } from "components/Texts/Typographies";

const SpecialThumbCardWrapper = styled.div<SpecialThumbCardWrapperProps>`
  width: 100%;
  min-height: 450px;
  position: relative;
  margin: ${(props) => props.margin};
  background: ${({ theme }) => theme.colors.secondary}
    url(${(props) => props.cardImage}) 50% 50% no-repeat;
`;

const SpecialThumbCardText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  text-align: right;
  h3 {
    font-family: "Bebas Neue", cursive;
    position: absolute;
    bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  em {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 90%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

type SpecialThumbCardProps = {
  key: string;
  cardImage: string;
  cardSection: string;
  cardTitle: string;
  cardSlug: string;
  margin?: any;
};

type SpecialThumbCardWrapperProps = {
  margin?: any;
  cardImage: string;
};

/**
 * Special Thumb Card Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Special Thumb Card Card Component.
 */
export default function SpecialThumbCard(props: SpecialThumbCardProps) {
  return (
    <a href={`/${props.cardSection}/${props.cardSlug}/`}>
      <SpecialThumbCardWrapper
        margin={props.margin}
        cardImage={props.cardImage}
      >
        <Box sx={{ width: "100%" }}>
          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
            <Grid item xs={12}>
              <SpecialThumbCardText>
                <Grid container>
                  <Grid item xs={12}>
                    <FaviconText
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={700}
                      fontSize={24}
                      lineHeight={24}
                      xsFontSize={24}
                      xsLineHeight={24}
                      margin={0}
                    >
                      DM.
                    </FaviconText>
                    <H3
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={800}
                      fontSize={48}
                      lineHeight={54}
                      xsFontSize={28}
                      xsLineHeight={44}
                      margin={`5px 15px`}
                    >
                      {props.cardTitle}
                    </H3>
                  </Grid>
                </Grid>
              </SpecialThumbCardText>
            </Grid>
          </Grid>
        </Box>
      </SpecialThumbCardWrapper>
    </a>
  );
}
