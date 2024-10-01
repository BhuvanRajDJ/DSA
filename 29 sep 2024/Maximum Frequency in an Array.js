const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  let number = input.split(" ").map(Number);
  let len = number.length;
  let sum = 0;
  let count = 0;
  let i = 0;
  let max = 0;
  while (i < len) {
    let j = i;
    while (j < len) {
      if (number[i] == number[j]) {
        sum = sum + 1;
      }
      j++;
    }
    if (count < sum) {
      count = sum;
      max = parseInt(number[i]);
    }
    sum = 0;
    i++;
  }
  console.log(max);
});
