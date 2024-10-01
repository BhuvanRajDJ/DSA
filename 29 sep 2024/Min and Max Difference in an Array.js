const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  let number = input.split(" ").map(Number);
  let len = number.length;
  let i = 0;
  let diff = 0;
  let maximun = 0;
  let min = 12345678900;
  while (i < len) {
    let j = 1;
    while (j < len) {
      diff = number[i] - number[j];
      if (diff > maximun) {
        maximun = diff;
      } else if ((diff < min) & (diff >= 0)) {
        min = diff;
      }
      j++;
    }
    i++;
  }

  console.log(min + " " + maximun);
});
