const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("#todo-form input")
const TODOS_KEY = "todos"
let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    console.log(event)
    const li = (event.target.parentElement)
    //toDos.remove(id : li.id)
    toDos = toDos.filter(item => item.id != parseInt(li.id) )
    //localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    saveToDos()
    li.remove()
    //localStorage.removeItem(li.innerText)
}

function paintToDo(newToDoObj){
    const liCreator = document.createElement("li");
    const spanCreator = document.createElement("span");
    const buttonCreator = document.createElement("button")
    liCreator.appendChild(buttonCreator)
    liCreator.appendChild(spanCreator)
    spanCreator.innerText = newToDoObj.text
    buttonCreator.innerText = "❌"
    buttonCreator.style.border = "0"
    buttonCreator.style.padding = "0"
    buttonCreator.style.display = "inline"
    buttonCreator.style.height = "0"
    buttonCreator.style.paddingRight = "10px"
    buttonCreator.addEventListener("click",deleteToDo)
    liCreator.id = newToDoObj.id
    liCreator.style.listStyle = "none"
    liCreator.style.paddingBottom = "5px"
    toDoList.appendChild(liCreator)
    // liCreator.innerText(BindNewToDo)
    //list-style-type: none;
}

function handleToDoSubmit(event){
    event.preventDefault()   
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

//instead of "(item) => toDos.push(item))"
// function sayHello(item){
//     toDos.push(item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos != null){
    const parsedToDo = JSON.parse(savedToDos);
    parsedToDo.forEach((item) => toDos.push(item));
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo)//parsedToDo.forEach((item) => paintToDo(item))//instead of "parsedToDo.forEach(toDos"

}

function filterToDos (item, falseItem){
    //instead of that a under code
    // toDos.pop(`id:${li.id}`) 
    // localStorage.removeItem("todos")
    // localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))

    return item.id != falseItem
}
