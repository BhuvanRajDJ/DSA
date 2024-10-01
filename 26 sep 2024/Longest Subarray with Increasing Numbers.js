const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var numbers = input.split(" ").map(Number);
  let len = numbers.length;
  let count = 0;
  let count1 = 0;
  let i = 0;
  let j = [];
  while (i < len - 1) {
    if (numbers[i] <= numbers[i + 1]) {
      count1++;
      j.push(numbers[i]);
    } else {
      j.push(numbers[i]);
      console.log(j.join(" "));
      j = [];
      if (count < count1) {
        count = count1;
      }
      count1 = 0;
    }
    i++;
  }
  console.log(count + 1);
});
