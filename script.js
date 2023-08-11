document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener('click', function () { // Corrected addEventListener spelling
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      li.textContent = todoText;
      todoList.appendChild(li);
      newTodoInput.value = "";
    }
  });

  newTodoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodoBtn.click();
    }
  });
});
