// fill() 은 undefined로 채움. 괄호 안에 채우면 그 대로 들어감.
// map() 배열에서 1대 1로 꺼내와서 함.
// map()의 callback 함수(arrow function)에서 매개변수 첫 번째는 값, 두 번째는 index가 됨
const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
