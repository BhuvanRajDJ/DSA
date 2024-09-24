const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the numbers: ", function (input) {
  var num = input.split(" ");
  let len = num.length;
  let i = 0;
  let count = 0;
  while (i < len) {
    if (num[i] % 2 != 0) {
      count++;
    }
    i++;
  }
  console.log(count);
});
