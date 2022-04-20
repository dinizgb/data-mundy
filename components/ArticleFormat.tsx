import * as React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { H2, P, A, Span } from 'components/Typographies';
import formatDate from 'utils/formatDate';

type ArticleFormatProps = {
  articleTitle: string;
  articleExcerpt: string;
  articleCategoryName: string;
  articleCategorySlug: string;
  articleDate: string;
  articleFeaturedImage: string;
  articleContent: string;
}

const ArticleFormatThumb = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secondary};
    img{
        border-radius: 8px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 0;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const ArticleFormatMain = styled.main`
    .MuiBreadcrumbs-separator{
      color: ${({ theme }) => theme.colors.text_2};
    }
`;

const ArticleFormatAuthor = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px){
        width: 90%;
        margin-top: 20px;
        margin-left: 0;
    }
`;

const NewsBody = styled.div`
  p {
    padding-top: 24px;
    padding-bottom: 16px;
    line-height: 36px;
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_3};
    iframe {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 100%;
    }
    div {
      margin: 0 auto;
      max-width: 100%;
    }
    img {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 100%;
    }
  }
  span{
    line-height: 28px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text_2};
  }
  ul {
    list-style-type: disc;
    padding-left: 50px;
    padding-top: 24px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: underline;
  }
  hr {
    margin-top: 24px;
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    padding-top: 24px;
    color: ${({ theme }) => theme.colors.text_4};
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    padding-top: 24px;
    color: ${({ theme }) => theme.colors.text_4};
  }
  .widget-news-list {
    list-style-type: none;
    padding: 0px;
  }
  strong {
    font-weight: bold;
  }
  blockquote {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto !important;
  }
  .widget-news {
    a {
      text-decoration: none;
      h3 {
        font: normal normal 800 18px/28px "Poppins";
        padding: 0;
      }
    }
  }
  figure{
    img{
      width: 100%;
      height: 100%;
    }
  }
  .aligncenter,
  .alignleft,
  .alignright,
  .size-full,
  .size-large {
    width: 100% !important;
    height: auto;
    margin: 0 auto !important;
    padding-top: 24px;
    text-align: center;
  }
  .wp-caption-text {
    margin: 0;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text_3};
  }
  .quote-box {
    overflow: hidden;
    margin: 30px -15px;
    padding: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .quote-box p {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: #000;
    padding: 0;
  }
  .item-share-list {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    a {
      padding: 4px;
    }
  }
  .widget-box {
    position: relative;
    &::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 75px;
      height: 5px;
      background: ${({ theme }) => theme.colors.primary};
      margin-top: 10px;
    }
  }
  b {
    font-weight: bold;
  }
`;


export default function ArticleFormat(props: ArticleFormatProps) {
  return (
    <>
    <Head>
      <title>Data Mundy | {props.articleTitle} | Providing Data from and to an amazing World</title>
      <meta name="description" content={props.articleExcerpt} />
      <meta property="og:title" content={props.articleTitle} key="title"/>
      <meta property="og:description" content={props.articleExcerpt} />
      <meta name="twitter:text:title" content={props.articleTitle} />
      <link rel="canonical" href="https://datamundy.com/" />
    </Head>
    <Header />
    <ArticleFormatMain>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
            <Grid item xs={12} sm={12} md={6}>
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
                  href={`/news/${props.articleCategorySlug}/`}
                  >
                    {props.articleCategoryName}
                  </A>
                </Breadcrumbs>
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
                {props.articleTitle}
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
                  {props.articleExcerpt}
                </P>
                <ArticleFormatAuthor>
                    <Avatar alt="Autor Avatar" src="/images/dm-logo.jpg" />
                    <Span
                    fontColor={({ theme }) => theme.colors.text_4}
                    hoverColor={({ theme }) => theme.colors.text_3}
                    fontWeight={600}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={`5px 0 0 10px`}
                    >Data Mundy Staff</Span>
                    <Span
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={`4px 0 0 5px`}
                    >- {formatDate(props.articleDate)}
                    </Span>
                </ArticleFormatAuthor>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ArticleFormatThumb>
                    <Image
                    src={props.articleFeaturedImage}
                    alt={props.articleTitle}
                    layout="fill"
                    objectFit="cover"
                    />
                </ArticleFormatThumb>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
            <Grid item xs={12} sm={12} md={9} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <Grid container>
                <Grid item xs={12} style={{ marginTop: 41 }}>
                    <NewsBody dangerouslySetInnerHTML={{
                      __html: props.articleContent
                    }}
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ArticleFormatMain>
    <Footer />
    </>
  );
}