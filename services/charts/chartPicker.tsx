import ChartLinearGradient from 'components/Charts/ChartLinearGradient';
import ChartDoughnutPie from 'components/Charts/ChartDoughnutPie';
import ChartMultipleLines from 'components/Charts/ChartMultipleLines';
import ChartBars from 'components/Charts/ChartBars';

export default function chartPicker(props: any) {
    const chartComponent = (
    props.chart_type == 'vertical_bars' ?
        <ChartBars 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        chartOrientation={'x'}
        xValues={props.bars_chart.xvalues}
        yValues={props.bars_chart.yvalues}
        barColors={props.bars_chart.bar_colors}
        margin={props.bars_chart.margin}
        canvasHeight={props.bars_chart.canvas_height}
        />
    :
    props.chart_type == 'horizontal_bars' ?
        <ChartBars 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        chartOrientation={'y'}
        xValues={props.bars_chart.xvalues}
        yValues={props.bars_chart.yvalues}
        barColors={props.bars_chart.bar_colors}
        margin={props.bars_chart.margin}
        canvasHeight={props.bars_chart.canvas_height}
        />
    :
    props.chart_type == 'doughnut' ?
        <ChartDoughnutPie 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        chartType={props.chart_type}
        xValues={props.doughnut_pie_chart.xvalues}
        yValues={props.doughnut_pie_chart.yvalues}
        colors={props.doughnut_pie_chart.colors}
        margin={props.doughnut_pie_chart.margin}
        canvasHeight={props.doughnut_pie_chart.canvas_height}
        /> 
    :
    props.chart_type == 'pie' ?
        <ChartDoughnutPie 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        chartType={props.chart_type}
        xValues={props.doughnut_pie_chart.xvalues}
        yValues={props.doughnut_pie_chart.yvalues}
        colors={props.doughnut_pie_chart.colors}
        margin={props.doughnut_pie_chart.margin}
        canvasHeight={props.doughnut_pie_chart.canvas_height}
        /> 
    :
    props.chart_type == 'multiple_lines' ?
        <ChartMultipleLines 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        xValues={props.multiple_lines_chart.xvalues}
        yValues={props.multiple_lines_chart.yvalues}
        margin={props.multiple_lines_chart.margin}
        canvasHeight={props.multiple_lines_chart.canvas_height}
        />  
    :
    props.chart_type == 'singleline' ?
        <ChartLinearGradient 
        chartTitle={props.chartTitle}
        chartSubtitle={props.chartExcerpt}
        lineColor={props.single_line_chart.line_color}
        dataSet={props.single_line_chart.dataset}
        xValues={props.single_line_chart.xvalues}
        yValues={props.single_line_chart.yvalues}
        canvasHeight={props.single_line_chart.canvas_height}
        margin={props.single_line_chart.margin}
        /> 
    :
        'A problem occured, we are sorry for the inconvenience. We are working on it.' 
    );

    return chartComponent;
}