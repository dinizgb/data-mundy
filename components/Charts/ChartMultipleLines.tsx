// DOCUMENTATION: https://www.chartjs.org/docs/latest/samples/line/line.html

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DefaultChartWrapper } from 'components/Wrappers/ChartWrappers';
import { H3, P } from 'components/Texts/Typographies';
import stringToArray from 'utils/stringToArray';

type ChartMultipleLinesProps = {
  chartTitle: string;
  chartSubtitle: string;
  xValues: string;
  yValues: string;
  margin: string;
  canvasHeight: string;
}

export default function ChartMultipleLines(props: ChartMultipleLinesProps) {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const xValuesArray = stringToArray(props.xValues, ',', 'number');
    const yValuesArray = JSON.parse(props.yValues);

    const data = {
      labels: xValuesArray,
      datasets: yValuesArray
    };
    const config:any = {
      type: 'line',
      data: data,
    };
    const myMultipleLinesChart = new Chart(ctx, config);

    return function cleanup() {
      myMultipleLinesChart.destroy();
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