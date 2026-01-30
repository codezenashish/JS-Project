const todoInput = document.querySelector("#todo-input");
const addTodoButton = document.querySelector("#add-button");
const todoListContainer = document.querySelector("#todo-list");

let isEditingTodo = false;
let todoBeingEdited = null;
let allTodos = JSON.parse(localStorage.getItem("todos")) || [];
addTodoButton.addEventListener("click", handelTodoAction);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handelTodoAction();
});

function handelTodoAction() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  if (isEditingTodo) {
    todoBeingEdited.textContent = todoText;
    resetEditState();
    return;
  }

  const todoItem = createTodoItem(todoText);
  todoListContainer.appendChild(todoItem);
  todoInput.value = "";
}

function createTodoItem(todoText) {
  const listItem = document.createElement("li");
  listItem.className =
    "flex flex-row justify-between items-center bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-group";

  const todoTextElement = document.createElement("span");
  todoTextElement.className = "text-gray-300";
  todoTextElement.textContent = todoText;

  const actionButtonsContainer = document.createElement("div");
  actionButtonsContainer.className = "flex items-center gap-4";

  const editTodoButton = createEditButton(todoTextElement);
  const deleteTodoButton = createDeleteButton(listItem);

  actionButtonsContainer.append(editTodoButton, deleteTodoButton);
  listItem.append(todoTextElement, actionButtonsContainer);

  return listItem;
}

function createEditButton(todoTextElement) {
  const button = document.createElement("button");
  button.className =
    "text-gray-400 hover:text-white transition-colors text-sm font-medium";
  button.textContent = "edit";

  button.addEventListener("click", () => {
    todoInput.value = todoTextElement.textContent;
    addTodoButton.textContent = "update";
    isEditingTodo = true;
    todoBeingEdited = todoTextElement;
    todoInput.focus();
  });

  return button;
}

function createDeleteButton(todoItem) {
  const button = document.createElement("button");
  button.className =
    "text-red-400 hover:text-red-300 transition-colors text-sm font-medium";
  button.textContent = "delete";

  button.addEventListener("click", () => {
    todoListContainer.removeChild(todoItem);
  });

  return button;
}

function resetEditState() {
  isEditingTodo = false;
  todoBeingEdited = null;
  addTodoButton.textContent = "Add";
  todoInput.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
}
