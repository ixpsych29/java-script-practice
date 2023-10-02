//<----------#Arrays---------->
// let marks = [12, 23, 34, 45, null, false, "Not Present"];
// console.log(marks);
// console.log(marks[2]);
// console.log("length of array is " + marks.length); //7

// //alteration of array values and also add values
// //arrays are mutable and can be changed
// marks[4] = 69;
// console.log(marks);
// console.log(typeof marks);

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }
// //alternate using for-of loop; for-in loop gives index of array
// for (let num of marks) {
//   console.log(num);
// }

//<----------#Array Methods---------->
let num = [1, 2, 3, 4, 7, 8, 9];
console.log(typeof num); //object
let str = num.toString(); //this will convert
console.log(typeof str); //string
console.log(str);

//join method
let c = num.join(" and "); //this will join the array elements with this separator
console.log(c);
console.log(typeof c); //string

//pop method: this will remove the last element of array and will change the same array not making a new array
num.pop();
console.log(num);

//push method: modify kry ga existing array or push at the end
num.push(97);
console.log(num);

//shift method: remove first element and pop out this
num.shift();
console.log(num);

//add element at the beginning
num.unshift(56);
console.log(num);
