# symdiffjs

Function that returns the distinct elements that do not exist in both input arrays or the symmetric difference between two arrays.

```js
function sym(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1 && c.indexOf(a[i]) === -1) {
      c.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1 && c.indexOf(b[i]) === -1) {
      c.push(b[i]);
    }
  }
  // console.log(c);
  return c;
}

let result1 = sym([1, 2, 3], [5, 2, 1, 4]);
let result2 = sym([1, 2, 3, 3], [5, 2, 1, 4]);

Result1: [ 3, 5, 4 ]
Result2: [ 3, 5, 4 ]
```

Created with CodeSandbox
