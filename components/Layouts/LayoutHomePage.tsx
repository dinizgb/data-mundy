import React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "components/Tags/Header";
import Footer from "components/Tags/Footer";
import { H2, P, A } from "components/Texts/Typographies";
import { WhiteButton } from "components/Inputs/Buttons";
import TopFiveWidget from "components/Widgets/TopFiveWidget";
import APODWidget from "components/Widgets/APODWidget";
import BigHorizontalCardList from "components/Lists/BigHorizontalCardList";
import ScrollCarousel from "components/Carousels/ScrollCarousel";

type LayoutHomePageProps = {
  postData: any;
  TopFiveWidgetData: any;
  carouselData: any;
  apodData: any;
  TopFiveWidgetTitle: string;
  layoutDescription: string;
};

/**
 * Home Page Layout Component.
 * @param {any} props to the component.
 * @return {TSX.Element}: The TSX code for the Home Page Layout Component.
 */
export default function LayoutHomePage(props: LayoutHomePageProps) {
  return (
    <>
      <Head>
        <title>{`Data Mundy | ${props.layoutDescription}`}</title>
        <meta name="description" content={props.layoutDescription} />
        <meta
          property="og:title"
          content={`Data Mundy | ${props.layoutDescription}`}
          key="title"
        />
        <meta property="og:description" content={props.layoutDescription} />
        <meta
          property="og:url"
          content={`https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/`}
        />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/images/dm-logo.jpg`}
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:alt" content={props.layoutDescription} />
        <meta
          name="twitter:text:title"
          content={`Data Mundy | ${props.layoutDescription}`}
        />
        <meta
          name="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/images/dm-logo.jpg`}
        />
        <meta name="twitter:image:alt" content={props.layoutDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          itemProp="thumbnailUrl"
          href={`https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/images/dm-logo.jpg`}
        />
        <link
          rel="canonical"
          href={`https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/`}
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
                  Providing Data from and to an amazing World.
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
                  Data Mundy is an open source platform that provides different
                  types of data to make scientific divulgation more easy for
                  those who do it. If you are a scientist or an admirer of
                  scientific divulgation and wants to help us with our goal,
                  there is a lot ways to help us. Click on the link below to
                  find more.
                </P>
                <A
                  fontColor={({ theme }) => theme.colors.text_4}
                  hoverColor={({ theme }) => theme.colors.text_3}
                  fontWeight={700}
                  fontSize={24}
                  lineHeight={40}
                  xsFontSize={21}
                  xsLineHeight={36}
                  margin={0}
                  padding={`0 0 10px 0`}
                  borderBottom={`3px solid #fff`}
                  href="/about"
                >
                  Join Us
                </A>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 3, md: 5 }}
              style={{ marginTop: 80 }}
            >
              <Grid item xs={12} sm={12} md={8}>
                <Grid container>
                  <Grid item xs={12} style={{ marginTop: 40 }}>
                    <H2
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={600}
                      fontSize={22}
                      lineHeight={21}
                      xsFontSize={21}
                      xsLineHeight={24}
                      margin={`0 0 30px 0`}
                    >
                      Latest Specials
                    </H2>
                    <ScrollCarousel carouselData={props.carouselData} />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: 40 }}>
                    <H2
                      fontColor={({ theme }) => theme.colors.text_4}
                      fontWeight={600}
                      fontSize={22}
                      lineHeight={21}
                      xsFontSize={21}
                      xsLineHeight={24}
                      margin={`0 0 30px 0`}
                    >
                      Latest News
                    </H2>
                    <BigHorizontalCardList
                      postList={props.postData}
                      layoutSection={"news"}
                    />
                    <Grid item xs={12} className="desktop-only">
                      <div style={{ display: "flex" }}>
                        <WhiteButton
                          href="/news/"
                          width={`100%`}
                          margin={`0 0 30px 0`}
                        >
                          See More
                        </WhiteButton>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <APODWidget data={props.apodData} />
                <TopFiveWidget
                  title={props.TopFiveWidgetTitle}
                  data={props.TopFiveWidgetData}
                  margin={`35px 0 0 0`}
                  xsMargin={`20px 0 0 0`}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
