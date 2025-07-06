function randomOperation(){
    const random = Math.floor(Math.random() *2)
    console.log(random);
    return new Promise((res,rej) => {
        if(random){
            res("Success!")
        }
        else{
            rej("Failure!")
        }
    })
}

randomOperation().then(res => {
    console.log(res);
}).catch(rej => {
    console.log(rej);
})