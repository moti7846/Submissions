// //1
// let a = "some string";
// let b = "other string";
// a += b;
// b = a.slice(0, a.length - b.length);
// a = a.slice(b.length);

// console.log(`a = ${a} b = ${b}`);
//2
// let a = [["X","X","X"],['X','X','X'],['X','X','X'],['x','x','x'],['x','x','x']];
// let count = 0;
// for(let i= 0; i<a.length;i++)
// {
//     for(let j= 0; j<a[i].length;j++)
//     {
//         if(a[i][j] === 'X')
//         {
//             count ++;
//         }
//     }
// }
// console.log(count);
// //3
// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
// console.log(family.children[2].name);
// //3++
// let names = ""
// for(let i = 0; i < family.children.length;i++)
// {
//     names += family.children[i].name
//     names += ", "
// }
// console.log(names);
// //4
// let arry = [1,2,3,4]
// let arry2 = []
// while(arry.length != 0)
// {
//     arry2.push(arry.pop())
// }
// console.log(arry2);