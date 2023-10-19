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

class RailwayForm {
  constructor(givenName, trainNo) {
    console.log("constrctor called");
    this.name = givenName;
    this.trainNo = trainNo;
  }

  submit() {
    alert(
      this.name +
        ", Your form is submitted and Your Train Number is: " +
        this.trainNo
    );
  }
  cancel() {
    alert(
      this.name +
        ", Your form has cancelled and Your Train Number was: " +
        this.trainNo
    );
  }
  //   fillInfo(givenName, trainNo) {
  //     this.name = givenName;
  //     this.trainNo = trainNo;
  //   }
}

let meForm = new RailwayForm("Abdullah Ibn Rafique", 112233);
let psychForm = new RailwayForm("Psych");

// meForm.fillInfo("Abdullah Ibn Rafique", 112233);
// psychForm.fillInfo("PSYCH", 223344);

meForm.submit();
psychForm.submit();

//but the moment "meForm" cancel the rerservation
meForm.cancel();
