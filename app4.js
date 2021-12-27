let apiUrl = " https://opentdb.com/api.php?amount=150";

function showQuestion(response) {
  console.log(response);
  console.log(response.data.results[0].question);
  let question = document.querySelector("#question");
  question.innerHTML = response.data.results[0].question;
}

axios.get(apiUrl).then(showQuestion);

function showNextQuestion(response) {
  console.log(response.data.results);
}

function nextQuestion() {
  let apiUrl = " https://opentdb.com/api.php?amount=150";
  axios.get(apiUrl).then(showNextQuestion);
}

let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextQuestion);
