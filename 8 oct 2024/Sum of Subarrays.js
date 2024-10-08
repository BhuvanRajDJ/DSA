const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the array numbers: ", function (input) {
  let arr = input.split(" ").map(Number);
  let i = 0;
  let j = 0;
  let n = arr.length;
  let sum = 0;
  let k = 0;
  let arr1 = [];
  while (i < n) {
    j = i;
    while (j < n) {
      arr1.push(arr[j]);
      k = 0;
      while (k < arr1.length) {
        sum = sum + parseInt(arr1[k]);
        k++;
      }
      j++;
    }
    arr1 = [];
    i++;
  }

  console.log(sum);
});
