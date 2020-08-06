import "./styles.css";

function symdiff(a, b) {
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

  return c;
}

let result1 = symdiff([1, 2, 3], [5, 2, 1, 4]);
let result2 = symdiff([1, 2, 3, 3], [5, 2, 1, 4]);

let app = document.getElementById("app");
app.innerHTML = `
<h1><code>symdiff</code></h1>
<p>Function that returns the distinct elements that do not exist in both input arrays or the symmetric difference between two arrays.</p>
<p>Reference: <a href="https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript" target="_blank">How to get the difference between two arrays in JavaScript?</a></p>
<div>
<pre>
<code>
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
</code>
</pre>
</div>
`;

let resultText = document.createElement("pre");
resultText.innerText = `Result1: [ ${result1.join(", ")} ]`;

let resultText2 = document.createElement("pre");
resultText2.innerText = `Result2: [ ${result2.join(", ")} ]`;

app.appendChild(resultText);
app.appendChild(resultText2);
app.innerHTML += `
<br>
<p>Better answers provided in the StackOverflow link such as:</p>
<div><pre><code>
let intersection = arr1.filter(x => arr2.includes(x));
</code></pre></div>
`;
