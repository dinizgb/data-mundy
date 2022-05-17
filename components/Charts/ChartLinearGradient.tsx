// DOCUMENTATION: https://www.chartjs.org/docs/latest/samples/advanced/linear-gradient.html

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DefaultChartWrapper } from 'components/Wrappers/ChartWrappers';
import { H3, Span } from 'components/Texts/Typographies';
import getChartGradientColor from "services/charts/getChartGradientColor";
import stringToArray from 'utils/stringToArray';

type ChartLinearGradientProps = {
  chartTitle: string;
  chartSubtitle: string;
  dataSet: string;
  lineColor: string;
  xValues: string;
  yValues: string;
  margin: string;
  canvasHeight: string;
}

export default function ChartLinearGradient(props: ChartLinearGradientProps) {
  const canvasEl = useRef(null);

  const xValuesArray = stringToArray(props.xValues, ',', 'number');
  const yValuesArray = stringToArray(props.yValues, ',', 'number');
  const colors = getChartGradientColor(props.lineColor); //'149, 76, 233'

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.chartColor.half);
    gradient.addColorStop(0.65, colors.chartColor.quarter);
    gradient.addColorStop(1, colors.chartColor.zero);

    const data = {
      labels: xValuesArray,
      datasets: [
        {
          backgroundColor: gradient,
          label: props.dataSet,
          data: yValuesArray,
          fill: true,
          borderWidth: 2,
          borderColor: colors.chartColor.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.chartColor.default,
          pointRadius: 3
        }
      ]
    };
    const config:any = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
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
      margin={`20px 0`}
      >{props.chartSubtitle}</Span>
      <canvas ref={canvasEl} height={props.canvasHeight} /> 
    </DefaultChartWrapper>
  );
}