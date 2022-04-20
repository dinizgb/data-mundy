import * as React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { H2, P, A, Span } from 'components/Typographies';

const ArticleFormatThumb = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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

export default function ChartFormat() {
  return (
    <>
    <Head>
      <title>Data Mundy | News Article Page | Providing Data from and to an amazing World</title>
      <meta name="description" content="Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it."/>
      <meta property="og:title" content="Data Mundy | Providing Data from and to an amazing World" key="title"/>
      <meta property="og:description" content="Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it."/>
      <meta name="twitter:text:title" content="News Article Page" />
      <link rel="canonical" href="https://datamundy.com/" />
    </Head>
    <Header />
    <main>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
            <Grid item xs={12} sm={12} md={6}>
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
                This is the Headline of the News Article Page for the News Section Area
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
                <ArticleFormatAuthor>
                    <Avatar alt="Autor Avatar" src="/images/dm-logo.jpg" />
                    <A
                    fontColor={({ theme }) => theme.colors.text_4}
                    hoverColor={({ theme }) => theme.colors.text_3}
                    fontWeight={600}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={`5px 0 0 10px`}
                    padding={0}
                    borderBottom={`none`}
                    href="https://datamundy.com/about"
                    >Data Mundy Staff</A>
                    <Span
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={24}
                    xsFontSize={15}
                    xsLineHeight={24}
                    margin={`4px 0 0 5px`}
                    >- 02/02/2022 at 9pm
                    </Span>
                </ArticleFormatAuthor>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ArticleFormatThumb>
                    <Image
                    src={"/images/image-placeholder.jpg"}
                    alt={`Card Alt`}
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
                    <P
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={36}
                    xsFontSize={18}
                    xsLineHeight={36}
                    margin={`30px 0`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet quam vel ipsum semper tempor. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis enim a velit lobortis scelerisque ut sit amet sem. 
                        Nunc quis mattis urna. Nam felis orci, dictum eu faucibus eu, sodales in quam. 
                        Curabitur eget interdum nisi. Curabitur finibus congue convallis. 
                        Nam tristique maximus rutrum. Pellentesque eget erat felis. 
                        Ut vel dolor pulvinar, rhoncus ante sit amet, viverra felis. 
                        Ut fermentum hendrerit neque a tincidunt.
                    </P>
                    <P
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={36}
                    xsFontSize={18}
                    xsLineHeight={36}
                    margin={`30px 0`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet quam vel ipsum semper tempor. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis enim a velit lobortis scelerisque ut sit amet sem. 
                        Nunc quis mattis urna. Nam felis orci, dictum eu faucibus eu, sodales in quam. 
                        Curabitur eget interdum nisi. Curabitur finibus congue convallis. 
                        Nam tristique maximus rutrum. Pellentesque eget erat felis. 
                        Ut vel dolor pulvinar, rhoncus ante sit amet, viverra felis. 
                        Ut fermentum hendrerit neque a tincidunt.
                    </P>
                    <P
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={36}
                    xsFontSize={18}
                    xsLineHeight={36}
                    margin={`30px 0`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet quam vel ipsum semper tempor. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis enim a velit lobortis scelerisque ut sit amet sem. 
                        Nunc quis mattis urna. Nam felis orci, dictum eu faucibus eu, sodales in quam. 
                        Curabitur eget interdum nisi. Curabitur finibus congue convallis. 
                        Nam tristique maximus rutrum. Pellentesque eget erat felis. 
                        Ut vel dolor pulvinar, rhoncus ante sit amet, viverra felis. 
                        Ut fermentum hendrerit neque a tincidunt.
                    </P>
                    <P
                    fontColor={({ theme }) => theme.colors.text_4}
                    fontWeight={400}
                    fontSize={18}
                    lineHeight={36}
                    xsFontSize={18}
                    xsLineHeight={36}
                    margin={`30px 0`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet quam vel ipsum semper tempor. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis enim a velit lobortis scelerisque ut sit amet sem. 
                        Nunc quis mattis urna. Nam felis orci, dictum eu faucibus eu, sodales in quam. 
                        Curabitur eget interdum nisi. Curabitur finibus congue convallis. 
                        Nam tristique maximus rutrum. Pellentesque eget erat felis. 
                        Ut vel dolor pulvinar, rhoncus ante sit amet, viverra felis. 
                        Ut fermentum hendrerit neque a tincidunt.
                    </P>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
    <Footer />
    </>
  );
}