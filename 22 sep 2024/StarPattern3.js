const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var num = parseInt(input);
  var n = num;
  let i = 0;

  while (i < n) {
    let j = 0;
    while (j < i) {
      process.stdout.write(" ");
      j++;
    }
    process.stdout.write("*");
    console.log();
    i++;
  }
});
