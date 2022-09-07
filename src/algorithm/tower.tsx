import React from "react";

export default function tower() {
  function Test(number: number) {
    for (let index = 1; index <= number; index++) {
      let arr = [];
      let a = 1;
      for (let index2 = 0; index2 < index; index2++) {
        if (!arr.length) {
          if (index >= 10) {
            arr.push(0, 0);
          } else {
            if (index === 1) {
              arr.push(index);
              break;
            }
            arr.push(index, index);
          }
        }

        if (arr.length < index) {
          if (index - arr.length === 1) {
            arr.splice(a, 0, index - (index2 + 1));
            break;
          }
          if (index > 10 && index - (index2 + 1) < 10) {
            arr.splice(a, 0, index - (index2 + 1), index - (index2 + 1));
            a++;
          }

          if (index <= 10) {
            arr.splice(a, 0, index - (index2 + 1), index - (index2 + 1));
            a++;
          }
        }
      }
      console.log(arr);
    }
  }

  Test(20);
  return <div>tower</div>;
}
