export default function getChartGradientColor(colorRgb: string) {
    const gradientObject = {
        chartColor: {
            default: `rgba(${colorRgb}, 1)`,
            half: `rgba(${colorRgb}, 0.5)`,
            quarter: `rgba(${colorRgb}, 0.25)`,
            zero: `rgba(${colorRgb}, 0)`
        }
    }; 
    return gradientObject;
}