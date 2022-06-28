//testObject
// const player = {
//     name : "kong",
//     tier : 1,
//     point : 1234,
//     weight : "70kg",
//     height : "170cm"
// };

// console.log(player)
// player.tier += 1
// console.log(player)

// //testFunction
// function sayHello(playerName){
//     console.log("Hello my name is " + playerName)
// }

// console.log(sayHello("kong"))

// const player = {
//     name : "kong",
//     age : 22,

// };

// console.log(player.name, console);
// player.name = 'heeesang';


//calculator
// const calculator = {
//     add : function(a,b){
//         console.log(a+b);
//     },
//     minus : function(a,b){
//         console.log(a-b);
//     },
//     devide : function(a,b){
//         console.log(a/b);
//     },
//     multi : function(a,b){
//         console.log(a*b);
//     },
//     power : function(a,b){
//         console.log(a**b);
//     },
// }
// calculator.add(5,2);
// calculator.minus(5,2);
// calculator.devide(5,2);
// calculator.multi(5,2);
// calculator.power(5,2);


//convertkrAge
// const  age = 22;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

//Make a Calculator Using By Objsct & Function
// const calculator = {
//     plus : function(a, b) {
//         return a + b
//     },
//     minus : function(a, b) {
//         return a - b
//     },
//     multiple : function(a, b) {
//         return a + b
//     },
//     divide : function(a, b) {
//         return a + b
//     },
//     power : function(a, b) {
//         return a + b
//     },
// }
// const plusResult = calculator.plus(5,2);
// const minusResult = calculator.minus(plusResult, 2);
// const multipleResult = calculator.multiple(minusResult, 2);
// const divideResult = calculator.divide(multipleResult, 2);
// const powerReuslt = calculator.power(divideResult, 2);
// alert(powerReuslt)

//Continue #2.13.. href = "https://nomadcoders.co/javascript-for-beginners/lectures/2886"

// const title = document.querySelector(".hello:first-child h1")


// function handleTitleClick() {
//     title.style.color = "blue"
//     //title.innerText = "Clicked"
// }

// function handlerTitleMouseEnter(){
//     title.style.color = "skyblue"
//     title.innerText = "MouseEntered"
// }

// function handlerTitleMouseLeave(){
//     title.style.color = "purple"
//     title.innerText = "MouseLeft"
// }

// function handlerTitleMouseOut(){
//     title.style.color = "blue"
//     title.innerText = "MouseOuted"
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handlerTitleMouseEnter)
// title.addEventListener("mouseleave", handlerTitleMouseLeave)
// title.addEventListener("mouseout", handlerTitleMouseOut)

// const title = document.querySelector(".hello:first-child h1")


// function handleTitleClick() {
//     title.style.color = "blue"
//     //title.innerText = "Clicked"
// }

// function handlerTitleMouseEnter(){
//     title.style.color = "skyblue"
//     title.innerText = "MouseEntered"
// }

// function handlerTitleMouseLeave(){
//     title.style.color = "purple"
//     title.innerText = "MouseLeft"
// }

// function handlerTitleMouseOut(){
//     title.style.color = "blue"
//     title.innerText = "MouseOuted"
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handlerTitleMouseEnter)
// title.addEventListener("mouseleave", handlerTitleMouseLeave)
// title.addEventListener("mouseout", handlerTitleMouseOut)


//window functions
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handlerWindowCopy(){
//     alert("Don't Copy!")
// }

// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handlerWindowCopy)

// const wifiStatus = document.querySelector(".wifiStatus")

// function handlerWifiOnline(){
//     wifiStatus.innerText = "Online"
// }

// function handleWifiOffline(){
//     wifiStatus.innerText = "Offline"
// }

// window.addEventListener("online", handlerWifiOnline)
// window.addEventListener("offline", handleWifiOffline)

// const h1 = document.querySelector("div.hello:first-child h1");

// function handlerTitleMouseEnter() {
//     const currentColor = h1.style.color
//     let newColor;
//     if(currentColor == "green"){
//         newColor = "tomato";
//     }else {
//         newColor = "green";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handlerTitleMouseEnter)