// // Starting OOPs in JavaScript
// class RailwayForm {
//   submit() {
//     alert(
//       this.name +
//         ", Your form is submitted and Your Train Number is: " +
//         this.trainNo
//     );
//   }
//   cancel() {
//     alert(
//       this.name +
//         ", Your form has cancelled and Your Train Number was: " +
//         this.trainNo
//     );
//   }
//   fillInfo(givenName, trainNo) {
//     this.name = givenName;
//     this.trainNo = trainNo;
//   }
// }

// let meForm = new RailwayForm();
// let psychForm = new RailwayForm();

// meForm.fillInfo("Abdullah Ibn Rafique", 112233);
// psychForm.fillInfo("PSYCH", 223344);

// meForm.submit();
// psychForm.submit();

// //but the moment "meForm" cancel the rerservation
// meForm.cancel();

/* ************ Constructor in JS ************** */

// class RailwayForm {
//   constructor(givenName, trainNo) {
//     console.log("constrctor called");
//     this.name = givenName;
//     this.trainNo = trainNo;
//   }

//   submit() {
//     alert(
//       this.name +
//         ", Your form is submitted and Your Train Number is: " +
//         this.trainNo
//     );
//   }
//   cancel() {
//     alert(
//       this.name +
//         ", Your form has cancelled and Your Train Number was: " +
//         this.trainNo
//     );
//   }
//   //   fillInfo(givenName, trainNo) {
//   //     this.name = givenName;
//   //     this.trainNo = trainNo;
//   //   }
// }

// let meForm = new RailwayForm("Abdullah Ibn Rafique", 112233);
// let psychForm = new RailwayForm("Psych");

// meForm.fillInfo("Abdullah Ibn Rafique", 112233);
// psychForm.fillInfo("PSYCH", 223344);

// meForm.submit();
// psychForm.submit();

// //but the moment "meForm" cancel the rerservation
// meForm.cancel();

/* ********* Inheritance in JS *********** */
// class Vehicle {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//     this.mile = 20;
//   }
//   details() {
//     console.log("The " + this.model + " is made in " + this.year);
//   }
//   milage() {
//     console.log(
//       "The " + this.model + " gives milage of " + this.mile + " Km/h"
//     );
//   }
// }
// class Car extends Vehicle {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   carName() {
//     console.log("This is " + this.name);
//   }
// }

// let corolla = new Car("Corolla");
// let mehran = new Car("New Mehran", 2013);

// // mehran.details()
// // mehran.milage();
// mehran.carName();
// mehran.milage();
// // corolla.milage();

/* *********** Method Overriding ************ */
// class Employee {
//   login() {
//     console.log(`The Employee has logged in`);
//   }
//   logout() {
//     console.log(`The Employee has logged out`);
//   }
//   requestLeaves(leaves) {
//     console.log(`The employee request for ${leaves} leaves`);
//   }
// }

// class Programmer extends Employee {
//   reuqestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`);
//   }

//   //here we are overriding the upper requestLeaves method with super()
//   requestLeaves(leaves) {
//     super.requestLeaves(leaves + 1); //the parent class method first runs and then below code runs
//     console.log(
//       `You will be granted ${leaves} leaves with an extra 1 leave also`
//     );
//   }
// }

// let emp = new Programmer();
// emp.login();
// emp.requestLeaves(10);
// emp.logout();

/* *********** Constructor Overriding ************ */
// class Employee {
//   constructor(name) {
//     console.log(`${name}'s constructor is here bruh!`); //this will called automatically if the child class object is created
//     this.name = name;
//   }

//   login() {
//     console.log(`The Employee has logged in`);
//   }
//   logout() {
//     console.log(`The Employee has logged out`);
//   }
//   requestLeaves(leaves) {
//     console.log(`The employee request for ${leaves} leaves`);
//   }
// }

// class Programmer extends Employee {
//   //if there's no constructor in child class then it'll created by javascript engine and called with super() keyword
//   /* constructor(...args){
//     super(...args);
//   } */

//   reuqestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`);
//   }

//   //here we are overriding the upper requestLeaves method with super()
//   requestLeaves(leaves) {
//     super.requestLeaves(leaves); //the parent class method first runs and then below code runs
//     console.log(
//       `You will be granted ${leaves + 1} leaves with an extra 1 leave also`
//     );
//   }
// }

// let emp = new Programmer("Muhammad Abdullah Ibn Rafique");
// emp.login();
// emp.requestLeaves(10);
// emp.logout();

/* *********** Static Methods in JAVA ************ */
// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name); //static method are used with class.static_method()
//   }

//   walk() {
//     console.log(`Animal ${this.name} is walking`);
//   }

//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//   }
// }

// let j = new Animal("janu");
// j.walk();
// console.log(this.capitalize("shappar")); //this will not gonna work due to this

/* *********** Getter/Setters ************ */
class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log(`${this._name} is flying`);
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

let me = new Animal("Psych");
me.fly();
console.log(me.name);
me.name = "Shapater";
console.log(me.name);

// /* *********** instanceof Operator ************ */
// //this will used for checking an obj belongs to a class or not : true/false
// console.log(me instanceof Animal); //true
// let c = 89;
// console.log(c instanceof Animal); //false
