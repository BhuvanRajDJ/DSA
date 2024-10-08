const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input) {
  var num = input.split(" ").map(Number);
  r1.question("Enter the number: ", function (input) {
    var n = parseInt(input);
    let i = 0;
    let j = 0;
    let sum = 0;
    let subarray = [];
    let subarray2 = [];
    subarray2.push(num);
    let dummiarray = [];
    flag = false;
    while (i < num.length) {
      j = i;
      while (j < num.length) {
        sum = sum + num[j];
        if (n >= sum) {
          dummiarray.push(num[j]);
          if (n == sum) {
            subarray.push(dummiarray);
            flag = true;
          }
        }
        j++;
      }
      dummiarray = [];
      if ((subarray2.length >= subarray.length) & (subarray.length != 0)) {
        subarray2 = [];
        subarray2.push(subarray);
      }
      subarray = [];
      sum = 0;
      i++;
    }

    if (flag == true) {
      console.log(subarray2.join(" "));
    } else {
      console.log("Not Possible");
    }
  });
});
