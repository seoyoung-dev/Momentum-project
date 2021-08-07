function clock() {
  const date = new Date();
  const time = document.querySelector(".time");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}
clock();
setInterval(clock, 1000);
