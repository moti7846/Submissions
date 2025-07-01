import fs from "fs"
import { question } from "readline-sync"

const fileDB = "./DB.txt"

function addUser(name){
    fs.readFile(fileDB, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        data = JSON.parse(data)
        data.push(name)
        console.log(data);
    })
}

function readUser(){
    fs.readFile("./DB.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        data = JSON.parse(data)
        data.forEach(element => {
            console.log(element)
        });
    })
}

function deleteUser(){}

function updateUser(){}



// const a = JSON.stringify([1,2,3,4,5])
// const b = JSON.parse(a)
// b.push(12)
// b.splice(0,1)
// console.log(b.find());
// console.log(JSON.stringify(b));

// // const a = [1,2,3,4,5]
// // a.push(12)
// // a.splice(0,1)
// // console.log(a);
// // console.log(a.findIndex(2));
// // console.log(a.findIndex("moti"));

// const a = [1, 2, 3, 4, 5];
// const index = a.indexOf(10);
// console.log(index);

// addUser("moti")
readUser()