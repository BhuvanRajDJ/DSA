const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the string: ", function (input) {
  let str = input;
  r1.question("Enter the letter: ", function (input) {
    let letter = input;
    let flag = false;

    let i = 0;
    while (i < str.length) {
      if (str[i] == letter) {
        flag = true;
      }
      i++;
    }

    if (flag == true) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });
});
