//async funtion declare krty hain then hum parts of functions ko wait krwa skty hain
//alternative of multiple .then()
//async function always return a promise and non-promises in it

async function asyncFunction() {
  return 5;
}

asyncFunction().then((x) => {
  alert(x);
});
