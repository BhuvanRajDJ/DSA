const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  r1.question("enter the number to be searched: ", function (input) {
    var num = parseInt(input);
    let len = n.length;
    let flag = "No";
    let i = 0;
    while (i < len) {
      if (n[i] == num) {
        flag = "Yes";
        break;
      }

      i++;
    }
    console.log(flag);
  });
});
