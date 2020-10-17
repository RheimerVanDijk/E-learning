function popupController(data) {
  if (data.type === "success") {
    document.querySelector("#popup-success").classList.remove("d-none");
    document.querySelector("#popup-success").innerHTML = data.msg;

    setTimeout(() => {
      document.querySelector("#popup-success").classList.add("d-none");
    }, 5000);
  } else if (data.type === "danger") {
    document.querySelector("#popup-danger").classList.remove("d-none");
    document.querySelector("#popup-danger").innerHTML = data.msg;

    setTimeout(() => {
      document.querySelector("#popup-danger").classList.add("d-none");
    }, 5000);
  }
}
