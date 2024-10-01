const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter the number: ", function (input) {
  var num = input.split(" ").map(Number);
  let i = 0;
  let sum = 0;
  let diff = 0;

  while (i < num.length) {
    j = i;
    while (j < num.length) {
      if (num[i] >= num[j]) {
        diff = num[i] - num[j];
      } else {
        diff = num[j] - num[i];
      }
      sum = sum + diff;

      j++;
    }

    i++;
  }
  console.log(sum);
});
