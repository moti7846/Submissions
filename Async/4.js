function raceTimers(timeA,timeB){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Timer A finished!")
        }, timeA);
        setTimeout(() => {
            res("Timer B finished!")
        }, timeB);
    })
}

raceTimers(3000,2000).then(res => {
    console.log(res);
}).catch(rej => {
    console.log(rej);
})