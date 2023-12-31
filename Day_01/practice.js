// //basic concepts of javascript

// let st = 123;
// let n = "Psych";
// console.log(st + n);
// console.log(typeof (st + n));

// const obj1 = {
//   name: "Psych",
//   age: 20,
//   isMarried: false,
// };

// console.log(obj1);
// obj1["isAlive"] = true;
// obj1["name"] = "Abdullah Ibn Rafique";
// console.log(obj1);

// const dict = {
//   appreciate: "recognize the full worth of.",
//   ataraxia: "a state of freedom from emotional disturbance and anxiety",
//   yakka: "work, especially hard work.",
// };

// console.log(dict.yakka);
// console.log(dict["appreciate"]);

// let a = 10,
//   b = 4;
// console.log("a+ b = ", a + b);
// console.log("a- b = ", a - b);
// console.log("a/ b = ", a / b);
// console.log("a** b = ", a ** b);
// console.log("a % b = ", a % b);
// console.log("++a =", ++a);
// console.log("a = ", a);
// console.log("a++ = ", a++);
// console.log("a = ", a);
// console.log("--a = ", --a);
// console.log("a-- = ", a--);
// console.log("a = ", a);
// console.log("a-- = ", a--);
// console.log("a = ", a);

// //conditional statements
// // let age = prompt("Enter your age: ");
// // if (age <= 20 && age >= 10) {
// //   console.log("You are not eligible to vote");
// // }

// //<----------#Loops---------->
// console.log("Printing table of 2");
// for (let i = 1; i <= 10; i++) {
//   console.log("2 x " + i + " = " + 2 * i);
// }

// let num = 10;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log("Sum of first " + num + " natural numbers = " + sum);

// num = 5;
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//   if (i == 0) {
//     return 1;
//   }
//   console.log((factorial *= i));
// }

// //<----------#for-in Loop---------->
// const obj = {
//   abdullah: 29,
//   huri: 45,
//   talha_tariq: 44,
// };

// for (let roll in obj) {
//   console.log("roll no of " + roll + " : " + obj[roll]);
// }

// //<----------#for-of loop---------->
// //this will iterate over a string, array, etc
// for (let a of "abdullah") {
//   console.log(a);
// }

// //<----------#Functions in JS---------->
// //lets make a function
// const avg2num = (n1, n2) => {
//   return (n1 + n2) / 2;
// };

// let num1 = 10,
//   num2 = 20;
// let avg = avg2num(num1, num2);
// console.log("average of two nums is : " + avg);

// //<----------#practice---------->
// // Q:1 print marks of object
// console.log("\n");
// const marks = {
//   abdullah: 47,
//   huri: 45,
//   talha_tariq: 44,
//   munam: 49,
// };
// for (let mark in marks) {
//   console.log("marks of " + mark + " : " + marks[mark]);
// }

// console.log("\n");
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log(
//     "Marks of " + Object.keys(marks)[i] + " : " + marks[Object.keys(marks)[i]]
//   );
// }

// // Problem No 3
// // let cn = 43;
// // let i;
// // while (i != cn) {
// //   i = prompt("Enter a number")
// //   console.log("Please Try Again")
// // }
// // console.log("You have entered a correct number")

// //problem no 4
// //fucntion to find mean of 5 numbers
// const mean5num = (n1, n2, n3, n4, n5) => {
//   return (n1 + n2 + n3 + n4 + n5) / 5;
// };

// let n1 = 10,
//   n2 = 20,
//   n3 = 30,
//   n4 = 40,
//   n5 = 50;
// let mean = mean5num(n1, n2, n3, n4, n5);
// console.log("\nMean of five numbers is : " + mean);

// //<----------#Strings---------->
// let me = "Abdullah Ibn Rafique";
// for (let ch of me) {
//   console.log(ch + " ");
// }
// console.log("length of my name is: " + me.length);

// //template literals
// console.log("\n Template Literals");
// let b1 = "Abdullah";
// let b2 = "Huraira";
// // ⬇️⬇️⬇️ this is called "string interpolation" ⬇️⬇️⬇️
// let friends = `${b1} is a friend of ${b2}`;
// console.log(friends);

// console.log("\n Escape Sequence Characters");
// let fruit = "Bana'na";
// console.log(fruit);

//<----------#string properties/methods---------->
//string is immutable
console.log("String Props/Methods");
let nameOfPerson = "Muhammad Abdullah Ibn Rafique";
console.log("length of String" + nameOfPerson.length);

console.log("UpperCase: \t" + nameOfPerson.toUpperCase());
console.log("LowerCase: \t" + nameOfPerson.toLowerCase());
//Syntax: slice(starting index, ending index);
console.log("Slice Method \t" + nameOfPerson.slice(9, 17));
//Syntax: slice(starting index -> to end);
console.log("Slice Method \t" + nameOfPerson.slice(9));
//Syntax: replace("want to replace","the replaced word")
console.log("Replace \t" + nameOfPerson.replace("Abdullah", "Psych"));
console.log(nameOfPerson);

let friend = "Huraira";
console.log(
  "COncat \t" +
    nameOfPerson.slice(9, 17).concat(" is a friend of ", friend, " OK!")
);
//also
console.log(nameOfPerson + " " + friend);
//trim is used to remove whitespaces from string at beginning and ending only
console.log("Trim \t" + nameOfPerson.trim());
let friend2 = "        Abu Huraira Rafique         ";
console.log("Trim: " + friend2.trim());

for (let ch of friend) {
  console.log(ch);
}
//alternate
console.log("using alternate method");
for (let i = 0; i < friend.length; i++) {
  console.log(friend[i]);
}
//<----------#---------->
console.log('Har"'.length);

let sentence = "a quick brown fox";
let word = "jumps";
console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
//extract the amount of money
let str = "please give rs 1000";
let amount = Number(str.slice("please give rs ".length));
console.log(amount);
console.log(typeof amount); //string -> number

console.log(str.replace("a", "uuu"));
str[3] = "rrrrr";
console.log(str); //it doesn't work bcz string is immutable
