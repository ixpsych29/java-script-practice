// setTimeout(() => {
//   console.log("Hacking WiFi... Please Wait Bruh");
// }, 1000);

// //if we want that our code never stops while having an error we can use try and catch
// //try k andar sirf synchronous code hi handle kiya jaye ga na ki scheduled code(asynchronous). so we have to write try catch in between scheduled code. bruh!
// try {
//   console.log(shappar);
// } catch (err) {
//   console.log("bally bally " + err);
// }

// setTimeout(() => {
//   console.log("WiFi Credentials fetched... Bruh");
// }, 2000);

// setTimeout(() => {
//   console.log("Hacking your facebook... Please Wait Bruh");
// }, 3000);

// setTimeout(() => {
//   console.log("FaceBook Credentials fetched... Bruh");
// }, 4000);

//<-------------------->
//Today's concept:error object
// try {
//   harry;
// } catch (err) {
//   console.log("name of the error: " + err.name);
//   console.log("message of the error: " + err.message);
// }

//custom error throw
// try {
//   let age = prompt("Enter age bruh");
//   if (age > 150) {
//     throw new ReferenceError("Probably this is not true");
//   }
// } catch (err) {
//   console.log(err.name); //error type/name
//   console.log(err.message); //message of the error
//   console.log(err.stack); //show everything about error: name, msg and stack
// }
// console.log("script is running bruh");

//<-------------------->
//finally clause: it will executes always, no matter eror occurs or not, if exist
// const func = () => {
//   try {
//     console.log(program);
//     //let say try run successfully then:
//     console.log("Running successfully");
//     return;
//   } catch (err) {
//     console.log("error occurred");
//     // console.log(psych); //what if here error also occurs
//   } finally {
//     //used for clean-ups purpose
//     //close the file
//     //exit the loop
//     //write to the log file
//     console.log("finally block run");
//   }
// };

// func();

//chapter # 09 end
//<-------------------->
