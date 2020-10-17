let listName = null;
let wordList = [];

if (checkElement("#makeList")) {
  document.querySelector("#makeList").addEventListener("click", () => {
    listName = document.querySelector("#listName").value;
    $("#listModal").modal("hide");
    $("#wordModal").modal("show");
  });
}

if (checkElement("#addWord")) {
  document.querySelector("#addWord").addEventListener("click", () => {
    let word = document.querySelector("#createWord").value;
    let translation = document.querySelector("#createTranslation").value;

    wordList.push({
      word: word,
      translation: translation,
    });
    document.querySelector("#createWord").value = "";
    document.querySelector("#createTranslation").value = "";

    createList();
  });
}

function createList() {
  document.querySelector("#createWordListTable").innerHTML = null;
  wordList.forEach((word, index) => {
    // element creation
    let trElement = document.createElement("tr");
    let indicatorElement = document.createElement("th");
    let wordElement = document.createElement("td");
    let translationElement = document.createElement("td");
    let actionsElement = document.createElement("td");

    // add classes to element
    trElement.classList.add("d-flex");
    indicatorElement.classList.add("col");
    wordElement.classList.add("col-5");
    translationElement.classList.add("col-5");
    actionsElement.classList.add("col");

    // add text to element
    indicatorElement.innerHTML = `${index + 1}`;
    wordElement.innerHTML = `${word.word}`;
    translationElement.innerHTML = `${word.translation}`;
    actionsElement.innerHTML = `verwijder`;

    // add function to element
    actionsElement.onclick = () => {
      deleteListItem(index);
    };

    // append to table row
    trElement.appendChild(indicatorElement);
    trElement.appendChild(wordElement);
    trElement.appendChild(translationElement);
    trElement.appendChild(actionsElement);

    // append to table
    document.querySelector("#createWordListTable").appendChild(trElement);
  });
}

function deleteListItem(id) {
  wordList.splice(id, 1);
  createList();
}

function closeListsModals() {
  $("#wordModal").modal("hide");
  wordList = [];
  listName = null;
  document.querySelector("#listName").value = "";
  document.querySelector("#createWordListTable").innerHTML = null;
}
