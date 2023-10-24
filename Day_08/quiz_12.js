// Q1:
// setTimeout(() => {
//   console.log("Hello \n World");
// }, 2000);

const a = async (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

//using IIFE
(async () => {
  let text = await a("Hello");
  console.log(text);
  text = await a("World");
  console.log(text);
})();
