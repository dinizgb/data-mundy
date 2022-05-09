// DOCUMENTATION: https://www.chartjs.org/docs/latest/samples/other-charts/doughnut.html

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DefaultChartWrapper } from 'components/ChartWrappers';
import { H3, Span } from 'components/Typographies';
import { theme } from 'pages/_app';
import stringToArray from 'utils/stringToArray';

type ChartDoughnutPieProps = {
  chartTitle: string;
  chartSubtitle: string;
  chartType: string;
  xValues: string;
  yValues: string;
  colors: string;
  margin: string;
  canvasHeight: string;
}

export default function ChartDoughnutPie(props: ChartDoughnutPieProps) {
  const canvasEl = useRef(null);

  const xValuesArray = stringToArray(props.xValues, ',');
  const yValuesArray = stringToArray(props.yValues, ',', 'number');
  const colorsArray = stringToArray(props.colors, ',');
  
  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const xLabels = xValuesArray;
    const yValues = yValuesArray;

    const data = {
      labels: xLabels,
      datasets: [
        {
          label: props.chartTitle,
          data: yValues,
          backgroundColor: colorsArray,
          borderWidth: 0,
          borderColor: theme.colors.secondary,
          hoverOffset: 6,
        }
      ]
    };
    const config:any = {
      type: props.chartType,
      data: data,
    };
    const myDoughnutChart = new Chart(ctx, config);

    return function cleanup() {
      myDoughnutChart.destroy();
    };
  });

  return (
    <DefaultChartWrapper margin={props.margin}>
      <H3
      fontColor={({ theme }) => theme.colors.text_4}
      fontWeight={600}
      fontSize={21}
      lineHeight={30}
      xsFontSize={21}
      xsLineHeight={30}
      margin={0}
      >{props.chartTitle}</H3>
      <Span
      fontColor={({ theme }) => theme.colors.text_2}
      fontWeight={400}
      fontSize={16}
      lineHeight={24}
      xsFontSize={16}
      xsLineHeight={24}
      margin={`10px 0`}
      >{props.chartSubtitle}</Span>
      <canvas ref={canvasEl} height={props.canvasHeight} /> 
    </DefaultChartWrapper>
  );
}