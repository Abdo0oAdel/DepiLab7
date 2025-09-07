import { DataHandler } from './dataHandler.js';
const handler = new DataHandler();
console.log(handler.fetchData('https://api.example.com/data'));
console.log(handler.saveData({ name: 'Test', value: 123 }));
