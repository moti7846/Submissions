import fs from "fs"
import os from "os"

function task1(){
    fs.readFile("./test.txt", "utf-8", (err, datd) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`File Content: \n${datd}`);
        fs.stat("./test.txt", (err, stats) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Size: ${stats.size} bytes`);
            console.log(`Created At: ${stats.birthtime}`);
        })
    })
}

function task2(){
    const files = fs.readdirSync("./", { withFileTypes: true });
    files.forEach(file => {
        if(file.isFile())
            console.log(`file: ${file.name}`);
});
}

function task3(){
    function recursion(num = 5){
        if(num == 0){
            setTimeout(() => {console.log(`Time's up!`);}, 1000);
            return;
        }
        console.log(num)
        setTimeout(() => {recursion(num - 1);}, 1000); 
    }

    recursion();
}

function task4(){
    let lines = fs.readFileSync("./quotes.txt","utf-8").split("\r\n");
    lines = lines.filter((line) => line)
    let rand = Math.floor(Math.random() * lines.length);
    console.log(`Random Line: ${lines[rand]}`);
}

// //5
// const totalMem = os.totalmem();
// const freeMem = os.freemem();
// const usedMem = totalMem - freeMem;
// const usedPercent = ((usedMem / totalMem) * 100).toFixed(0);

// console.log(`Free Memory: ${usedPercent}%`);

task1()
task2()
task3()
task4()