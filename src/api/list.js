if (checkElement("#createList")) {
  document.querySelector("#createList").addEventListener("click", () => {
    callCreateList(listName, wordList);
  });
}

if (window.location.pathname == "/elearning/lists.php") {
  getUserLists();
}

if (checkElement("#deleteTestBtn")) {
  document.querySelector("#deleteTestBtn").addEventListener("click", () => {
    callDeleteList(sessionStorage.listID);
  });
}

async function callCreateList(listName, wordList) {
  const form = new FormData();

  form.append("createList", "");
  form.append("listName", listName);
  form.append("wordList", JSON.stringify(wordList));
  form.append("date", getFullDate());

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      popupController(data);
      closeListsModals();
      getUserLists();
    })
    .catch(error => {
      console.log(error);
    });
}

async function getUserLists() {
  const form = new FormData();

  form.append("getUserLists", "");

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      createListTabel(data);
    })
    .catch(error => {
      console.log(error);
    });
}

async function callDeleteList(id) {
  const form = new FormData();

  form.append("deleteList", "");
  form.append("listID", id);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form
  })
    .then(response => {
      return response.json();
    })
    .then(() => {
      window.location.href = "lists.php";
    })
    .catch(error => {
      console.log(error);
    });
}
