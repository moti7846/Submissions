function delayedGreet(name,  delay){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Hello " + name);
        }, delay);
        
    })
}

delayedGreet("moti",2500).then(ress => {
    console.log(ress);
})