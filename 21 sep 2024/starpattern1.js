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
    while (j < i) {
      process.stdout.write("*");

      j++;
    }
    console.log("");
    i++;
  }
});
