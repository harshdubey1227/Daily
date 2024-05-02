// let i = 1;
// let n = 3;
// function harsh(x,y) {
   
    
//     return (x+y)/2  ;
    
// }
// let a  = 2;
// let b = 4;
// let c = 6;

// console.log("average of a and b is  ", harsh(a,b))
// console.log("average of b and c is  ", harsh(b,c))
// console.log("average of c and a is  ", harsh(c,a))



// const lallulaal = (p,q)=>{
//     console.log("okok")
//     return (p+q)/2
    
// }
// console.log("average of a and b is  ", lallulaal(a,b))



//
//
// questions on loops and functions

// Question 1 : Print marks of students from object using for loop

// let marks = { 
//     ram : 94, 
//     shyam : 87,
//     ramu : 67
// }
// for (i=0; i<Object.keys(marks).length; i++){
//     console.log(" The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]] )
// }

// // Question 2 : same question but using for-in loop

// for (let key in marks){
//     console.log("The marks of " + key + " is " + marks[key] )
// }

// Question 3 : Write a program to print " try again " until the user enters the correct number

// let cn = 4;
// let i
// while(i!=4){
//     console.log("try again")
//     i= prompt("Enter a number")
    
// }
// console.log("You have entered the correct number")
 
// Question 4 : Find mean

const mean = (a,b,c,d)=>{
return(a+b+c+d)/4
}
console.log(mean(4,5,6,7))