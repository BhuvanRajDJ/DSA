const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  r1.question("Enter the number to count: ", function (input2) {
    var n1 = parseInt(input2);
    let len = n.length;
    let count = 0;
    let i = 0;
    while (i <= len) {
      if (n[i] == n1) {
        count++;
      }
      i++;
    }
    console.log(count);
  });
});
