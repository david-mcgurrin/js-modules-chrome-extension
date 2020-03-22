import {sayHello} from './modules/greeting.js';
import {sum, product} from './modules/math-functions.js';
import githubToken from './modules/github-auth.js';

const a = 4;
const b = 6;

console.log('Hello and welcome to the github.js file!');
console.log('The contents of this file only run on Github, as oultined in the content scripts section of the manifest.json file.');
console.log('Using Parceljs we are able to make use of imports!')
console.log('');
console.log(sayHello('Nice to see you!'));
console.log(`The sum of ${a} and ${b} is ${sum(a, b)}.`);
console.log(`The product of ${a} and ${b} is ${product(a, b)}.`);
console.log(`The test token is ${githubToken}.`);