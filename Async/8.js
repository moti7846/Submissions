function chainedGreetings(str,delay){
    return new Promise(res => {
        setTimeout(() => {
        res(str);
    }, delay);
    })
}

chainedGreetings("Hi!", 1000).then(res => {
    console.log(res);
    return chainedGreetings("How are you?", 2000)
}).then(res => {
    console.log(res);
    return chainedGreetings("Goodbye!", 1000)
}).then(res => {
    console.log(res);
})