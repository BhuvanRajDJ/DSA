const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  let len = n.length;
  let min = 1000000000000000;
  let minindex = 0;
  let i = 0;
  while (i < len) {
    if (n[i] < min) {
      min = n[i];
      minindex = i;
    }
    i++;
  }
  console.log(minindex + 1);
});
