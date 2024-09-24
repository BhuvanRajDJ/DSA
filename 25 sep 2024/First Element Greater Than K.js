const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  r1.question("Enter the number:", function (input) {
    let n1 = parseInt(input);
    let len = n.length;
    let flag = "No";
    let i = 0;
    while (i < len) {
      if (parseInt(n[i]) > n1) {
        let x = parseInt(n[i]);
        flag = "Yes";
        console.log(x);
        break;
      } else {
        flag = "No";
      }
      i++;
    }
    if (flag == "No") {
      console.log("No");
    }
  });
});
