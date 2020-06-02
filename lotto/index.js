// fill() 은 undefined로 채움. 괄호 안에 채우면 그 대로 들어감.
// map() 배열에서 1대 1로 꺼내와서 함.
// map()의 callback 함수(arrow function)에서 매개변수 첫 번째는 값, 두 번째는 index가 됨
const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
// 피셔 .H 방식 : 전체를 랜덤하게 섞고 7개 앞에서 뽑기
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
//sort 는 숫자 순이 아니라 사전 순 / 그래서 안에 argument로 오름 차순 (p,c) => {return p-c} 넣어주자.
// return 값이 0보다 작으면 자리를 바꿈.
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
const bonus = shuffle[6];

function colorize(number, tag) {
  if (number <= 10) {
    tag.style.backgroundColor = "red";
    tag.style.color = "white";
  } else if (number <= 20) {
    tag.style.backgroundColor = "orange";
  } else if (number <= 30) {
    tag.style.backgroundColor = "yellow";
  } else if (number <= 40) {
    tag.style.backgroundColor = "blue";
    tag.style.color = "white";
  } else {
    tag.style.backgroundColor = "green";
    tag.style.color = "white";
  }
}

const resultTag = document.querySelector("#result");
// for (let i = 0; i < 6; i++) {
//   // 클로저 문제 let이 나오면서 없어졌다.
//   setTimeout(() => {
//     const ball = document.createElement("div");
//     ball.className = "ball";
//     colorize(winBalls[i], ball);
//     ball.textContent = winBalls[i];
//     resultTag.appendChild(ball);
//   }, 1000 * (i + 1));
// }

winBalls.forEach((number, index) => {
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    colorize(number, ball);
    ball.textContent = number;
    resultTag.appendChild(ball);
  }, 1000 * (index + 1));
});
// foreach와 map은 무슨 차이?
// map은 반복문이면서 1:1 mapping에 좀 더 초점이 맞추어져있다.
// foreach 는 단순 반복에 더 초점이 맞추어져 있다.
// return이 있으면 map을 쓰는 게 좋고, 없으면 foreach가 좀 더 나은 듯

// 성격이 다르면 중복을 줄이지 않아도 됨.
const bonusTag = document.querySelector(".bonus");
setTimeout(() => {
  const bonusBall = document.createElement("div");
  bonusBall.className = "ball";
  colorize(bonus, bonusBall);
  bonusBall.textContent = bonus;
  bonusTag.appendChild(bonusBall);
}, 7000);

/**
 * promise를 리턴받아서 쓸 때는 map을 쓴다.
 * const promises = [1, 2, 3].map((v) => {
 *  return Promise.resolve(v);
 *  });
 * // 이전 방식
 * // Promise.all(promises);
 * // 요즘 방식
 * Promise.allSettled(promises);
 */
