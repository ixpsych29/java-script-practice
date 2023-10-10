//we'll practise here the promises, we use promises to make work parallelly

let promise = new Promise(function (resolve, reject) {
  resolve("Promise is resolved");
});

console.log("Hello 1");

setTimeout(() => {
  console.log("Hello 2");
}, 1000);

console.log("Hello 3");
