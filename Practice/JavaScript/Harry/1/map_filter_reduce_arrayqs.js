// // Array map method 

// let arr = [45,34,46]
// let a= arr.map((value, index,array)=>{
//     console.log(value,index ,array)
//     return value + index
// })
// console.log(a)

// // Array filter method

// let arr2 = [ 45,56,7,3,456]
// let a2 = arr2.filter((x)=>{
//     return x<10
// })
// console.log(a2)

// // Array reduce method

// let arr3= [1,2,34,56,78,8,2,1]
// let y = arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(y)




//////////////////////////////PRACTICE SET//////////////////////////////


// Problem 1 . Create an array of numbers and take input from user to add numbers to this array

// let arr = [1,2,3,4,5,56]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Problem 2 . Keep adding numbers to arr in question 1 until 0 is added

// let arr = [1,2,3,4,5,56]
// let a;
// do{
// a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)   
// }
// while (a!=0);
// console.log(arr)

// Problem 3. Filter for numbers divisible by 10 from a given array

// let arr = [2,34,56,70,90,30,45,100]
// let b=arr.filter((value)=>{
//     return value%10==0
// })
// console.log(b)

// Problem 4. Create an array of square of given numers

// let arr = [2,4,6,8,9,66]
// let sq = arr.map((value)=>{
//     return value*value
// })
// console.log(sq)

// Problem 5. Use reduce to calculate factorial

let arr = [1,2,3,4,5,6]
let n = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)