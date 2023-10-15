//staring the quiz bruh
// Q1:
const loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done Success");
    };
    document.body.append(script);
  });
};

// using .then()
let a = loadscript("try_catch.js");
a.then((val) => {
  console.log(val);
});

//<-------------------->

//Q2:
// const funct = async () => {
//   let a = await loadscript("try_catch.js");
//   console.log(a);
// };

// funct();
