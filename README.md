# random-img-lib
A library to work with san4ouZ random API


**Very simple to use library**
```bash
npm i random-img-lib
```

There are two functions to works with, there are code examples
```js
const { fullRandom, randomImage } = require('random-img-lib');

fullRandom().then(r => console.log(r));
/* Method above returns random image from random method that is exists */

randomImage('foxes').then(r => console.log(r));
/* Method above returns random image from provided method if it's exists */
```
