function clock() {
  const date = new Date();
  const gethours = date.getHours();
  const getminutes = date.getMinutes();
  const getseconds = date.getSeconds();
  const time = document.querySelector(".time");
  const hours = String(gethours).padStart(2, "0");
  const minutes = String(getminutes).padStart(2, "0");
  const seconds = String(getseconds).padStart(2, "0");
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(clock, 1000);
