// events
if (checkElement("#loginBtn")) {
  document.querySelector("#loginBtn").addEventListener("click", () => {
    let username = document.querySelector("#loginUsername").value;
    username = username.toLowerCase();

    let password = document.querySelector("#loginPassword").value;

    login(username, password);
  });
}

// fetch api

async function login(username, password) {
  const form = new FormData();

  form.append("login", "");
  form.append("username", username);
  form.append("password", password);

  const post = await fetch("src/importer.php", {
    method: "POST",
    body: form,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.location.href = "lists.php";
      popupController(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
