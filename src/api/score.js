if (checkElement("#sendScore")) {
  document.querySelector("#sendScore").addEventListener("click", () => {
    let score = step * correct;
    let listID = sessionStorage.listID;
    let total = questionsNUM;
    let correctNum = correct;
    setScore(score, listID, total, correctNum);
  });
}

if (window.location.pathname == "/elearning/scores.php") {
  getScores();
}

async function setScore(score, listID, total, correct) {
  let form = new FormData();

  form.append("setScore", "");
  form.append("score", score);
  form.append("total", total);
  form.append("correct", correct);
  form.append("listID", listID);
  form.append("date", getFullDate());

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.location.href = "lists.php";
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getScores() {
  let form = new FormData();

  form.append("getScores", "");

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      makeScoreList(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
