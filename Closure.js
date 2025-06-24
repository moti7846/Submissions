//1
// function createCounter() {
//   let num = 0;
//   return function (){
//     num += 1;
//     return num;
//   }
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// //2
// function secretHolder(secret) {
//   _secret = secret;
//   return {
//     getSecret : function () {
//       return _secret;
//     },
//     setSecret : function (newSecret) {
//       _secret = newSecret
//     }
//   }
// }

// const mySecret = secretHolder("abc");
// console.log(mySecret.getSecret()); // "abc"
// mySecret.setSecret("123");
// console.log(mySecret.getSecret()); // "123"
// //3
// function buildFunctions() {
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// const funcs = buildFunctions();
// funcs[0](); // צריך להדפיס 0
// funcs[1](); // צריך להדפיס 1
// funcs[2](); // צריך להדפיס 2
