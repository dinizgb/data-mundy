import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { P, A } from "components/Texts/Typographies";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
  padding: 30px 0 10px 0;
  border-top: 1px solid #444;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: 50px;
  }
`;

/**
 * Footer Component.
 * @return {TSX.Element}: The TSX code for the Footer Component.
 */
export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Box sx={{ width: "100%", marginBottom: 2 }}>
          <Grid container rowSpacing={1} spacing={2}>
            <Grid item xs={12}>
              <P
                fontColor={({ theme }) => theme.colors.text_4}
                fontWeight={400}
                fontSize={16}
                lineHeight={24}
                xsFontSize={16}
                xsLineHeight={24}
                margin={0}
              >
                Data Mundy - All rights reserved - This is an open source
                project, know how to contribute{" "}
                <A
                  fontColor={({ theme }) => theme.colors.text_4}
                  hoverColor={({ theme }) => theme.colors.text_3}
                  fontWeight={700}
                  fontSize={16}
                  lineHeight={24}
                  xsFontSize={16}
                  xsLineHeight={24}
                  margin={0}
                  padding={0}
                  href="/about"
                >
                  here
                </A>
                .
              </P>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterWrapper>
  );
}
