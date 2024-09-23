const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number ", function (input) {
  let n1 = parseInt(input);

  let i = 0;
  let count = -1;
  while (i < n1) {
    if (2 ** i <= n1) {
      count = count + 1;
    } else {
      break;
    }
    i++;
  }

  let x = 0;
  while (count >= 0) {
    if (n1 >= 2 ** count) {
      let square = 2 ** count;
      n1 = n1 - square;
      x = "1";
    } else {
      x = "0";
    }
    binarynumber = x;
    process.stdout.write(x);

    count--;
  }
  r1.close();
});
