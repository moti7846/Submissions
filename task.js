// let arr = [];
// arr.push("moti")
// arr.push(true)
// arr.push(805)
// console.log(arr.pop(0));
// console.log(arr);
// const str = 'BeptQdWZim'.split('');
// let index = []
// for(let i = 0;i<str.length;i++)
// {
//     if(str[i] >= 'A' && str[i] <= 'Z')
//     {
//         index.push(i)
//     }
// }
// for(let i = 0;i<index.length;i++)
// {
//     str.splice(index[i]- i , 1);
// }
// console.log(str.join(''));
// let me = {
//     name:"moti",
//     age:22,
//     hobbies: [1,2,3]
// }
// for(const key in me)
// {
//     console.log(key + " " + me[key]);
    
// }
// let name = process.argv[2 = "a"];
// let age = process.argv[3] - 2025;
// console.log(name ,age);
// function Name(nam1 = '')
// {
//     console.log(nam1.toUpperCase());
// }
// Name("moti");

// function Age(yuor)
// {
//     return 2025 - yuor
// }
// a = Age(22)
// console.log(a);
// const add = (num1, num2) => {
//     return num1+num2; 
// }
// const subtract = (num1, num2) => {
//     return divide(num1-num2,10); 
// }
// const multiply = (num1, num2) => {
//     return subtract(num1*num2,5); 
// }
// const divide = (num1, num2) => {
//     return num1/num2; 
// }
// function start( callback){
//     console.log(callback(5,2));
//     ;
// }
// start(multiply);
// function person(name,age){
//   this.name = name,
//   this.age = age
// }

// // const per = new person("moti",22);
// function printer(obj){
//   console.log(`name: ${obj.name}, age: ${obj.age}`);
  
// }
// printer(new person("moti",22))

// function Animal(name){
//   name;
//   sound = "basic";
//   this.greet = function (){
//         console.log(`my name is: ${this.name} my sound is: ${this.sound}`)
// }}
// const dog = new Animal("dog")
// const cat = new Animal("cat")
// cat.greet()

const users = [
    {
        username: "Moshe"
    },
    {
        username: "Bob"
    },
    {
        username: "Ben"
    }
];
function processUserData(input, index) {
    try {
        const users = JSON.parse(input);
        console.log(users[index].username.toUpperCase());
    } catch (err) {
        console.error({ err });
    }
}
const usersString = JSON.stringify(users);
processUserData(usersString, 1);