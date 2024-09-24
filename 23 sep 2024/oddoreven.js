const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", function (input) {
  var num = input.split(" ");
  var len = num.length;
  let i = 0;
  while (i < len) {
    if (num[i] % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
    i++;
  }
  r1.close();
});
