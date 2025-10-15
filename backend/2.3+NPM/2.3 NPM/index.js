// var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();

console.log(`Hello, ${sillyName}!`);

import {randomSuperhero} from "superheroes";
console.log(`you are ${randomSuperhero()}`);