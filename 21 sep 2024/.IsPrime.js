const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("enter the number: ", function (input) {
  var n = parseInt(input);
  let i = 2;
  let count = 0;
  while (i < n) {
    if (n % i == 0) {
      count++;
    }
    i++;
  }
  if (count >= 1) {
    console.log("No");
    console.log(count);
  } else {
    console.log("Yes");
    console.log(count);
  }
});
