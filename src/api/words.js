if (window.location.pathname == "/elearning/listOverview.php") {
  console.log(sessionStorage.listID);
  getAllWords(sessionStorage.listID);
}

if (checkElement("#startTestBtn")) {
  document.querySelector("#startTestBtn").addEventListener("click", () => {
    getTestData(sessionStorage.listID);
  });
}

function getUpdateWord(word, translation, id) {
  updateWord(word, translation, id);
}

function getDeleteWord(id) {
  deleteWord(id);
}

async function getAllWords(id) {
  let form = new FormData();

  form.append("getAllWords", "");
  form.append("listID", id);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      createChangeListTable(data);
    })
    .catch(error => {
      console.log(error);
    });
}

async function getTestData(id) {
  let form = new FormData();

  form.append("getAllWords", "");
  form.append("listID", id);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let jsonData = JSON.stringify(data);
      sessionStorage.listItems = jsonData;
      window.location.href = "tester.php";
    })
    .catch(error => {
      console.log(error);
    });
}

async function updateWord(word, translation, id) {
  let form = new FormData();

  form.append("updateWord", "");
  form.append("word", word.value);
  form.append("translation", translation.value);
  form.append("word_id", id);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      popupController(data);
      getAllWords(sessionStorage.listID);
    })
    .catch(error => {
      console.log(error);
    });
}

async function deleteWord(id) {
  let form = new FormData();

  form.append("deleteWord", "");
  form.append("word_id", id);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      // popupController(data);
      getAllWords(sessionStorage.listID);
    })
    .catch(error => {
      console.log(error);
    });
}
