// Q1:
// setTimeout(() => {
//   console.log("Hello \n World");
// }, 2000);

// const a = async (text) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 2000);
//   });
// };

// //using IIFE
// (async () => {
//   let text = await a("Hello");
//   console.log(text);
//   text = await a("World");
//   console.log(text);
// })();

//Q2:
// const avg = (a, b, c) => {
//   return (a + b + c) / 2;
// };

// let numArr = [1, 2, 3, 4, 5];
// console.log(avg(...numArr));

//Q3:
// const res = (n) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise resolved after " + n + " seconds");
//     }, n * 1000);
//   });
// };
// (async () => {
//   let result = await res(3);
//   console.log(result);
//   result = await res(5);
//   console.log(result);
//   result = await res(7);
//   console.log(result);
//   result = await res(9);
//   console.log(result);
// })();
