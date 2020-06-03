// 이미지 스트라이프 : 이미지 하나를 가져와서 잘라서 표시
const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = "rock";
const rspCoord = {
  rock: "0", // 바위
  scissors: "-142px", // 가위
  paper: "-284px", // 보
};
/**
 * rspCoord['rock'] : 안을 변수로 대체할 수 있음.
 * rspCoord.rock
 *
 */
// const arr = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3,
// };
// Array-like object (유사배열) : 배열을 흉내낸 객체
// 왠만하면 위의 객체처럼 설명을 코드로 풀어내는게 좋다. 그 후에 뭐 영어를 읽기 힘들다면 주석을 사용하는 정도로!
const intervalMaker = () => {
  return setInterval(() => {
    if (computerChoice === "rock") {
      computerChoice = "scissors";
    } else if (computerChoice === "scissors") {
      computerChoice = "paper";
    } else if (computerChoice === "paper") {
      computerChoice = "rock";
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
  }, 50);
};
let intervalId = intervalMaker();

const rockTag = document.querySelector("#rock");
const scissorsTag = document.querySelector("#scissors");
const paperTag = document.querySelector("#paper");

/**
 * 가위: 1, 바위: 0, 보: -1
 * 나/컴퓨터	가위	바위	보
 * 		가위		0			1			2
 * 		바위		-1		0			1
 * 		보			-2    -1   0
 */

const score = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

// const clickButton = (myChoice) => {
//   return () => {
//     // 리턴 값을 적어주지 않으면 return undefined 를 자동 입력
//     // 함수가 함수를 리턴! === 고차함수 / 화살표 연달아 === 함수를 리턴하는 함수
//     const myScore = score[myChoice];
//     const computerScore = score[computerChoice];
//     const diff = myScore - computerScore;
//     // 여기부터
//     const scoreTag = document.querySelector("#score");
//     let accScore = Number(scoreTag.textContent);
//     if (diff === 2 || diff === -1) {
//       accScore += 1;
//     } else if (diff === -2 || diff === 1) {
//       accScore -= 1;
//     }
//     scoreTag.textContent = accScore;
//     // 여기까지 자바스크립트에서 많이 쓰임. 기억해두자.}
//   };
// };

const clickButton = (myChoice) => () => {
  clearInterval(intervalId);
  // 리턴 값을 적어주지 않으면 return undefined 를 자동 입력
  // 함수가 함수를 리턴! === 고차함수 / 화살표 연달아 === 함수를 리턴하는 함수
  const myScore = score[myChoice];
  const computerScore = score[computerChoice];
  const diff = myScore - computerScore;
  // 여기부터
  const scoreTag = document.querySelector("#score");
  let accScore = Number(scoreTag.textContent);
  if (diff === 2 || diff === -1) {
    accScore += 1;
  } else if (diff === -2 || diff === 1) {
    accScore -= 1;
  }
  scoreTag.textContent = accScore;
  // 여기까지 자바스크립트에서 많이 쓰임. 기억해두자.
  setTimeout(() => {
    // 함수 호출한 것을 보았을 때는 우변을 함수의 리턴값으로 대체한다고 생각하자.
    intervalId = intervalMaker();
  }, 1000);
};
// rockTag.addEventListener("click", clickButton('rock')); === rockTag.addEventListener("click", undefined);
// scissorsTag.addEventListener("click", clickButton('scissors')); === rockTag.addEventListener("click", undefined);
// paperTag.addEventListener("click", clickButton('paper')); === rockTag.addEventListener("click", undefined);
// addEventListener의 2번째 argument로는 미래에 실행될 함수가 들어가야 하기 때문에 위의 고차함수를 써야 함.
// 함수자리에 함수를 적어주면 리턴 값이 함수여야 하니까! 당연한 거네...
// 함수가 함수를 리턴하면 됨.
rockTag.addEventListener("click", clickButton("rock"));
scissorsTag.addEventListener("click", clickButton("scissors"));
paperTag.addEventListener("click", clickButton("paper"));
