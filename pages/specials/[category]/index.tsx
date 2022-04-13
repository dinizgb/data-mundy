import * as React from 'react';
import Head from "next/head";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { H2, P, A } from 'components/Typographies';
import { WhiteButton } from 'components/Buttons';
import HorizontalList from 'components/HorizontalList';
import TopFiveNews from 'components/TopFiveNews';
import DonateWidget from 'components/DonateWidget';

export default function SpecialsCategoryHome() { //TODO: Transform the content of this page into a component
  return (
    <>
    <Head>
      <title>Data Mundy | Specials Category | Providing Data from and to an amazing World</title>
      <meta name="description" content="Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it."/>
      <meta property="og:title" content="Data Mundy | Providing Data from and to an amazing World" key="title"/>
      <meta property="og:description" content="Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it."/>
      <meta name="twitter:text:title" content="News Home Page" />
      <link rel="canonical" href="https://datamundy.com/" />
    </Head>
    <Header />
    <main>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
            <Grid item xs={12} sm={12} md={9}>
              <H2
              fontType={'MainTitle'}
              fontColor={({ theme }) => theme.colors.text_4}
              fontWeight={400}
              fontSize={76}
              lineHeight={100}
              xsFontSize={60}
              xsLineHeight={70}
              margin={0}
              >
              Specials Category
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
                Data Mundy is an open source platform that provides different types.
              </P>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container>
                <Grid item xs={12} style={{ marginTop: 41 }}>
                  <HorizontalList />
                  <Grid item xs={12} className="desktop-only">
                    <div style={{ display: 'flex' }}>
                      <WhiteButton href="https://datamundy.com/charts" width={`100%`} margin={`0 0 30px 0`}>See More</WhiteButton>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TopFiveNews margin={`40px 0 0 0`} xsMargin={`20px 0 0 0`} />
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