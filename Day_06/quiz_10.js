//chapter 10 Quiz
// Q1: use a free api and feed your app with live data
// fetch("https://kontests.net/api/v1/all")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res);
//     for (let val in res) {
//   console.log(response[res].name); //res: index; response[res=>index].prop_name
//       console.log("api is working");
//       document.write(
//         `<b>Contest Name:</b> &nbsp; ${res[val].name},&nbsp; <b>URL:</b> &nbsp; ${res[val].url} &nbsp; && <b>SITE:</b>&nbsp; ${res[val].site} <br>`
//       );
//     }
//   });

//Q2: create a note saving app which stores your note to local storage

// let note = prompt("Enter a note");
// let key = Math.round(Math.random() * 10);
// localStorage.setItem(key, note);

//Q3: fetch the note from the local storage

// let ret_key = prompt("Enter key of retrieval");
// document.write(localStorage.getItem(ret_key));

//Q5: delete the note that was fetched in Q3
let c = confirm("Do you want to delete note?");
if (c) {
  let ret_key = prompt("then Enter key of note");
  localStorage.removeItem(ret_key);
}
