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
for (let i = 0; i < 6; i++) {
  const ball = document.createElement("div");
  ball.className = "ball";
  colorize(winBalls[i], ball);
  ball.textContent = winBalls[i];
  resultTag.appendChild(ball);
}

const bonusTag = document.querySelector(".bonus");
const bonusBall = document.createElement("div");
bonusBall.className = "ball";
colorize(bonus, bonusBall);
bonusBall.textContent = bonus;
bonusTag.appendChild(bonusBall);
