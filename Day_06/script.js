//Starting fetch api
// let p = fetch("https://goweather.herokuapp.com/weather/california"); //using get method by default.
// //first then will give us the status and Ok to check wether we fetch the data or not
// //it requires 2 stages of then
// p.then((response) => {
//   console.log(response.status); //response: 200 means fetching data successfully
//   console.log(response.ok); //true
//   console.log(response.headers);

//   //we use the below methods only once (only any of them) in the given methods
//   return response.json(); //.json() will return the object

//   //   return response.text();    //text() will return the text
// }).then((val) => {
//   console.log(val); //this will gives us the above returned json object
// });

//another example
// fetch("https://jsonplaceholder.typicode.com/users") //this will retuurn a promise
//   .then((response) => response.json()) //this will also return promise
//   .then((res) => {
//     console.log(res);
//     for (let val in res) {
//       document.write(
//         `${res[val].name} &nbsp; ==> &nbsp; working at &nbsp; ===> &nbsp; ${res[val].company.name} <br>`
//       );
//     }
//   }) //this will used to didplay/use of data
//   .catch((err) => console.log(err)); //in case if error occured

//fetching data from our local machine(reading)
// fetch("/Day_06/data-record.json") //this will retuurn a promise
//   .then((response) => response.json()) //this will also return promise
//   .then((res) => {
//     document.write("Reading data from local machine <br>");
//     console.log(res);
//     for (let val in res) {
//       document.write(
//         `${res[val].name} &nbsp; === &nbsp; ${res[val].age} &nbsp; === &nbsp; ${res[val].city} <br>`
//       );
//     }
//   }) //this will used to didplay/use of data
//   .catch((err) => console.log(err)); //in case if error occured

//saving data on server using put method

//<--------------------->
//Cookies
// let nameKey = prompt("name");
// let val = prompt("value");
// // document.cookie = `${nameKey}=${val}`;
// //so inorder to add special characters in key or value we use encodeURIComponent && decodeURIComponent
// document.cookie = `${encodeURIComponent(nameKey)}=${encodeURIComponent(val)}`;
// console.log(document.cookie);
// //inorder to decode the above encoded special characters
// // decodeURIComponent("pass the encoded letters");

//localStorage
// let key = prompt("enter key");
// let val = prompt("enter value");
// localStorage.setItem(key, val); //set data to localStorage
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`); //get data on the basis of key

// if (key == "red") {
//   localStorage.removeItem(key); //remove that particular itemrizwan
// }

// if (key == 0) {
//   localStorage.clear(); //will clear the localStorage
// }

// console.log(localStorage.length); ///find the length/size of localStorage
// console.log(localStorage.key(1)); //0=> index;

//sessionStorage and related methods
//having same methods as like localStorage
//it exist until a session has expired. on a single-tab, if opened the same tab on a new tab or exit it sessionStorage lost.

//Storage event: it's used when we want to update the changes in the local storage everywhere.
// window.onstorage = (e) => {
//   console.log("change occurs");
//   console.log(e);
// };
