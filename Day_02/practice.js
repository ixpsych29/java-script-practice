// //<----------#Arrays---------->
// // let marks = [12, 23, 34, 45, null, false, "Not Present"];
// // console.log(marks);
// // console.log(marks[2]);
// // console.log("length of array is " + marks.length); //7

// // //alteration of array values and also add values
// // //arrays are mutable and can be changed
// // marks[4] = 69;
// // console.log(marks);
// // console.log(typeof marks);

// // for (let i = 0; i < marks.length; i++) {
// //   console.log(marks[i]);
// // }
// // //alternate using for-of loop; for-in loop gives index of array
// // for (let num of marks) {
// //   console.log(num);
// // }

// //<----------#Array Methods---------->
// // let num = [1, 2, 3, 4, 7, 8, 9];
// // console.log(typeof num); //object
// // let str = num.toString(); //this will convert
// // console.log(typeof str); //string
// // console.log(str);

// // //join method
// // let c = num.join(" and "); //this will join the array elements with this separator
// // console.log(c);
// // console.log(typeof c); //string

// // //pop method: this will remove the last element of array and will change the same array not making a new array
// // num.pop();
// // console.log(num);

// // //push method: modify kry ga existing array or push at the end
// // num.push(97);
// // console.log(num);

// // //shift method: remove first element and pop out this
// // num.shift();
// // console.log(num);

// // //add element at the beginning
// // num.unshift(56);
// // console.log(num);

// //some more arrays
// //delete operator: it will delete the element but the length of array will remain same
// let num = [11, 21, 13, 4, 56, 76, 7, 8, 9];
// console.log(num);
// // delete num[2];
// // console.log(num);
// // console.log(num.length); //it will remain same

// //concat array
// // let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// // let mergedArr = num.concat(num2);
// // console.log(mergedArr);

// // const compare = (a, b) => {
// //   return a - b; //sort ascendingly, if want desc write b-a;
// // };

// // //sort method it will sort alphabetically
// // console.log(num.sort(compare)); //11,13,21,4,56
// // //reverse method
// // console.log(num.reverse());

// //splice method: used to add new elements to the array and return removed elements
// //syntax: splice(starting index, remove_no_of_elements, new numbers separated by comma)
// // num.splice(2, 2, 1111, 2222, 3333, 4444);
// // console.log(num);
// //slice method: makes new array from existing
// let new_num = num.slice(2); //means index:2 -> end
// console.log(new_num);
// let newNum = num.slice(2, 5); //starting, ending indexes, last index is not included
// console.log(newNum);

//<----------#Loops in Arrays---------->
let num = [3, 4, 5, 2, 1, 6];
//for-each loop
// num.forEach((el) => {
//   console.log(el * el); //it will return square of elements of arrays
// });

//Array.from -> to convert into array
let name = "PSYCH";
let nameArr = Array.from(name); //it will convert this string into array
console.log(nameArr);

//for-of loop: it'll iterate through the array and return values
for (let n of num) {
  console.log(n);
}

//for-in loop: it'll iterate through the loop and return keys(index) of array
for (let idx in num) {
  console.log(idx);
}
