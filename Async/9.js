const a = {
    name : "moti",
    test1 : () => {
        console.log("(a1-)" + this.name);
    },
    test2 : function () {
        console.log("[a2^]" + this.name);
    }
}


const name = "moti"

const test1 = () => {
    console.log("(test1^)" + this.name);
}
const test2 = function () {
    console.log("[test2-]" + this.name);
}


// a.test1()
// a.test2()
test1()
// test2()