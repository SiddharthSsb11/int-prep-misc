const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
let editMode = false;
let editItem = null;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let todoText = todoInput.value.trim();

  if (todoText !== "") {
    if (editMode) {
      editItem.firstChild.textContent = todoText;
      todoButton.innerText = "Add Todo";
      editMode = false;
      editItem = null;
      todoInput.value = "";
    } else {
      // add todo
      addTodoItem(todoText);
      todoInput.value = "";
    }
  }
});

todoList.addEventListener("click", function (event) {
  const target = event.target;
  // console.log(event);
  if (target.tagName === "BUTTON") {
    const todoItem = target.parentNode; // li
    if (target.innerText === "❌") {
      todoItem.remove(); // Delete Todo
    } else if (target.innerText === "✏️") {
      editMode = true;
      editItem = todoItem;
      todoButton.innerText = "Edit Todo";
      todoInput.value = todoItem.firstChild.textContent; //firstchild span
      todoInput.focus();
    }
  }
});

function addTodoItem(text) {
  const listItem = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  // console.log(text);

  listItem.innerHTML = `<span>${text}</span>`;
  editButton.innerText = "✏️";
  deleteButton.innerText = "❌";

  // Add styles dynamically
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.gap = "10px"; // Space between items

  const span = listItem.querySelector("span");
  span.style.marginRight = "20px"; // Pushes buttons to the right

  editButton.style.marginRight = "5px"; // Space between edit and delete button
  editButton.style.padding = "4px 8px";
  deleteButton.style.padding = "4px 8px";
  editButton.style.border = "none";

  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
}
