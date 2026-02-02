const taskList = document.querySelector(".task-list");
const inputTask = document.querySelector(".input-task");
const addButton = document.querySelector(".add-button");
let newTask = "";
const tasks = [];
addButton.addEventListener("click", onClickAddButton);
function onClickAddButton() {
  newTask = inputTask.value;

  const recentTask = document.createElement("li");

  recentTask.innerHTML = newTask;

  taskList.appendChild(recentTask);
}
