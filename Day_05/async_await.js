//async funtion declare krty hain then hum parts of functions ko wait krwa skty hain
//alternative of multiple .then()
//async function always return a promise and non-promises in it

// async function asyncFunction() {
//   let lhrWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 1000);
//   });
//   let fsdWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("29 Deg");
//     }, 2000);
//   });

//   //   lhrWeather.then(alert);
//   //   fsdWeather.then(alert);

//   let lhr = await lhrWeather;
//   let fsd = await fsdWeather;
//   return [lhr, fsd];
// }

// console.log("Welcome to the control room");
// asyncFunction();
