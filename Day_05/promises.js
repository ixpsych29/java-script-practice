//we'll practise here the promises, we use promises to make work parallelly and work asynchronously

// let promise = new Promise(function (resolve, reject) {
//   console.log("hello 4");
//   resolve(7);
// });

// console.log("Hello 1");

// setTimeout(() => {
//   console.log("Hello 2");
// }, 3000);

// console.log("Hello 3");

//promise methods: .then() and .catch()
// let p = new Promise(function (resolve, reject) {
//   console.log("Promise is Pending");
//   setTimeout(() => {
//     console.log("I'm Promise and is Rejected");
//     // resolve(true);
//     reject(new Error("Promise is Rejected"));
//   }, 5000);
// });

// // console.log(p);
// p.then(function (data) {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// .catch(function (error) {
//   console.log("error occured");
//       });

// /prommise chaining
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved p1 after 2 sec");
//   }, 2000);
//   resolve(56);
// });

// p1.then((val) => {
//   console.log(val);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("p2 resolved!");
//     }, 2000);
//   });
//   return p2;
// }).then((val) => {
//   console.log("we're done bruh with chaining");
//   console.log(val);
//   return 23;
// });

//<----------#---------->
// //quick quiz: load script function
// const loadscript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     // script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve("the script is loaded successfully");
//     };
//     script.onerror = () => {
//       reject(0);
//     };
//   });
// };

// let p1 = loadscript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
// );
// p1.then((val) => {
//   console.log(val);
// }).catch((error) => {
//   console.log("we are having problem with script loading");
// });

//<----------#---------->
//attaching multiple handlers (it's not promise chaining: we return the value first then use this value)

//<----------#---------->
//promise API: 6 primary methods to use this

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Error Occurred"));
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

// p1.then((val) => {
//   console.log(val);
// });
// p2.then((val) => {
//   console.log(val);
// });
// p3.then((val) => {
//   console.log(val);
// });

// /instead of using the above approach we use Promise.all() function
// let promise_all = Promise.all([p1, p2, p3]).then((val) => {
//   console.log(val);
// });

//Promise.allSettled(): it is used when one or more promise are rejected. it will fulfilled the promises and don't give errors
let promise_all = Promise.allSettled([p1, p2, p3]).then((val) => {
  console.log(val);
});
