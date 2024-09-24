const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  let len = n.length;
  let count = 1;
  let i = 0;
  while (i < len) {
    count = count * parseInt(n[i]);
    i++;
  }
  console.log(count);
});
