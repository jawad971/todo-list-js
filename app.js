// document.getElementById("add-btn").addEventListener("click", function () {
//   const input = document.getElementById("todo-input");
//   const todoText = input.value.trim();

//   if (todoText !== "") {
//     const todoItem = document.createElement("li");
 //   todoItem.innerHTML = `${todoText} <button class="delete-btn">Delete</button>`;

//     // Add the delete functionality
//     todoItem
//       .querySelector(".delete-btn")
//       .addEventListener("click", function () {
//         todoItem.remove();
//       });

//     // Add the new task to the list
//     document.getElementById("todo-list").appendChild(todoItem);

//     // Clear input field after adding
//     input.value = "";
//   }
// });
const inputBox = document.querySelector('#inputBox')
const addBtn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todoList')


const addTodo = () =>{
  // alert("button is click")
  const inputText = inputBox.value.trim()
  if(inputText.length <= 0){
    alert("Enter text in to-do")
    return false
  }

  const li = document.createElement('li')
  const p = document.createElement('p')
  p.innerText = inputText
  li.appendChild(p)

  todoList.appendChild(li)
  // to remove previus text
  inputBox.value = ""

  // delete btn
  const deleteBtn = Document.createElement('button')
  deleteBtn.innerText = 'remove'
  li.appendChild(deleteBtn)
  
}

addBtn.addEventListener('click',addTodo);

