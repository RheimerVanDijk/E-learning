if (checkElement("#switchToLogin")) {
  document.querySelector("#switchToLogin").addEventListener("click", () => {
    document.querySelector(".login-form").classList.remove("d-none");
    document.querySelector(".register-form").classList.add("d-none");
  });
}

if (checkElement("#switchToReg")) {
  document.querySelector("#switchToReg").addEventListener("click", () => {
    document.querySelector(".login-form").classList.add("d-none");
    document.querySelector(".register-form").classList.remove("d-none");
  });
}
