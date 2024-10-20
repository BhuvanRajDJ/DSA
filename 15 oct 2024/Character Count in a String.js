const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the string: ", function (input) {
  let string1 = input;
  r1.question("Enter the string: ", function (input) {
    let string2 = input;
    console.log(string1);
    console.log(string2);
    console.log(string1[0]);

    let i = 0;
    let j = string1.length;
    let count = 0;
    while (i < j) {
      if (string1[i] == string2) {
        count++;
      }
      i++;
    }

    if (count == 0) {
      console.log("No");
    } else {
      console.log(count);
    }
  });
});
