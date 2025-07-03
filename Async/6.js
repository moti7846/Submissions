function waitAll(){
    const a = new Promise((res, rej) => {
        setTimeout(() => {
             res("First")
        }, 1000);
    })
    const b = new Promise((res, rej) => {
        setTimeout(() => {
             res("Second")
        }, 2000);
    })
    const c = new Promise((res, rej) => {
        setTimeout(() => {
             res("Third")
        }, 3000);
    })
    return Promise.all([a,b,c])
}

waitAll().then((res) => {
    console.log(res);
})