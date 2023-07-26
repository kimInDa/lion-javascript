

import { tiger } from "./lib/index.js";

const data = tiger.get('https://jsonplaceholder.typicode.com/users');

const result = await data

console.log(result.data);





