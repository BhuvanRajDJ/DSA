const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);

  let len = n.length;
  let max = 0;
  let i = 0;
  while (i < len) {
    if (n[i] > max) {
      max = n[i];
    }
    i++;
  }

  let k = 1;
  let index = 10000;
  while (k < max) {
    let j = 0;
    while (j < len) {
      if (n[j] == k * k) {
        if (index > j) {
          index = j;
        }
      }
      j++;
    }
    k++;
  }
  console.log(n[index]);
});
