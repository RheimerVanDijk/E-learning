function createListTabel(tabelData) {
  document.querySelector("#listTable").innerHTML = null;
  let table = document.querySelector("#listTable");

  tabelData.data.forEach((element) => {
    // element creation
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");

    // add classes to element
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "cursorP"
    );

    i.classList.add("fas", "fa-arrow-right");
    span.classList.add("badge", "badge-primary", "badge-pill");

    // add text to element
    li.innerHTML = element.name_list;

    // add events to element
    li.onclick = () => {
      toListOverview(element.id, element.name_list);
    };

    // append span
    span.appendChild(i);

    // append to li
    li.appendChild(span);

    //append to table
    table.appendChild(li);
  });
}

function toListOverview(id, name) {
  sessionStorage.listID = id;
  sessionStorage.listName = name;
  window.location.href = `listOverview.php`;
}

function createChangeListTable(tabelData) {
  document.querySelector(".changeWordsList").innerHTML = null;

  let table = document.querySelector(".changeWordsList");

  document.querySelector(
    "#listoverviewTitle"
  ).innerHTML = `${sessionStorage.listName}:`;

  tabelData.data.forEach((element) => {
    // element creation
    let li = document.createElement("li");
    let input_group = document.createElement("div");
    let word = document.createElement("input");
    let translation = document.createElement("input");
    let button_group = document.createElement("div");
    let saveBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    // add classes to element
    li.classList.add("list-group-item");
    input_group.classList.add("input-group");
    word.classList.add("form-control");
    translation.classList.add("form-control");
    button_group.classList.add("input-group-append");
    saveBtn.classList.add("btn", "btn-outline-primary");
    deleteBtn.classList.add("btn", "btn-outline-danger");

    // add text to elements
    word.value = element.word;
    translation.value = element.translation;
    saveBtn.innerHTML = "Opslaan";
    deleteBtn.innerHTML = "Verwijderen";

    // add events to element
    saveBtn.onclick = () => {
      getUpdateWord(word, translation, element.id);
    };

    deleteBtn.onclick = () => {
      getDeleteWord(element.id);
    };

    // append element to group
    button_group.appendChild(saveBtn);
    button_group.appendChild(deleteBtn);

    // append elements to input group
    input_group.appendChild(word);
    input_group.appendChild(translation);
    input_group.appendChild(button_group);

    // append to list
    li.appendChild(input_group);

    // append to table
    table.appendChild(li);
  });
}
