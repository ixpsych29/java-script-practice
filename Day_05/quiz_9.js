//staring the quiz bruh
// Q1:
// const loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " Done Success");
//     };
//     document.body.append(script);
//   });
// };

// using .then()
// let a = loadscript("try_catch.js");
// a.then((val) => {
//   console.log(val);
// });

//<-------------------->

//Q2:
// const funct = async () => {
//   let a = await loadscript("try_catch.js");
//   console.log(a);
// };

// funct();

//<-------------------->
// Q3:
// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Not Acceptable, error occured"));
//     }, 3000);
//   });
// };
// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log(error);
//   }
// };

// a();

//<-------------------->
// Q4:
let p1 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

let p2 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
let p3 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const run = async () => {
  console.time("run");
  //approach#1
  // let a1 = await p1();
  // let a2 = await p2();
  // let a3 = await p3();
  //this will result in ~7 sec so we have to optimized the method

  //approach#2: optimized approad and have ~3 sec required.
  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let res = await Promise.all([a1, a2, a3]);
  console.log(res);

  //checking time
  console.timeEnd("run");
};
//calling the function
run();
