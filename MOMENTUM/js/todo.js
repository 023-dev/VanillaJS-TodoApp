const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("#todo-form input")

function paintToDo(newToDo){
    const liCreator = document.createElement("li");
    const spanCreator = document.createElement("span");
    liCreator.appendChild(spanCreator)
    spanCreator.innerText = newToDo
    toDoList.appendChild(liCreator)
    // liCreator.innerText(BindNewToDo)
    console.log(toDoList)
    
}

function handleToDoSubmit(event){
    event.preventDefault()   
    const newToDo = toDoInput.value
    toDoInput.value = ""
    paintToDo(newToDo)
}

toDoForm.addEventListener("submit", handleToDoSubmit)
