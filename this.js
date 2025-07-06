
{
    x : 10
    function test(){
        const x = this.x
        
        console.log(this.x);
    }
}

test()