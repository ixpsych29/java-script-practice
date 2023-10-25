/* *********** Variables ************ */
//global scope
// let a = 10;
// {
//   console.log(a); //it will accessible here due to global scope.
// }
// //local scope
// {
//   let b = 20;
//   console.log(b); //it will accessible here due to local scope.
// }
// // console.log(b); //it will not accessible here due to local scope and give error

// //functional scope or block scope
// function accessScope() {
//   let c = 30;
//   console.log(c); //it will accessible here due to functional scope.
// }
// accessScope();
// console.log(c); //it will not accessible here due to functional scope and give error.

/* *********** Functions & Arrow Functions ************ */
//instead of writing repeating code everywhere we use functions and call them.
//simple function
// function add(a, b) {
//   return a + b;
// }

// //Arrow function
// const power = (a, b) => a ** b;

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// console.log("adding two numbers: " + add(a, b));
// console.log("calculating power: " + power(a, b));

/* *********** Object & Classes ************ */
//class is the blueprint or template while the object is the real time implementation of that class.
// class employee {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   run() {
//     console.log(`${this.name} is still running at the age of ${this.age}`);
//   }
// }

// //creating object to access the class methods and properties.
// let emp1 = new employee("Abdullah Ibn Rafique", 22);
// //calling method
// emp1.run();

/* *********** Objects ************ */
// const person = {
//   "person name": "psych",
//   role: "Junior JS Developer",
//   experience: "Fresher",
//   show: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(
//         `My name is ${this.name} and I am a ${this.role} at the age of ${this.age} with ${this.experience} experience.`
//       );
//     });
//   },
//   age: 22,
// };

// person.show();

// setTimeout(() => {
//   console.log("Salman Bhai");
// }, 0);
// console.log("after setTimeout");

// let a = 10;
// let b = a; //10
// a = 20;
// console.log(a, b);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
// arr1.push(6);
// console.log(arr1, arr2);

// let pName = "Abdullah Ibn Rafique";
// pName[0] = "b";
// console.log(pName);

// var a = 10;

// function printVal() {
//   var a = 20;
//   // console.log(a);
// }
// printVal();
// console.log(a);

// let arr = ["Abdullah", 22, "JS Developer"];
// let [name, ...rest] = arr;
// console.log(name, rest);

/* *********** ASYNC AWAIT ************ */
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise has been fulfilled");
//   }, 0);
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();
// console.log("after calling async function");

//using fetch
const API_URL = "https://api.github.com/users/ixpsych291";
async function handlePromise() {
  try {
    const data = await fetch(API_URL); //fetch will give us a promise which is response
    const jsonVal = await data.json(); //json() will give us a promise which is data
    console.log(jsonVal);
  } catch (err) {
    console.log(err);
  }
}
//how to handle error in async await: using try catch block

handlePromise();
//another way to handle errors
// handlePromise().catch((err) => console.log(err));
