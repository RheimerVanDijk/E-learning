let questionsNUM = null;
let questionState = 0;
let step = null;
let stepPer = 0;
let correct = 0;
let incorrect = 0;
let questions = [];

if (window.location.pathname == "/elearning/tester.php") {
  let unJSON = JSON.parse(sessionStorage.listItems);
  questionsNUM = unJSON.data.length;
  questions = unJSON.data;
  step = 100 / questionsNUM;
  fillIn();
}

if (checkElement("#nextQuestion")) {
  document.querySelector("#nextQuestion").addEventListener("click", () => {
    checkWord();
  });
}

if (checkElement("#givinAwnser")) {
  document.querySelector("#givinAwnser").addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      checkWord();
      return true;
    }
  });
}

function fillIn() {
  if (questionState < questionsNUM) {
    let word = questions[questionState];
    document.querySelector("#wordToTranslate").innerHTML = word.word;
  } else {
    end();
  }
}

function checkWord() {
  let awnser = document.querySelector("#givinAwnser").value;
  let word = questions[questionState].translation;

  if (word == awnser) {
    correct++;
    questionState++;
    progress();
    fillIn();
  } else {
    incorrect++;
    questionState++;
    progress();
    fillIn();
  }

  document.querySelector("#givinAwnser").value = null;
}

function progress() {
  let bar = document.querySelector("#testerProgressBar");
  stepPer += step;

  bar.style.width = `${stepPer}%`;
  bar.innerHTML = `${questionState}/${questionsNUM}`;
}

function end() {
  document.querySelector(
    "#finalScoreModalText"
  ).innerHTML = `Je hebt er ${correct} van de ${questionsNUM} goed!`;
  document.querySelector("#finalScoreModalNum").innerHTML = `Jouw score is ${(
    step * correct
  ).toFixed(1)}%`;

  $("#finalScoreModal").modal({ backdrop: "static", keyboard: false });
}
