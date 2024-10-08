const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the length of the array of numbers: ", function (input) {
  let n = parseInt(input);

  r1.question("Enter th array of numbers: ", function (input) {
    let arr = input.split(" ").map(Number);
    r1.question("Enter the second array: ", function (input) {
        let i = 0;
        let j = 0;
        let flag = false;
        let rep = [];
      let arr2 = input.split(" ").map(Number);
      if((arr.length!= n) & (arr2.length!=n)){
        console.log("Enter the correct length of array numbers of input")
        
      }
   else{
      while (i < arr.length) {
        j = 0;
        flag = false;

        while (j < arr2.length) {
          if (arr[i] == arr2[j]) {
            k = 0;
            if (rep.length == 0) {
              rep.push(arr[i]);
            } else {
              while (k < rep.length) {
                if (arr[i] == rep[k]) {
                  flag = true;
                  break;
                }
                k++;
              }
              if (flag == false) {
                rep.push(arr[i]);
              }
            }
          }
          j++;
        }
        i++;
      }}
      if (rep.length != 0) {
        console.log(rep.join(" "));
      } else {
        console.log("No");
      }
    });
  });
});
