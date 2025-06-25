// //1
// function Phone(brand, model){
//     this.brand = brand;
//     this.model = model;
//     this.details = () => {
//         console.log(`Phone: ${this.brand} ${this.model}`);
        
//     }
// }
// const s24 = new Phone("Samsung","s24")
// const s22 = new Phone("Samsung","s22")
// s24.details()
// s22.details()
// //2
// function Rectangle (width, height){
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.height * this.width
//     }
// }
// const rectangle = new Rectangle(10,8)
// console.log(rectangle.area());
// //3
// function BankAccount (owner, balance ){
//     this.owner = owner;
//     this.balance = balance;
//     this.deposit = (amount) => {
//         console.log(`Previous balance: ${this.balance}`);
//         this.balance += amount;
//         console.log(`Current balance: ${this.balance}`);
//     }
//     this.withdraw = (amount) => {
//        console.log(`Previous balance: ${this.balance}`);
//        if(this.balance - amount >= 0){
//            this.balance -= amount;
//            console.log(`Current balance: ${this.balance}`);
//        }
//        else{
//            console.log(`You don't have enough balance.`);
//        }
//    }
//     this.checkBalance = () => {
//        console.log(`Previous balance: ${this.balance}`);
//    }
    
// }
// const motiaccount = new BankAccount("moti",990000000000)
// motiaccount.deposit(10)
// motiaccount.withdraw(90000000000*99)
// motiaccount.checkBalance()
//4
