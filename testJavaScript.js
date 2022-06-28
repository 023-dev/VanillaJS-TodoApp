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
//testHref = "file:///C://Users/hs-ko/Desktop/asyncRepository/ChromeAppProject-master/MOMENTUM/index.html" 
//Conditional
const askAge = parseInt(prompt("How old are you?"));//Usally not use


if (isNaN(askAge) || askAge < 0) {
    console("Please wirte a Real Positive Number.");
} else if (askAge < 18) {
    console.log("You are too young.");
} else if (askAge >= 18 && askAge <= 50) {
    console.log("You can drink.");
} else {
    console.log("Recommend you not to drink.");
}

//Continue #3.2