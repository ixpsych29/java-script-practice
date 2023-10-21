/* *********** Chapter 11 Quiz ************ */
//Q1: Create A JavaScript class To create a complex number.Create a constructor to set the real and complex parts.
// class complexNo {
//   constructor(real, img) {
//     this.real = real;
//     this.img = img;
//     // console.log(`Complex number is ${real}+${img}i`);
//   }
// }

// let a = new complexNo(2, 4);
// let b = new complexNo(7, 11);

//Q2: Write a method to add two complex numbers in the above class.
// class complexNo {
//   constructor(real, img) {
//     this.real = real;
//     this.img = img;
//   }
//   add(numCmplx) {
//     this.real = this.real + numCmplx.real;
//     this.img = this.img + numCmplx.img;
//   }
// }

// let a = new complexNo(2, 4);
// let b = new complexNo(7, 11);
// a.add(b);
// console.log(`After Adding given two Complex Numbers: ${a.real}+${a.img}i`);

//Q3: Create a class Student from a class Human. Override method and see changes.
// class Human {
//   constructor(name, favFood) {
//     this.name = name;
//     this.favFood = favFood;
//   }
//   walk() {
//     console.log(`Human ${this.name} is walking!`);
//   }
// }
// class Student extends Human {
//   walk() {
//     console.log(`Stduent ${this.name} is walking!`);
//   }
// }

// let st = new Student("Psych", "Shimla Qeema");
// st.walk();
// let sy = new Human("Shapater", "Aloo Paratha");
// sy.walk();

//Q4: See if Student is an instance of Human using instanceof keyword.
// console.log(st instanceof Human);   //true

//Q5: Use getters and setters to set and get the real and imaginary parts of the complex numbers.
class complexNo {
  constructor(real, img) {
    this.real = real;
    this.img = img;
    // console.log(`Complex number is ${real}+${img}i`);
  }
  get real() {
    return this._real;
  }
  get img() {
    return this._img;
  }
  set real(newReal) {
    this._real = newReal;
  }
  set img(newImg) {
    this._img = newImg;
  }
}

let a = new complexNo(2, 4);
a.real = 7;
a.img = 7;
let b = new complexNo(7, 11);
console.log(`real: ${a.real} && img: ${a.img}i`);
