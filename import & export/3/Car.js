function Car(make, model){
    let make = make;
    let model = model;
    function getDetails(){
        return `make: ${this.make}, model: ${this.model}`
    }
}

let car = new Car(1,2)
console.log(car.getDetails());
