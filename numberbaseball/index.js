const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let answer = [];

let n = 0;
while (n <= 3) {
  answer[n] = Math.floor(Math.random() * 10);
  n++;
}

answer.join(""); // 3046

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; // 문자열 ex) '3046' === truthy value
  // 0, '', NaN, false, null, undefined === falsy value
  if (value && value.length === 4) {
    if (answer === value) {
    }
  }
});
