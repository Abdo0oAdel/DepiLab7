import { mergeObjects, cloneObject } from './utils.js';
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log('Merged:', mergeObjects(obj1, obj2));
console.log('Cloned:', cloneObject(obj1));
