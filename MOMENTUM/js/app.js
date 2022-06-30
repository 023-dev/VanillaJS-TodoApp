// const h1 = document.querySelector("div.hello:first-child h1");

// function handlerTitleMouseEnter() {
//     const clickClass = "clicked"
    // if(h1.classList.contains(clickClass)){
    //     h1.classList.remove(clickClass)
    // } else {
    //     h1.classList.add(clickClass)
    // }
//     h1.classList.toggle("clicked")
// }

//h1.addEventListener("click", handlerTitleMouseEnter)

const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const link = document.querySelector("a")
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreeting(){
    greeting.innerText = `Hello ${savedUserName}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


function onLoginSubmit(event) {
    const userName = loginInput.value
    event.preventDefault()
    console.log(userName)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    console.dir(greeting)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    //greeting.innerText = "Hello, " + userName
    paintGreeting()
}


// function handlerLink(event){
//     event.preventDefault()
//     console.dir(event)
// }
// link.addEventListener("click", handlerLink)

if (savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)    
} else {
    paintGreeting()
}
