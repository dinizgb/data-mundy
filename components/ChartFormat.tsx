import * as React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { H2, P, A, Span } from 'components/Typographies';
import { ContentBody } from 'components/ContentBody';
import ChartLinearGradient from 'components/ChartLinearGradient';
import ChartDoughnutPie from 'components/ChartDoughnutPie';
import ChartMultipleLines from 'components/ChartMultipleLines';
import ChartBars from 'components/ChartBars';
import formatDate from 'utils/formatDate';

const ChartFormatThumb = styled.div`
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

const ChartFormatAuthor = styled.div`
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

const ChartFormatMain = styled.main`
    .MuiBreadcrumbs-separator{
      color: ${({ theme }) => theme.colors.text_2};
    }
`;

type ChartFormatProps = {
  chartTitle: string;
  chartExcerpt: string;
  chartDate: string;
  chartFeaturedImage: string;
  chartContent: string;
  chartACFData: any;
}

export default function ChartFormat(props: ChartFormatProps) { //TODO: Transform metas into a SEO Component

  const chartComponent = ( //TODO: Find a way to Reduce this code
  props.chartACFData.chart_type == 'vertical_bars' ?
    <ChartBars 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    chartOrientation={'x'}
    xValues={props.chartACFData.bars_chart.xvalues}
    yValues={props.chartACFData.bars_chart.yvalues}
    barColors={props.chartACFData.bars_chart.bar_colors}
    margin={props.chartACFData.bars_chart.margin}
    canvasHeight={props.chartACFData.bars_chart.canvas_height}
    />
  :
  props.chartACFData.chart_type == 'horizontal_bars' ?
    <ChartBars 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    chartOrientation={'y'}
    xValues={props.chartACFData.bars_chart.xvalues}
    yValues={props.chartACFData.bars_chart.yvalues}
    barColors={props.chartACFData.bars_chart.bar_colors}
    margin={props.chartACFData.bars_chart.margin}
    canvasHeight={props.chartACFData.bars_chart.canvas_height}
    />
  :
  props.chartACFData.chart_type == 'doughnut' ?
    <ChartDoughnutPie 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    chartType={props.chartACFData.chart_type}
    xValues={props.chartACFData.doughnut_pie_chart.xvalues}
    yValues={props.chartACFData.doughnut_pie_chart.yvalues}
    colors={props.chartACFData.doughnut_pie_chart.colors}
    margin={props.chartACFData.doughnut_pie_chart.margin}
    canvasHeight={props.chartACFData.doughnut_pie_chart.canvas_height}
    /> 
  :
  props.chartACFData.chart_type == 'pie' ?
    <ChartDoughnutPie 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    chartType={props.chartACFData.chart_type}
    xValues={props.chartACFData.doughnut_pie_chart.xvalues}
    yValues={props.chartACFData.doughnut_pie_chart.yvalues}
    colors={props.chartACFData.doughnut_pie_chart.colors}
    margin={props.chartACFData.doughnut_pie_chart.margin}
    canvasHeight={props.chartACFData.doughnut_pie_chart.canvas_height}
    /> 
  :
  props.chartACFData.chart_type == 'multiple_lines' ?
    <ChartMultipleLines 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    xValues={props.chartACFData.multiple_lines_chart.xvalues}
    yValues={props.chartACFData.multiple_lines_chart.yvalues}
    margin={props.chartACFData.multiple_lines_chart.margin}
    canvasHeight={props.chartACFData.multiple_lines_chart.canvas_height}
    />  
  :
  props.chartACFData.chart_type == 'singleline' ?
    <ChartLinearGradient 
    chartTitle={props.chartTitle}
    chartSubtitle={props.chartExcerpt}
    lineColor={props.chartACFData.single_line_chart.line_color}
    dataSet={props.chartACFData.single_line_chart.dataset}
    xValues={props.chartACFData.single_line_chart.xvalues}
    yValues={props.chartACFData.single_line_chart.yvalues}
    canvasHeight={props.chartACFData.single_line_chart.canvas_height}
    margin={props.chartACFData.single_line_chart.margin}
    /> 
  :
  'A problem occured, we are sorry for the inconvenience. We are working on it.' 
  );

  return (
    <>
    <Head>
      <title>Data Mundy | {props.chartTitle} | Providing Data from and to an amazing World</title>
      <meta name="description" content={props.chartExcerpt} /> 
      <meta property="og:title" content={props.chartTitle} key="title"/>
      <meta property="og:description" content={props.chartExcerpt} />
      <meta name="twitter:text:title" content={props.chartTitle} />
      <link rel="canonical" href="https://datamundy.com/" />
    </Head>
    <Header data-testid="header-component" />
    <ChartFormatMain>
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
                href="/charts/"
                >
                  Charts
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
                href={`/charts/${props.chartACFData.chart_category_data.post_name}/`}
                >
                  {props.chartACFData.chart_category_data.post_title}
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
              {props.chartTitle}
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
                {props.chartExcerpt}
              </P>
              <ChartFormatAuthor>
                  <Span
                  fontColor={({ theme }) => theme.colors.text_4}
                  fontWeight={400}
                  fontSize={15}
                  lineHeight={24}
                  xsFontSize={15}
                  xsLineHeight={24}
                  margin={`4px 0 0 5px`}
                  >Last updated at {formatDate(props.chartDate)}
                  </Span>
              </ChartFormatAuthor>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ChartFormatThumb>
                  <Image
                  src={props.chartFeaturedImage}
                  alt={props.chartTitle}
                  layout="fill"
                  objectFit="cover"
                  />
                </ChartFormatThumb>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
            <Grid item xs={12} sm={12} md={9} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <Grid container>
                <Grid item xs={12} style={{ marginTop: 41 }}>
                  <ContentBody dangerouslySetInnerHTML={{
                      __html: props.chartContent
                    }}
                  />
                  {chartComponent}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ChartFormatMain>
    <Footer />
    </>
  );
}