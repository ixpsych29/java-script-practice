//basic concepts of javascript

let st = 123;
let n = "Psych";
console.log(st + n);
console.log(typeof (st + n));

const obj1 = {
  name: "Psych",
  age: 20,
  isMarried: false,
};

console.log(obj1);
obj1["isAlive"] = true;
obj1["name"] = "Abdullah Ibn Rafique";
console.log(obj1);

const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
};

console.log(dict.yakka);
console.log(dict["appreciate"]);

let a = 10,
  b = 4;
console.log("a+ b = ", a + b);
console.log("a- b = ", a - b);
console.log("a/ b = ", a / b);
console.log("a** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("++a =", ++a);
console.log("a = ", a);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);

//conditional statements
// let age = prompt("Enter your age: ");
// if (age <= 20 && age >= 10) {
//   console.log("You are not eligible to vote");
// }

//<----------#Loops---------->
console.log("Printing table of 2");
for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + 2 * i);
}

let num = 10;
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("Sum of first " + num + " natural numbers = " + sum);

num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  if (i == 0) {
    return 1;
  }
  console.log((factorial *= i));
}

//<----------#for-in Loop---------->
const obj = {
  abdullah: 29,
  huri: 45,
  talha_tariq: 44,
};

for (let roll in obj) {
  console.log("roll no of " + roll + " : " + obj[roll]);
}

//<----------#for-of loop---------->
//this will iterate over a string, array, etc
for (let a of "abdullah") {
  console.log(a);
}
