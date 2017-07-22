module.exports = (num) => {
  const digits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  const units = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
  const numStr = num.toString().split('').reverse();
  if (num <= 10) {
    return digits[num];
  }
  const output = numStr.map((number, index) => {
    const n = +number;
    if (n === 1 && index === 0) {
      return 'เอ็ด';
    }
    if (index === 1) {
      if (n === 1) return units[index];
      if (n === 2) return `ยี่${units[index]}`;
    }
    if (n !== 0) {
      return `${digits[n]}${units[index]}`;
    }
    return '';
  });
  return output.reverse().join('');
};
