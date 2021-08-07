const loginForm = document.querySelector(".loginForm");
const loginForm__input = document.querySelector(".loginForm__input");
const greeting = document.querySelector(".greeting");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm__input.value;
  localStorage.setItem("name", username);
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

const savedName = localStorage.getItem("name");
if (savedName === null) {
  loginForm.classList.remove("hidden");
} else {
  greeting.classList.remove("hidden");
  greeting.innerHTML = `Hello ${savedName}`;
}
