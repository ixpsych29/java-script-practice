//<----------#practicing HTML attributes---------->
// let a = first.getAttribute("class");
// console.log(a);
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttribute("div"));
// // first.setAttribute("hidden", "false");
// first.setAttribute("class", "nav nav-bar");
// console.log(first.dataset);

//<----------#Insertion Methods of HTMl---------->

//<----------#ClassName && ClassList---------->

//<----------#Set Timeout---------->    it means run the function after the given time once.
// setTimeout(function () {
//   document.write("Currently using TimeOut");
// }, 5000);
//5000 here is the miliseconds time

//<----------#Set Interval----------> it means run again n again after every time given.
// const add = (a, b) => {
//   alert("add is running");
//   console.log(a + b);
//   return a + b;
// };
// setInterval(add, 5000, 5, 8);

//<----------#Synchronous Programming---------->
//means ek ek kr k chlta hai line by line execution hoti hai code ki
// let a = prompt("Enter your name");
// let b = prompt("Enter your age");
// let c = prompt("what is your favorite color");
// console.log(a + " is " + b + " years old and his favorite color is " + c);

//<----------#Asynchronouse Programming---------->
//means ek sath sath chlta hai code
// console.log("Start");
// setTimeout(() => {
//   console.log("Async function executes, after set time: 1 second");
// }, 1000);
// console.log("End");
// the output will be: Start, End, Async function executes, after set time: 1 second;
//this is because the setTimeout function is asynchronous function and it will execute after the given time.
//but the console.log("End") is synchronous function and it will execute first.

// <---------------------->
//<----------#Callback Functions---------->
//making a function
const helloBuddy = () => {
  console.log("Hello");
};
const goodBye = () => {
  console.log("GoodBye");
};

const loadScript = (src, callback) => {
  var script = document.createElement("script");
  script.src = src;
  //checking if the script is loaded or not.
  script.onload = () => {
    console.log("Script loaded");
    callback();
  };
  document.body.append(script);
};

//passing the function as a parameter in the function: "callback function"
loadScript("quiz.js", goodBye);
loadScript("quiz.js", helloBuddy);
