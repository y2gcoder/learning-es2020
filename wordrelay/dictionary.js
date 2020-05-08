const btn = document.querySelector("#button");

const dictionary = [];
btn.addEventListener("click", () => {
  const wordTag = document.querySelector("#word");
  const word = wordTag.textContent;
  // 저장 공간에 값을 하나 넣어놨을 뿐
  const inputTag = document.querySelector("#input");
  const errorTag = document.querySelector("#error");
  const input = inputTag.value;
  if (dictionary.includes(input)) {
    errorTag.textContent = "중복입니다.";
    inputTag.value = "";
    inputTag.focus();
  } else {
    if (word[word.length - 1] === input[0]) {
      wordTag.textContent = input;
      // 태그의 텍스트 컨텐츠를 바꿔주는 것.
      errorTag.textContent = "";
      inputTag.value = "";
      inputTag.focus();
      dictionary.push(input);
    } else {
      errorTag.textContent = "땡";
      inputTag.value = "";
      inputTag.focus();
    }
  }
});
