console.log('im in the index.js file');

var moment = require('moment');

console.log(moment().format('dddd'));

// load math.js
import * as math from 'mathjs'

// use math.js
console.log(math.sqrt(-4)) // 2i