const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", function (input) {
  var n = parseInt(input);
  let count = 0;
  let i = 2;
  var prime = [];
  while (count < n) {
    let sum = 0;
    let j = 2;
    while (j <= i) {
      if (i % j == 0) {
        sum++;
      }

      j++;
    }

    if (sum == 1) {
      count++;

      prime.push(i);
    }

    i++;
  }
  let x = prime.toString();
  console.log(x);
});
