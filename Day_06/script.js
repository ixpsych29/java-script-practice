//Starting fetch api
let p = fetch("https://goweather.herokuapp.com/weather/california");
//first then will give us the status and Ok to check wether we fetch the data or not
//it requires 2 stages of then
p.then((resolve) => {
  console.log(resolve.status); //response: 200 means fetching data successfully
  console.log(resolve.ok); //true

  //we use the below method only once in the method
  return resolve.json(); //.json() will return the object
  //   return resolve.text();    //text() will return the text
}).then((val) => {
  console.log(val); //this will gives us the above returned json object
});
