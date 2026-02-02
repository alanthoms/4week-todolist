const taskList = document.querySelector(".task-list");
const inputTask = document.querySelector(".input-task");
const todoForm = document.querySelector(".todo-form");

let tasks = [];

todoForm.addEventListener("submit", onClickAddButton);

function onClickAddButton(event) {
  event.preventDefault();
  let newTask = inputTask.value;
  if (tasks.includes(newTask)) {
    alert("Enter unique task");
    return;
  }
  tasks.push(newTask);
  const recentTask = document.createElement("li");

  const recentTaskSpan = document.createElement("span");
  const editButton = document.createElement("button");
  editButton.innerHTML = "edit";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  recentTaskSpan.innerHTML = newTask;

  let editInput = document.createElement("input");

  let saveButton = document.createElement("button");

  editInput.value = recentTaskSpan.innerHTML;
  saveButton.innerHTML = "Save";

  deleteButton.addEventListener("click", () => {
    recentTask.remove();
    tasks = tasks.filter((task) => task !== newTask);
  });

  editButton.addEventListener("click", () => {
    recentTaskSpan.style.display = "none";
    editButton.style.display = "none";
    editInput.value = newTask;
    recentTask.append(editInput, saveButton);
  });

  saveButton.addEventListener("click", () => {
    if (tasks.indexOf(recentTaskSpan.innerHTML) !== -1) {
      tasks[tasks.indexOf(recentTaskSpan.innerHTML)] = editInput.value;
    }

    recentTaskSpan.innerHTML = editInput.value;
    newTask = editInput.value;
    recentTaskSpan.style.display = "inline";
    editButton.style.display = "inline";

    editInput.remove();
    saveButton.remove();
  });
  recentTask.append(recentTaskSpan, editButton, deleteButton);
  taskList.appendChild(recentTask);
}
