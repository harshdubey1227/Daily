// class Person {
//     constructor (n,ph,add){
//         this.name = n
//         this.phone = ph
//         this.address = add
//     }
//     getInfo = function(){
//         console.log(this.name , this.phone, this.address)
//     }
// }


// class Student extends Person{
//     constructor(marks , name, phone , address){
//         super(name, phone , address);
//         this.marks = marks
//     }
// }


// let obj1 = new Person("lallu" , 2345 , "laal") ;
// obj1.getInfo()
// let obj2 = new Student( 98,"lallu" , 2345 , "laal",) ;
// obj1.getInfo()




/* Prototype*/


function Person(name, phone){
    this.name = name
    this.phone = phone
}

Person.prototype.getInfo = function(){
    console.log(this.name, this.phone)
}

let obj1 = new Person("Harsh", "48759845")
console.log(obj1)
obj1.getInfo()