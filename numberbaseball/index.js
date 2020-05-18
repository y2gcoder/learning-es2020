const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 범위에 멋어나면 undefined
let answer = [];
// let n = 0;
// while (n <= 3) {
//   const index = Math.floor(Math.random() * (10 - n)); // 0~9 정수, 할 때마다 범위도 줄여주어야 함.
//   answer.push(numbers[index]);
//   numbers.splice(index, 1); // splice(index, 1) 그 인덱스를 하나 지워준다.
//   n++;
// }
for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * (10 - n)); // 0~9 정수, 할 때마다 범위도 줄여주어야 함.
  answer.push(numbers[index]);
  numbers.splice(index, 1); // splice(index, 1) 그 인덱스를 하나 지워준다.
}
console.log(answer);

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; // 문자열 ex) '3046' === truthy value
  // 0, '', NaN, false, null, undefined === falsy value
  if (value && value.length === 4) {
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("HR")); // 글자 추가
    } else {
      console.log("다르다");
      // 문자'열'과 배'열' => 나열. 순서가 있음. for of 문 사용
      let strike = 0;
      let ball = 0;
      // entries() 배열 뒤에만 가능
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split("").entries()) {
          // 변수명에 속지 않게 문자열이니까 iString으로!
          // console.log(aIndex, aNumber, iIndex, iString);
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      logs.appendChild(
        document.createTextNode(`${input.value}: ${strike} strike ${ball} ball`)
      );
      if (count > 10) {
        // 문자열에서는 웬만하면 문자열로 만들어서 넣어주자 ex) 배열 -> 문자열
        logs.appendChild(
          document.createTextNode(`Game Over: ${answer.join("")}`)
        );
      } else {
        count++;
      }
    }
  }
});

// 별찍기
// let num = 1;
// while (num < 3) {
//   console.log(
//     " ".repeat(Math.abs(3 - num)) + "*".repeat(Math.abs(2 * num - 1))
//   );
//   num += 1;
// }
// while (num >= 1) {
//   console.log(
//     " ".repeat(Math.abs(3 - num)) + "*".repeat(Math.abs(2 * num - 1))
//   );
//   num -= 1;
// }

// 제로초
// 1 3 5 3 1
// 4 2 0 2 4
// 4 2 0 -2 -4
// let num = 4;
// while (num >= -4) {
//   console.log(" ".repeat(Math.abs(num) / 2) + "*".repeat(5 - Math.abs(num)));
//   num -= 2;
// }

// 4-7 숙제
// 1 3 5 3 1
// 4 2 0 2 4
// 4 2 0 -2 -4
// let num = 4;
// while (num >= -4) {
//   console.log(" ".repeat(Math.abs(num)) + "*".repeat(5 - Math.abs(num)));
//   num -= 2;
// }
