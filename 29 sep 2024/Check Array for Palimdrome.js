const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  let number = input.split(" ").map(Number);
  reverse = [];
  let i = number.length - 1;
  let flag = "No";
  while (i >= 0) {
    reverse.push(number[i]);
    i--;
  }
  let j = 0;
  while (j < number.length) {
    if (reverse[j] == number[j]) {
      flag = "Yes";
    } else {
      flag = "No";
      break;
    }
    j++;
  }
  console.log(flag);
});
