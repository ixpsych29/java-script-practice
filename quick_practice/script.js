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
