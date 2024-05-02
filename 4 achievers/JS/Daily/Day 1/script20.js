// // Sorting

// let arr = [ 1,4,2,67,23,5,78]

// //Ascending order
// let result = arr.sort(function(a,b){
//     if(a<b){
//         return -1;
//     }
//     else if (a===b){
//         return 0;
//     }
//     else{
//         return 1;
//     }
// });

// console.log(result)
// console.log(arr)


// //sort on the basis of length of string

// let strarr = ["rita", "teena", "ram", "pooja", "ramesh", "mohit","shalika","saket"]

// let result = strarr.sort(function(a,b){
//     if(a.length>b.length){
//         return 1
//     }
//     else if(a.length===b.length){
//         return 0
//     }
//     else{
//         return -1
//     }
// })

// console.log(result)




// Objects

// function Person() {
//     this.name="Harsh",
//     this.age=22,
//     this.phone="989898",
//     getInfo=function(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.phone)
//     }
// }
// let obj1 = new Person()
// let obj2 = new Person()
// let obj3 = new Person()
// let obj4 = new Person()

// obj2.name = "Raja"
// obj3.name = "Shubham"
// obj4.name = "Shyam"

// console.log(obj1,obj2,obj3,obj4)



function Person(name,age,phone) {
    this.name=name,
    this.age=age,
    this.phone=phone,
    getInfo=function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.phone)
    }
}

let obj1 = new Person ("Laalu",84,"89897") 
let obj2 = new Person ("Prasad",84,"89897") 
let obj3 = new Person ("Yadav",84,"89897") 

console.log(obj1,obj2,obj3)