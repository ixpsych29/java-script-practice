/* *********** Starting Chap 12 ************ */
//IIFE: Immediately Invoked Function Expression
//syntax: (function(){})(); whatever inside the () the brackets will call by the last 2 brackets.
// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(789);
//     }, 3000);
//   });
// };

// (async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// })();

/* *********** Destructuring && Spread Operator ************ */
//Destructuring
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let [a, b, ...rest] = arr;
// console.log(a, b, rest);
//if we don't want  to assign any variable to 2nd value of array we left it empty and just write comma.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let [a, , c, ...rest] = arr;
// console.log(a, c, rest); //a=1, c=3, rest=[4,5,6,7].

//spread Operator
// let spread = [1, 2, 3, 4, 5, 6, 7];
// let s2 = { ...spread };
// console.log(s2);

/* *********** Scope ************ */
//3 types of scopes available in JS.
//1. Global Scope: accessible everywhere. 2. Local Scope: inside the body of function or block 3. Block Scope
