import fs from "fs"

function checkFileExists(path){
    return new Promise((res,rej) => {
        fs.stat(path, (err) => {
            if(err){
                rej(false)
            }
            res(true)
        })
    })
}

checkFileExists("./6.js").then(res => {
    console.log(res);
}).catch(rej => {
    console.log(rej);
})