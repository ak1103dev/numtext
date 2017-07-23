const th = require('./th');
const en = require('./en');

module.exports = (num, options = { lang: 'th' }) => {
  const { lang } = options;
  switch (lang) {
    case 'th':
      return th(num);
    case 'en':
      return en(num);
    default:
      return th(num);
  }
};
