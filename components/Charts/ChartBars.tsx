// DOCUMENTATION: https://www.chartjs.org/docs/latest/samples/bar/vertical.html

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DefaultChartWrapper } from 'components/Wrappers/ChartWrappers';
import { H3, P } from 'components/Texts/Typographies';
import stringToArray from 'utils/stringToArray';

type ChartBarsProps = {
  chartTitle: string;
  chartSubtitle: string;
  chartOrientation: string;
  xValues: string;
  yValues: string;
  barColors: string;
  margin: string;
  canvasHeight: string;
}

export default function ChartBars(props: ChartBarsProps) {
  const canvasEl = useRef(null);

  const xValuesArray = stringToArray(props.xValues, ',');
  const yValuesArray = stringToArray(props.yValues, ',', 'number');
  const barColorsArray = stringToArray(props.barColors, ',');

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const data = {
      labels: xValuesArray,
      datasets: [{
        backgroundColor: barColorsArray,
        data: yValuesArray
      }]
    };
    const config:any = {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          legend: {
              display: false
          }
        },
        indexAxis: props.chartOrientation,
      }
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
      <P
      fontColor={({ theme }) => theme.colors.text_2}
      fontWeight={400}
      fontSize={16}
      lineHeight={28}
      xsFontSize={16}
      xsLineHeight={28}
      margin={`5px 0 15px 0`}
      >{props.chartSubtitle}</P>
      <canvas ref={canvasEl} height={props.canvasHeight} /> 
    </DefaultChartWrapper>
  );
}