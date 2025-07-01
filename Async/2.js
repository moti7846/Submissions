import fs from "fs"

function readFileContent(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path,"utf-8", (err, data) =>{
            if(err){
                reject(err)
                return;
            }
            resolve(data)
        })
    })
}

readFileContent("./my test.txt").then((res => {
    console.log("Content of myTest.txt:");
    console.log(res);
})).catch(reject => {
    console.log(reject);
})