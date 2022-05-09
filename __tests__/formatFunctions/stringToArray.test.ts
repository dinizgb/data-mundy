import stringToArray from "utils/stringToArray";

describe('String to Array', () => {
    it('Return a array of string', () => {
        let expectedString = ['Data', 'Mundy', 'Website'];
        expect(stringToArray('Data,Mundy,Website', ',')).toEqual(expect.arrayContaining(expectedString));
    });
    it('Return a array of numbers', () => {
        let expectedNumber = [1, 2, 3];
        expect(stringToArray('1,2,3', ',', 'number')).toEqual(expect.arrayContaining(expectedNumber));
    });
});