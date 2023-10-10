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
let p = new Promise(function (resolve, reject) {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("I'm Promise and is Rejected");
    // resolve(true);
    reject(new Error("Promise is Rejected"));
  }, 5000);
});

// console.log(p);
p.then(function (data) {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// .catch(function (error) {
//   console.log("error occured");
//       });
