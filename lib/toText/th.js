module.exports = (num) => {
  const digits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  const units = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
  const numStr = num.toString().split('').reverse();
  if (num <= 10) {
    return digits[num];
  }
  const output = numStr.map((number, index) => {
    const n = +number;
    const i = index % 6;
    if (n === 1 && i === 0) {
      if (index > 0 && numStr.length % 6 === 1) return `${digits[1]}${units[6]}`;
      if (index > 0) return `เอ็ด${units[6]}`;
      return 'เอ็ด';
    }
    if (i === 1) {
      if (n === 1) return units[i];
      if (n === 2) return `ยี่${units[i]}`;
    }
    if (n !== 0) {
      if (index > 0 && i === 0) return `${digits[n]}${units[6]}`;
      return `${digits[n]}${units[i]}`;
    }
    if (i === 0 && index > 0) {
      return units[6];
    }
    return '';
  });
  return output.reverse().join('');
};
