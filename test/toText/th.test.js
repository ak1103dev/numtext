const expect = require('expect');
const _ = require('lodash');

const { toText } = require('../../index');

describe('toThText', () => {
  describe('digit', () => {
    const text = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${index}`, () => {
        const input = index;
        const expectedValue = t;
        expect(toText(input)).toEqual(expectedValue);
      });
    });
  });
  describe('the tens', () => {
    const text = [
      'สิบ', 'ยี่สิบ', 'สามสิบ', 'สี่สิบ', 'ห้าสิบ', 'หกสิบ', 'เจ็ดสิบ', 'แปดสิบ', 'เก้าสิบ',
      'สิบเอ็ด', 'ยี่สิบเอ็ด', 'เก้าสิบเก้า',
    ];
    const num = [
      10, 20, 30, 40, 50, 60, 70, 80, 90,
      11, 21, 99,
    ];
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${num[index]}`, () => {
        const input = num[index];
        const expectedValue = t;
        expect(toText(input)).toEqual(expectedValue);
      });
    });
  });
});
