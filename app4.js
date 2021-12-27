let apiUrl = " https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(showQuestion);

function showQuestion(response) {
  console.log(response.data.results);
  let results = response.data.results;
  results.forEach(function (result) {
    console.log(result.question);
    questions = result.question;
    let questionDisplay = document.querySelector("#question");
    questionDisplay.innerHTML = result.question;
    let answerDisplay = document.querySelector("#answer");
    answerDisplay.innerHTML = result.correct_answer;
  });
}
function revealAnswer() {
  alert("hi");
}
let answer = document.getElementById("answerButton");
answer.addEventListener("click", revealAnswer);
