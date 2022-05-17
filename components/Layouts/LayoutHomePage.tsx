import * as React from 'react';
import Head from "next/head";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from 'components/Tags/Header';
import Footer from 'components/Tags/Footer';
import { H2, P, A } from 'components/Texts/Typographies';
import { WhiteButton } from 'components/Inputs/Buttons';
import TopFiveNews from 'components/Widgets/TopFiveNews';
import DonateWidget from 'components/Widgets/DonateWidget';
import BigHorizontalCardList from 'components/Lists/BigHorizontalCardList';

type LayoutHomePageProps = {
    postData: any;
    chartData: any;
    layoutDescription: string;
}

export default function LayoutHomePage(props: LayoutHomePageProps) {
    return (
        <>
            <Head>
                <title>{`Data Mundy | ${props.layoutDescription}`}</title>
                <meta name="description" content={props.layoutDescription} />
                <meta property="og:title" content={`Data Mundy | ${props.layoutDescription}`} key="title"/>
                <meta property="og:description" content={props.layoutDescription} />
                <meta name="twitter:text:title" content={`Data Mundy | ${props.layoutDescription}`} />
                <link rel="canonical" href="https://datamundy.com/" />
            </Head>
            <Header/>
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
                        Data Mundy is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it. 
                        If you are a scientist or an admirer of scientific divulgation and wants to help us with our goal, there is a lot ways to help us. 
                        Click on the link below to find more.
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
                    >Join Us</A>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{ width: '100%' }}>
                <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }} style={{ marginTop: 80 }}>
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
                        Latest Charts
                        </H2>
                        <BigHorizontalCardList 
                        postList={props.chartData}
                        layoutSection={'charts'}
                        />
                        <Grid item xs={12} className="desktop-only">
                            <div style={{ display: 'flex' }}>
                                <WhiteButton href="/charts/" width={`100%`} margin={`0 0 30px 0`}>See More</WhiteButton>
                            </div>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <TopFiveNews 
                        margin={`40px 0 0 0`} 
                        xsMargin={`20px 0 0 0`} 
                        />
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