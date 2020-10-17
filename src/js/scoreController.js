function makeScoreList(data) {
  let container = document.querySelector("#scoresContainer");
  container.innerHTML = null;

  data.data.forEach((element) => {
    // create elements
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let progessbarContainer = document.createElement("div");
    let progessbar = document.createElement("div");
    let correct = document.createElement("p");
    let score = document.createElement("p");
    let date = document.createElement("p");
    let smallDate = document.createElement("small");
    let again = document.createElement("button");

    // add classes to elements
    card.classList.add("card", "mb-3");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    progessbarContainer.classList.add("progress", "mb-3");
    progessbar.classList.add("progress-bar");
    correct.classList.add("card-text");
    score.classList.add("card-text");
    date.classList.add("card-text");
    smallDate.classList.add("text-muted");
    again.classList.add("btn", "btn-success");

    // add style to elements
    card.style.width = "18rem";
    progessbar.style.width = `${element.score}%`;

    // add text to elements
    getListName(element.list_id, cardTitle);
    cardTitle.innerHTML = "test";
    progessbar.innerHTML = `${element.score}%`;
    correct.innerHTML = `Je had er ${element.correct} van de ${element.total} goed?`;
    score.innerHTML = `Dat is een score van ${element.score}%`;
    smallDate.innerHTML = element.date;
    again.innerHTML = "Opnieuw testen?";

    // add event to elements
    again.onclick = () => {
      toListOverview(element.list_id);
    };

    // append progress bar to container
    progessbarContainer.appendChild(progessbar);

    // apped small text to text
    date.appendChild(smallDate);

    // append element to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(progessbarContainer);
    cardBody.appendChild(correct);
    cardBody.appendChild(score);
    cardBody.appendChild(date);
    cardBody.appendChild(again);

    // append to cardbody to card
    card.appendChild(cardBody);

    // append to dom
    container.appendChild(card);
  });
}

async function getListName(listID, element) {
  const form = new FormData();

  form.append("getListName", "");
  form.append("listID", listID);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      element.innerHTML = data.title;
    })
    .catch((error) => {
      console.log(error);
    });
}
