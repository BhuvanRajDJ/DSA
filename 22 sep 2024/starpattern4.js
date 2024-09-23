const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", function (input) {
  var n = parseInt(input);
  let i = 0;

  while (i <= n) {
    let n1 = n;
    let j = 0;
    let k = 1;
    while (i < n1) {
      process.stdout.write(" ");
      n1--;
    }
    while (j < i) {
      process.stdout.write("*");
      j++;
    }
    while (k < i) {
      process.stdout.write("*");
      k++;
    }
    console.log("");
    i++;
  }
});
