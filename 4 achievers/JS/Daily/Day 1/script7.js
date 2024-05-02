// let arr = [ 12 , "harsh dubey" , [1,2,3,4], {name:"tina"} , null , undefined]
// console.log(arr)

// obj = { 1:"xvxf", 2: "srgdrrgdg", 3:123}
// console.log(obj)

//
// 
// let emp = [20000, 30000 ,40000 ,50000 ,60000]
// let sum2 = 0;
// for (let i= 0; i< emp.length ; i++){
//     sum2 = sum2 + emp[i];
// }
// console.log(sum2)


//
//given that the array going to be only with one level nesting

// let arr = [20 , " djhfjh" , 45, false, {}]
// let sum = 0;
// for(let i= 0; i< arr.length ; i++){
//     if (typeof arr[i]=="number"){
//         sum = sum + arr[i]
//     }    
// }
// console.log(sum)

// ****
// let arr2 = [20 , "dfsdfsd", 45 ,10, [10,10,20],[10,10,20]]

// let sum = 0;
// for(let i=0; i<arr2.length; i++){
//     if(typeof arr2 [i] == "number"){
//         sum = sum + arr2[i];
//     }
//     else if (typeof arr2[i]== "object"){
//         for (let num of arr2[i]){
//             if(typeof num == "number"){
//                 sum = sum + num;
//             }
//         }
//     }

// }
// console.log(sum)


//
// Function definition

// function sum() {
//     let  num1 = 10;
//     let num2 = 20;
//     console.log(num1+num2)    
// }
// sum()
// console.log("hello harsh")
// sum()
// console.log("Hello vishal")
// sum()

//
//example

function wish() {
    console.log("Happy Birthday ")    
}
wish()
console.log("Aaj hai bhai ka birthday")
wish()
console.log("Hum karenge party sharty")

for (i=0; i<=5; i++){
   console.log(wish()) 
}

