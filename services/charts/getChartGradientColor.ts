/**
 * Function that returns an object with four values to Chart Gradient Color.
 * @param {string} colorRgb with rgb data.
 * @return {object}: with four values to Chart Gradient Color.
 */
export default function getChartGradientColor(colorRgb: string) {
  const gradientObject = {
    chartColor: {
      default: `rgba(${colorRgb}, 1)`,
      half: `rgba(${colorRgb}, 0.5)`,
      quarter: `rgba(${colorRgb}, 0.25)`,
      zero: `rgba(${colorRgb}, 0)`,
    },
  };
  return gradientObject;
}
