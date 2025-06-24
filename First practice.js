// //תרגיל 1
// let input = 58423;
// let out = 0;
// while(input > 0)
// {
//     sum += input % 10;
//     input = ~~(input/ 10);
// }
// console.log(sum);
// //תרגיל 2
// let input = 4;
// let print = '';
// for(let i = 0; i < input ; i++)
// {
//     print += '*';
//     console.log(print);
// }
// //תרגיל 3
// const input1 = 5;
// const input2 = 10;
// const input3 = 12;
// const input4 = 7;
// const input5 = 9;
// let max = 0;
// if(input1 > max)
// {
//     max = input1;
// }
// if(input2 > max)
// {
//     max = input2;
// }
// if(input3 > max)
// {
//     max = input3;
// }
// if(input4 > max)
// {
//     max = input4;
// }
// if(input5 > max)
// {
//     max = input5;
// }
// console.log(max);
// //תרגיל 4
// let input = 10045;
// console.log(input.toString().length)
// תרגיל 5
// const start = 2;
// const end = 14;
// for (let i = start; i < end; i++) 
// {
//     if(i%2 == 0)
//     {
//         console.log(i);
        
//     }
// }
// //תרגיל 6
// let input = 1234;
// input = input.toString();
// let out = "";
// for (let index = input.length -1; index >= 0; index--) 
// {
//     out += input[index];
// }
// console.log(out);
// //תרגיל 7
// for(let i = 1; i <= 5; i++)
// {
//     let str = ''
//     for(let j = 0; j < i; j++)
//     {
//         str += i;
//     }
//     console.log(str);
// }
// תרגיל 8
// let input = '121';
// let mid =  ~~((input.length -1) /2);
// let out = true;
// for (let i = 0; i < mid; i++)
// {
//     if(input[i] != input[input.length -(1 + i)])
//     {
//         out = false;
//         break;
//     }
// }
// console.log(out);
// //תרגיל 9
// const input = 4;
// for (let i = 1; i <= 10 ; i++) 
// {
//     console.log(input + " * " + i.toString() + " = " + input*i)
// }
// //תרגיל 10
// let input = 19;
// while(input != 1)
// {
//     if(input % 2 == 0)
//     {
//         input = input / 2;
//     }
//     else
//     {
//         input = input * 3 + 1;
//     }
//     console.log(input)
// }