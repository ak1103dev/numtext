const expect = require('expect');
const _ = require('lodash');

const { toText } = require('../../index');

describe('toEngText', () => {
  describe('digit', () => {
    const text = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${index}`, () => {
        const input = index;
        const expectedValue = t;
        expect(toText(input, { lang: 'en' })).toEqual(expectedValue);
      });
    });
  });
  describe('the tens', () => {
    const text = [
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
      'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
      'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
      'Twenty Two', 'Thirty Three', 'Fifty Five', 'Eighty Four',
    ];
    const num = [
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 30, 40, 50, 60, 70, 80, 90,
      22, 33, 55, 84,
    ];
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${num[index]}`, () => {
        const input = num[index];
        const expectedValue = t;
        expect(toText(input, { lang: 'en' })).toEqual(expectedValue);
      });
    });
  });
});
