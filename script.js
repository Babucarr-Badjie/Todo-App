const todoForm = document.querySelector("#todo-form");
const confirmCloseDialog = document.querySelector("#confirm-close-dialog");
const addTask = document.querySelector("#add-task-button");
const closeTask = document.querySelector("#close-task-button");
const addOrUpdateTask = document.querySelector("#add-or-update-task-button");
const cancelButton = document.querySelector("#cancel-button");
const discardButton = document.querySelector("#discard-button");
const tasks = document.querySelector("#tasks-container");
const title = document.querySelector("#title-input");
const date = document.querySelector("#date-input");
const description = document.querySelector("#description-input");

const todoTaskData = [];
let todoCurrentTask = {};

addTask.addEventListener("click", () => {
  todoForm.classList.toggle("hidden");
});

closeTask.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelButton.addEventListener("click", () => {
  confirmCloseDialog.closest();
});

discardButton.addEventListener("click", () => {
  confirmCloseDialog.close();
  todoForm.classList.toggle("hidden");
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const arrayDataIndex = todoTaskData.findIndex(
    (item) => item.id === todoCurrentTask.id
  );

  const todoTaskObject = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (arrayDataIndex === -1) {
    todoTaskData.unshift(todoTaskObject);
  }

  todoTaskData.forEach(({ id, title, date, description }) => {
    tasks.innerHTML += `
    <div class = "task" id="${id}"></div>
    <p><strong>Title:</strong>${title}</p>      
    <p><strong>Date:</strong>${date}</p>      
    <p><strong>Description:</strong>${description}</p> 
    <button type="button" class="button">Edit</button>
    <button type="button" class="button">Delete</button>     
     `;
  });
});
