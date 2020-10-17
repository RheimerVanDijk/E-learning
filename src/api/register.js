// events

if (checkElement("#register")) {
  document.querySelector("#register").addEventListener("click", () => {
    let username = document.querySelector("#registerEmail").value;
    username = username.toLowerCase();
    const password = document.querySelector("#registerPassword").value;
    const verifyPassword = document.querySelector("#VerifyPassword").value;

    if (password === verifyPassword) {
      register(username, password);
    }
  });
}

// fetch api

async function register(username, password) {
  const form = new FormData();
  let newDate = getFullDate();

  form.append("register", "");
  form.append("username", username);
  form.append("password", password);
  form.append("date", newDate);

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
    })
    .catch(error => {
      console.log(error);
    });
}
