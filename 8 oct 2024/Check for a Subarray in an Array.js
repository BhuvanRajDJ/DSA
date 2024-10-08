const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter th array of numbers: ", function (input) {
  let arr = input.split(" ").map(Number);
  r1.question("Enter the second array: ", function (input) {
    let arr2 = input.split(" ").map(Number);
    let i = 0;
    let j = 0;
    let flag = false;
    while (i < arr.length) {
      j = 0;
      while (j < arr2.length) {
        if (arr[j] == arr2[i]) {
          let x = 0;
          let y = i;
          while (x < arr2.length && y < arr.length) {
            if (arr[y] != arr2[x]) {
              flag = false;
              break;
            } else if (x == arr2.length - 1) {
              flag = true;
            }
            y++;
            x++;
          }
        }
        j++;
      }
      if (flag == true) {
        console.log("Yes");
        break;
      }

      i++;
    }
    if (flag == false) {
      console.log("No");
    }
  });
});
