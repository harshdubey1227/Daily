// Function to add 2 numbers

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,5)

// Arrow function

// const mul = (a,b)=>{
//     console.log(a*b)
// }
// mul(2,4)

// or //
// const mul = (a,b)=>{
//     return a*b;
// }
// let res = mul(2,5)
// console.log(res)

// Practice Questions //

//1. Make a function that takes a string as an argument and returs the number of vowel in the string

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("Harsheee")

// 2. Same Question using arrow function

// let countVowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count)
// };
// countVowels("abcde")





// ForEach loop in arrays//

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val)
// })

// let arr2 = ["delhi","goa","mp"]

// arr2.forEach((val, index, arr2)=>{
//     console.log(val.toUpperCase(), index, arr2)
// })




// Practice Problem : For a given array of numbers, print the square of each number using forEach loop

// let arr = [2,3,4,5,6,7]

// arr.forEach((val)=>{
//     console.log(val*val)
// })

// or //
// let sq = (num)=>{
//     console.log(num*num)
// }
// arr.forEach(sq)





// Some more Array methods // 

// MAP//

// let num = [22,33,44,55]
// num.map((val)=>{
//     console.log(val)
// })

// let newnum = num.map((val)=>{
//     return val/10
// })
// console.log(newnum)


// FILTER //

// let num = [22,33,44,55]
// let newnum = num.filter((val)=>{
//     return val%2===0
// })
// console.log(newnum)

//REDUCE//

// let num = [2,3,4,5,6,7,8,9]
// let sumnum = num.reduce((res,cur)=>{
//     return res+cur;
// })
// console.log(sumnum)


// Find largest num
// let num = [2,39,34,45,67,7,78,9]

// let larnum = num.reduce((pre,next)=>{
//     if( pre>next){
//         return pre
//     }else{
//         return next
//     }
// })
// console.log(larnum)



// PRACTICE QUESTION //

//1. filter out marks of students more than 90 from an array

// let marks  = [44,98,90,89,78,97,96,45]
// let gradeA = marks.filter((val)=>{
//     return val>=90
// })
// console.log(gradeA)


//2. Create an array of n by taking input from user
//   use reduce to calculate sum of all num
//   use reduce to calculate product or factorial of all num


let n = prompt("Enter a number");

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]= i;
}
console.log(arr);
let sum = arr.reduce((prev,cur)=>{
    return prev+cur;
})
console.log(sum);
let mul = arr.reduce((prev,cur)=>{
    return prev*cur;
})
console.log(mul);