/* eslint-disable camelcase */
import React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "components/Tags/Header";
import Footer from "components/Tags/Footer";
import { H2, P } from "components/Texts/Typographies";
import SpecialThumbCard from "components/Cards/SpecialThumbCard";
import TopFiveNews from "components/Widgets/TopFiveNews";
import DonateWidget from "components/Widgets/DonateWidget";

type LayoutCardGalleryProps = {
  postData: any;
  layoutSection: string;
  layoutTitle: string;
  layoutSlug: string;
  layoutDescription: string;
};

/**
 * Component that renders a list of Special Thumb Cards.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code with a list of Big Horizontal Cards.
 */
export default function LayoutCardGallery(props: LayoutCardGalleryProps) {
  const postList = props.postData;

  return (
    <>
      <Head>
        <title>
          Data Mundy | {props.layoutTitle} | Providing Data from and to an
          amazing World
        </title>
        <meta name="description" content={props.layoutDescription} />
        <meta
          property="og:title"
          content={`Data Mundy | ${props.layoutTitle} | Providing Data from and to an amazing World`}
          key="title"
        />
        <meta property="og:description" content={props.layoutDescription} />
        <meta name="twitter:text:title" content={props.layoutTitle} />
        <link
          rel="canonical"
          href={`https://datamundy.com/${props.layoutSection}/${props.layoutSlug}`}
        />
      </Head>
      <Header />
      <main>
        <Container maxWidth="xl">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ marginTop: 50 }}
            >
              <Grid item xs={12} sm={12} md={9}>
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
                  {props.layoutTitle}
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
                  {props.layoutDescription}
                </P>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
              <Grid item xs={12} sm={12} md={8}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                  {postList.map(({ featured_media_url, title, slug }) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        style={{ marginBottom: 10 }}
                        key={slug}
                      >
                        <SpecialThumbCard
                          key={slug}
                          cardImage={featured_media_url}
                          cardSection={props.layoutSection}
                          cardTitle={title}
                          cardSlug={slug}
                          margin={`0 0 30px 0`}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TopFiveNews margin={`0 0 0 0`} xsMargin={`20px 0 0 0`} />
                <DonateWidget margin={`30px 0 0 0`} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
