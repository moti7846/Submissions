// //1
// function doubleValues(num){
//     return num *2
// }

// const arr = [1,2,3,4];

// const arr2 = arr.map(doubleValues)

// console.log(arr);
// console.log(arr2);
//2
// const arr = [0,1,2,3,4];

// const arr2 = arr.map(num => {
//     if(num % 2 == 0)
//         return num;
// })
// .filter(item => (item !== undefined))

// console.log(arr);
// console.log(arr2);
// // 3
// function showFirstAndLast(arry){
//     let result = arry.filter(item => (typeof item === "string"))
//     return [result[0],result[result.length -1]];
// }
// console.log(showFirstAndLast([1,1,"moti",5,"2","minzberg"]));
// //חסר פה ולידציה במידה ויתקבל מערך רק אם סטרינג 1
//4
// function vowelCount(str){
//     let temp = str.split('');
//     let result = {};
//     temp.forEach(element => {
//         if(element in result){
//             result[element] += 1;
//         }
//         else if(element === element.toLowerCase() && element !== ' '){
//             result[element] = 1;
//         }
//     });
//     return result
// }
// console.log(vowelCount("moti minzberg"));
// //5
// function capitalize(str){
//     return str.toUpperCase();
// }
// console.log(capitalize("moti"));
// //6
// function shiftLetters(str){
//     str = str.split('');
//     let result = "";
//     str.forEach(element => {
//         element = String.fromCharCode(element.charCodeAt(0) +1);
//         result += element
//     });
//     return result;
// }
// console.log(shiftLetters("lnsh"));
// //7
// function swapCase(str){
//     let result = "";
//     str = str.split('');
//     str.forEach((element,i) => {
//         if(i % 2 === 1){
//             result += element.toUpperCase();
//         }
//         else{
//             result += element
//         }
//     });
//     return result;
// }

// console.log(swapCase("moti"));
