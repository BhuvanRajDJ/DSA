const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", function (input) {
  let array = input.split(" ").map(Number);
  let len = array.length;
  let square = 0;
  let i = 0;
  let sq = [""];
  while (len > i) 
    {
    square = array[i] ** 2;
    i++;
    sq.push(square);
  }
  console.log(sq.join(" "));
});
