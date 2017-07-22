module.exports = (num) => {
  const digits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  const units = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
  const numStr = num.toString().split('').reverse();
  if (num <= 10) {
    return digits[num];
  }
  if (num === 20) {
    return 'ยี่สิบ';
  }
  const output = numStr.map((number, index) => {
    if (number !== '0') {
      return `${digits[number]}${units[index]}`;
    }
    return '';
  });
  return output.reverse().join('');
};
