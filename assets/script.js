const taskList = document.querySelector(".task-list");
const inputTask = document.querySelector(".input-task");
const todoForm = document.querySelector(".todo-form");
let newTask = "";
let tasks = [];

todoForm.addEventListener("submit", onClickAddButton);

function onClickAddButton(event) {
  event.preventDefault();
  newTask = inputTask.value;
  if (tasks.includes(newTask)) {
    alert("Enter unique task");
    return;
  }
  tasks.push(newTask);
  const recentTask = document.createElement("li");
  const editButton = document.createElement("button");
  editButton.innerHTML = "edit";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  recentTask.innerHTML = newTask;

  deleteButton.addEventListener("click", () => {
    recentTask.remove();
    tasks = tasks.filter((task) => task !== newTask);
  });

  recentTask.append(editButton, deleteButton);
  taskList.appendChild(recentTask);
}
