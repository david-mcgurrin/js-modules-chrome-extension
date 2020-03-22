import {sayHello} from './modules/greeting.js';
import {sum, product} from './modules/math-functions.js';

const moduleGreeting = document.getElementById('moduleGreeting');
const moduleSum = document.getElementById('moduleSum');
const moduleProduct = document.getElementById('moduleProduct');

const a = 3;
const b = 7;

moduleGreeting.textContent = sayHello('Nice to see you!');
moduleSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}.`;
moduleProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}.`;
