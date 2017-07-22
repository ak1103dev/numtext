# numtext
The library is coverter between number and text.

  Two repositories (https://github.com/Maheshkumar-Kakade/number-to-text, https://github.com/antronic/thai-baht-text-js) are inspiration for the library.

## How to install
```
npm install numtext --save
```
or
```
yarn add numtext
```

## Usage

```javascript
const numtext = require('numtext');

const text = numtext.toText(21);

console.log(text);
// ยี่สิบเอ็ด

```

## Plan

- covert number to thai text
- covert number to other language text
- covert text to number
