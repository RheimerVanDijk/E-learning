function getFullDate() {
  let date = new Date();
  let newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return newDate;
}

function checkElement(element) {
  if (document.querySelector(element)) {
    return true;
  }
}
