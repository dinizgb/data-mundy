import * as React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Header from 'components/Tags/Header';
import Footer from 'components/Tags/Footer';
import { H2, H3, P, A, Span } from 'components/Texts/Typographies';
import { ContentBody } from 'components/Texts/ContentBody';
import specialSectionsConstructor from 'services/specials/specialSectionsConstructor';
import formatDate from 'utils/formatDate';

const SpecialFormatTop = styled.div`
    width: 100%;
    height: 650px;
    position: relative;
    margin-top: -65px;
    padding-top: 100px;
    background: ${({ theme }) => theme.colors.background};
    z-index: 1;
`;

const SpecialFormatFeaturedImageBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background:  ${({ theme }) => theme.colors.background};
    opacity: 0.35;
    z-index: 1;
`;

const SpecialFormatTopText = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    z-index: 1;
    .MuiBreadcrumbs-separator{
      color: ${({ theme }) => theme.colors.text_4};
    }
`;

const SpecialFormatAuthor = styled.div`
    width: 100%;
    margin-top: 0px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 20px;
        margin-left: 0;
    }
`;

const SpecialFormatMain = styled.main`
    position: relative;
`;

type SpecialFormatProps = {
  specialTitle: string;
  specialExcerpt: string;
  specialDate: string;
  specialFeaturedImage: string;
  specialACFData: any;
}

export default function SpecialFormat(props: SpecialFormatProps) { //TODO: Transform metas into a SEO Component
  return (
    <>
    <Head>
      <title>Data Mundy | {props.specialTitle} | Providing Data from and to an amazing World</title>
      <meta name="description" content={props.specialExcerpt} /> 
      <meta property="og:title" content={props.specialTitle} key="title"/>
      <meta property="og:description" content={props.specialExcerpt} />
      <meta name="twitter:text:title" content={props.specialTitle} />
      <link rel="canonical" href="https://datamundy.com/" />
    </Head>
    <Header/>
    <SpecialFormatTop>
      <SpecialFormatFeaturedImageBg>
        <Image
        src={props.specialFeaturedImage}
        alt={props.specialTitle}
        layout="fill"
        objectFit="cover"
        />
      </SpecialFormatFeaturedImageBg>
      <SpecialFormatTopText>
        <Container maxWidth="xl">
          <Box sx={{ width: '100%' }}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 90 }}>
              <Grid item xs={12} sm={12} md={6}>
                <H2
                fontType={'MainTitle'}
                fontColor={({ theme }) => theme.colors.text_4}
                fontWeight={400}
                fontSize={90}
                lineHeight={110}
                xsFontSize={75}
                xsLineHeight={90}
                margin={0}
                >
                {props.specialTitle}
                </H2>
              </Grid>
              <Grid item xs={12} sm={12} md={6} style={{ marginTop: 30 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  <A
                  fontColor={({ theme }) => theme.colors.text_4}
                  hoverColor={({ theme }) => theme.colors.text_3}
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
                  fontColor={({ theme }) => theme.colors.text_4}
                  hoverColor={({ theme }) => theme.colors.text_3}
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={24}
                  xsFontSize={15}
                  xsLineHeight={24}
                  margin={0}
                  href="/specials/"
                  >
                    Specials
                  </A>
                </Breadcrumbs>
                <P
                fontColor={({ theme }) => theme.colors.text_4}
                fontWeight={300}
                fontSize={24}
                lineHeight={40}
                xsFontSize={21}
                xsLineHeight={36}
                margin={`10px 0`}
                >
                  {props.specialExcerpt}
                </P>
                <SpecialFormatAuthor>
                  <Span
                  fontColor={({ theme }) => theme.colors.text_4}
                  fontWeight={400}
                  fontSize={15}
                  lineHeight={24}
                  xsFontSize={15}
                  xsLineHeight={24}
                  margin={`5.5px 0 0 0`}
                  >Last updated at {formatDate(props.specialDate)}
                  </Span>
                </SpecialFormatAuthor>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </SpecialFormatTopText>
    </SpecialFormatTop>
    <SpecialFormatMain>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', backgroundColor: '' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
            <Grid item xs={12} sm={12} md={6} style={{ marginTop: 25 }}>
              <H3
              fontColor={({ theme }) => theme.colors.text_4}
              fontWeight={300}
              fontSize={60}
              lineHeight={70}
              xsFontSize={60}
              xsLineHeight={70}
              margin={0}
              >
                {props.specialACFData.introduction.headline}
              </H3>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ContentBody dangerouslySetInnerHTML={{
                  __html: props.specialACFData.introduction.excerpt
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {specialSectionsConstructor(props.specialACFData)}
    </SpecialFormatMain>
    <Footer />
    </>
  );
}