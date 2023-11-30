const removeItem = document.getElementsByClassName("remove");
const markComplete = document.getElementsByClassName("complete");
const form = document.querySelector("#addTodoItem");
const input = document.querySelector("#todoItem");
const newItem = document.querySelector("#list");
// local storage code
const todoForm = document.getElementById("addTodoItem");
const list = document.getElementById("list");

for (let btn of markComplete) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
    });
};

for (let btn of removeItem) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    });
};

newItem.addEventListener("click", function(event) {
    if (event.target.className === "complete") {
        event.target.parentElement.style.textDecoration = "line-through";
    }
    else if (event.target.className === "remove") {
        event.target.parentElement.remove();
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodoItem = document.createElement("li");
    const addButtonOne = document.createElement("button");
    const addButtonTwo = document.createElement("button");
    addButtonOne.classList.add("complete");
    addButtonTwo.classList.add("remove");
    newTodoItem.innerText = input.value;
    addButtonOne.innerText = "Mark as Complete";
    addButtonTwo.innerText = "Remove";
    newTodoItem.appendChild(addButtonOne);
    newTodoItem.appendChild(addButtonTwo);
    input.value = "";
    list.appendChild(newTodoItem);
});
// retrieve from local storage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    // let addButtonOne = document.createElement("button");
    // let addButtonTwo = document.createElement("button");
    // addButtonOne.classList.add("complete");
    // addButtonTwo.classList.add("remove");
    // addButtonOne.innerText = "Mark as Complete";
    // addButtonTwo.innerText = "Remove";
    // newTodo.appendChild(addButtonOne);
    // newTodo.appendChild(addButtonTwo);
    newTodo.innerText = savedTodos[i].todoItem;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    list.appendChild(newTodo);
}
    
todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      let newTodo = document.createElement("li");
      // let addButtonOne = document.createElement("button");
      // let addButtonTwo = document.createElement("button");
      // addButtonOne.classList.add("complete");
      // addButtonTwo.classList.add("remove");
      // addButtonOne.innerText = "Mark as Complete";
      // addButtonTwo.innerText = "Remove";
      // newTodo.appendChild(addButtonOne);
      // newTodo.appendChild(addButtonTwo);
      let taskValue = document.getElementById("todoItem").value;
      newTodo.innerText = taskValue;
      newTodo.isCompleted = false;
      todoForm.reset();
      list.appendChild(newTodo);
    
      // save to localStorage
      savedTodos.push({ todoItem: newTodo.innerText, isCompleted: false });
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    });
    
list.addEventListener("click", function(event) {
      let clickedListItem = event.target;
    
      if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
      }
    })