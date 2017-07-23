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
  describe('the hundreds', () => {
    const text = [
      'หนึ่งร้อย', 'สองร้อย', 'สามร้อย', 'สี่ร้อย', 'ห้าร้อย', 'หกร้อย', 'เจ็ดร้อย', 'แปดร้อย', 'เก้าร้อย',
      'หนึ่งร้อยเอ็ด', 'สองร้อยสี่สิบแปด', 'เจ็ดร้อยแปด', 'เก้าร้อยเก้าสิบ',
    ];
    const num = [
      100, 200, 300, 400, 500, 600, 700, 800, 900,
      101, 248, 708, 990,
    ];
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${num[index]}`, () => {
        const input = num[index];
        const expectedValue = t;
        expect(toText(input)).toEqual(expectedValue);
      });
    });
  });
  describe('the millions', () => {
    const text = [
      'หนึ่งล้าน', 'สองล้าน', 'สามล้าน', 'สี่ล้าน', 'ห้าล้าน', 'หกล้าน', 'เจ็ดล้าน', 'แปดล้าน', 'เก้าล้าน',
    ];
    const num = [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ].map(n => n * 1000000);
    _.map(text, (t, index) => {
      it(`should return "${t}" when number is ${num[index]}`, () => {
        const input = num[index];
        const expectedValue = t;
        expect(toText(input)).toEqual(expectedValue);
      });
    });
  });
  describe('others', () => {
    const num = [1234567890, 101000000, 1000000000, 22000000000000, 421000000, 111000000];
    const text = [
      'หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบ',
      'หนึ่งร้อยเอ็ดล้าน',
      'หนึ่งพันล้าน',
      'ยี่สิบสองล้านล้าน',
      'สี่ร้อยยี่สิบเอ็ดล้าน',
      'หนึ่งร้อยสิบเอ็ดล้าน',
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
