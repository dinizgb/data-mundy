import getChartGradientColor from "services/charts/getChartGradientColor";

describe('Get Chart Gradient Color', () => {
    const defaultKey = "default";
    const half = "half";
    const quarter = "quarter";
    const zero = "zero";

    const desiredObject = {
        chartColor: {
            [defaultKey]: expect.any(String),
            [half]: expect.any(String),
            [quarter]: expect.any(String),
            [zero]: expect.any(String)
        }
    };
    it('Return an object with the four values needed', () => {
        expect(getChartGradientColor('149, 76, 233')).toEqual(
            expect.objectContaining(desiredObject)
        )
    });
});