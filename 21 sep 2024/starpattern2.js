const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var n = parseInt(input);
  var i = 0;

  while (i <= n) {
    let j = 0;
    let n1 = n;
    while (j < i) {
      while (n1 > i) {
        process.stdout.write(" ");
        n1--;
      }
      process.stdout.write("*");
      j++;
    }
    console.log("");
    i++;
  }
});
