const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the string: ", function (input) {
  let S1 = input.toLowerCase();
  r1.question("Enter the string: ", function (input) {
    let S2 = input.toLowerCase();
    let i = 0;
    let j = S2.length;
    let k = S1.length;
    let counts1 = 0;
    let counts2 = 0;
    while (i < S1.length) {
      if (S1[i] != " ") {
        counts1++;
      }
      i++;
    }
    i = 0;
    while (i < S2.length) {
      if (S2[i] != " ") {
        counts2++;
      }
      i++;
    }
    i = 0;
    let count = 0;
    if (counts1 == counts2) {
      while (i < j) {
        let x = 0;
        while (x < k) {
          if (S1[i] == S2[x]) {
            count++;
            S2 = S2.replace(S2[x], "");
          }
          x++;
        }
        i++;
      }
    }
    if (
      count == counts1 ||
      count == counts2 ||
      count == S1.length ||
      count == S2.length
    ) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });
});
