const th = require('./th');

module.exports = (num, options = { lang: 'th' }) => {
  const { lang } = options;
  switch (lang) {
    case 'th':
      return th(num);
    default:
      return th(num);
  }
};
