const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the sentence: ", function (input) {
  let sentence = input.toLowerCase();
  //   let sentence = sentence1.split(" ");
  let countV = 0;
  let countC = 0;
  let i = 0;
  let len = sentence.length;
  while (i < len) {
    if (
      sentence[i] == "a" ||
      sentence[i] == "e" ||
      sentence[i] == "i" ||
      sentence[i] == "o" ||
      sentence[i] == "u"
    ) {
      countV++;
    } else if (sentence[i] != " ") {
      countC++;
    }
    i++;
  }
  console.log(countV, countC);
});
