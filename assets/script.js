const taskList = document.querySelector(".task-list");
const inputTask = document.querySelector(".input-task");
const todoForm = document.querySelector(".todo-form");
let newTask = "";
const tasks = [];

todoForm.addEventListener("submit", onClickAddButton);
function onClickAddButton(event) {
  event.preventDefault();
  newTask = inputTask.value;
  if (tasks.includes(newTask)) {
    alert("Enter unique task");
  } else {
    tasks.push(newTask);
    const recentTask = document.createElement("li");

    recentTask.innerHTML = newTask;

    taskList.appendChild(recentTask);
  }
}
