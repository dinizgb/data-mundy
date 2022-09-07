import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Header from "components/Tags/Header";
import Footer from "components/Tags/Footer";
import { H2, P, A } from "components/Texts/Typographies";
import SinglePageSEOConstructor from "services/SEO/SinglePageSEOConstructor";

const APODFormatThumb = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  img {
    border-radius: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    height: 350px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const APODFormatMain = styled.main`
  .MuiBreadcrumbs-separator {
    color: ${({ theme }) => theme.colors.text_2};
  }
`;

type APODFormatProps = {
  apodExcerpt: string;
  apodDate: string;
  apodFeaturedImage: string;
  apodContent: string;
};

/**
 * APOD Layout Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the APOD Layout Component.
 */
export default function APODFormat(props: APODFormatProps) {
  return (
    <>
      <Head>
        <title>{"Nasa astronomy Picture of the Day | APOD | Data Mundy"}</title>
        <SinglePageSEOConstructor
          singlePageTitle={`Nasa astronomy Picture of the Day | APOD`}
          singlePageExcerpt={props.apodExcerpt}
          singlePageSectionName={`NASA APOD`}
          singlePageSectionSlug={`nasa-apod`}
          singlePageCategoryName={``}
          singlePageCategorySlug={``}
          singlePageSlug={``}
          singlePageDate={props.apodDate}
          singlePageModifiedDate={props.apodDate}
          singlePageFeaturedImage={props.apodFeaturedImage}
          singlePageAuthor={`NASA APOD`}
        />
      </Head>
      <Header />
      <APODFormatMain>
        <Container maxWidth="xl">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: 50 }}
            >
              <Grid item xs={12}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  <A
                    fontColor={({ theme }) => theme.colors.text_2}
                    hoverColor={({ theme }) => theme.colors.text_4}
                    fontWeight={500}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={0}
                    href="/"
                  >
                    Home
                  </A>
                  <A
                    fontColor={({ theme }) => theme.colors.text_2}
                    hoverColor={({ theme }) => theme.colors.text_4}
                    fontWeight={500}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={0}
                    href="/nasa-apod/"
                  >
                    Nasa astronomy picture of the day (APOD)
                  </A>
                </Breadcrumbs>
                <H2
                  fontType={"MainTitle"}
                  fontColor={({ theme }) => theme.colors.text_4}
                  fontWeight={400}
                  fontSize={76}
                  lineHeight={100}
                  xsFontSize={60}
                  xsLineHeight={70}
                  margin={0}
                >
                  Nasa astronomy picture of the day (APOD)
                </H2>
                <P
                  fontColor={({ theme }) => theme.colors.text_4}
                  fontWeight={300}
                  fontSize={24}
                  lineHeight={40}
                  xsFontSize={21}
                  xsLineHeight={36}
                  margin={`30px 0`}
                >
                  Today&apos;s picture: <strong>{props.apodExcerpt}</strong>
                </P>
              </Grid>
              <Grid item xs={12}>
                <APODFormatThumb>
                  <Image
                    src={props.apodFeaturedImage}
                    alt={props.apodExcerpt}
                    layout="fill"
                    objectFit="cover"
                  />
                </APODFormatThumb>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Grid container>
                  <Grid item xs={12} style={{ marginTop: 41 }}>
                    <P
                      fontColor={({ theme }) => theme.colors.text_3}
                      fontWeight={300}
                      fontSize={24}
                      lineHeight={42}
                      xsFontSize={22}
                      xsLineHeight={42}
                      margin={`0 0 30px 0`}
                      dangerouslySetInnerHTML={{
                        __html: props.apodContent,
                      }}
                    />
                    <P
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={700}
                      fontSize={21}
                      lineHeight={30}
                      xsFontSize={21}
                      xsLineHeight={30}
                      margin={`10px 0 0 0`}
                    >
                      Source:{" "}
                      <A
                        fontColor={({ theme }) => theme.colors.text_2}
                        hoverColor={({ theme }) => theme.colors.text_4}
                        fontWeight={500}
                        fontSize={21}
                        lineHeight={30}
                        xsFontSize={21}
                        xsLineHeight={30}
                        margin={0}
                        href="https://apod.nasa.gov/apod/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://apod.nasa.gov/apod/
                      </A>
                    </P>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </APODFormatMain>
      <Footer />
    </>
  );
}
