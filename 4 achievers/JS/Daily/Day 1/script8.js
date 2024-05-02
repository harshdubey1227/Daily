// let arr1 = [1,2,3,5,7]
// let arr2 = [3,5,7,9,9,0,6]

// // to find the larger array

// if (arr1.length<arr2.length){
//     for(let i=0; i<arr1.length; i++){
//         arr2[i]=arr1[i]+arr2[i];
//     }
//     console.log(arr2)
// }
// else{
//     for (let i = 0 ; i < arr2.length; i++){
//         arr1[i]= arr1[i]+arr2[i];
//     }
//     console.log(arr1)
// }


//
// find sum of all the digits

// let num = 984283;
// let sum = 0 ;
// while (num!=0)
// {
//     let digit = num%10;
//     sum = sum+digit;
//     num = Math.floor(num/10)
// }
// console.log(sum)

//
// first digit
/////////////////////////////////ye galat hai
// let num = 984283;
// while (num>0)
// {
//     num = Math.floor(num/10)
// }
// console.log(num)

//
// largest digit

let num = 894283;
let sum = 0 ;
let max = -1;
while (num!=0)
{
    let digit = num%10;
    if(digit>max){
    max = digit;
    }
    
    num = Math.floor(num/10)
}
console.log(max)