const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter the number: ", function (input) {
  let num = input.split(" ").map(Number);
  r1.question("enter the number: ", function (input) {
    let n = parseInt(input);
    let sum = 0;
    let i = 0;
    let j = 0;
    while (i < num.length) {
      j = i;
      while (j < num.length) {
        if (num[i] + num[j] == n) {
          console.log(num[i] + " " + num[j]);
        }
        j++;
      }
      i++;
    }
  });
});
