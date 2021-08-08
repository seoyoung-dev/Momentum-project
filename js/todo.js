const todo__form = document.querySelector("#todo__form");
const todo__input = document.querySelector("#todo__input");

let todos = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const ul = document.querySelector(".todo__ul");
  const newLi = document.createElement("li");
  newLi.id = newTodo.id;
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  newSpan.innerText = newTodo.text;
  newButton.innerText = "❎";
  newButton.addEventListener("click", deleteTodo);
  ul.appendChild(newLi);
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
}

todo__form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = todo__input.value;
  todo__input.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
});

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
