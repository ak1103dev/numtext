module.exports = (num) => {
  const digits = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
    'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
  ];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const numStr = num.toString().split('').reverse();

  if (num <= 20) {
    return digits[num];
  }
  const output = numStr.map((number, index) => {
    const n = +number;
    const i = index;
    if (i === 1) {
      return tens[number];
    }
    if (n !== 0) {
      return digits[number];
    }
    return '';
  }).reverse().join(' ').trim();

  return output;
};
