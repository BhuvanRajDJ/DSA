const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  let number = input.split(" ").map(Number);
  let len = number.length;
  let sum = 0;
  let i = 0;
  let j = 0;
  let k = 0;
  let numbers = [];

  while (i < number.length) {
    j = i;
    sum = 0;
    while (j < number.length) {
      if (number[i] == number[j]) {
        sum++;
      }
      j++;
    }
    if (sum <= 1) {
      numbers.push(number[i]);
    }
    i++;
  }
  console.log(numbers);
  let x = 0;
  while (k < numbers.length) {
    x = 0;
    sum = 0;
    while (x < number.length) {
      if (parseInt(numbers[k]) == parseInt(number[x])) {
        sum++;
      }
      x++;
    }
    console.log(numbers[k] + " " + sum);
    k++;
  }

  
});
