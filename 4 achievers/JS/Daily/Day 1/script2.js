//
// logical operators => && , || , !  { and , or , not operator }

// let a = 10;
// let b = 30;
// let c = 40;
// let result = a<b && a<c;
// console.log("is a is smallest number of all three: "  +  result)

// let a = 11;
// let b = 2;
// //  ques => multiplication is odd or even
// console.log(a%2==0 || b%2==0)


//
// ques=> take input from user and check it is even or odd

// let num = prompt("enter a number")
// num = Number(num)
// let result = num%2==0
// console.log("number is even :" + result)

// ques=> number is divisible by 3 and 5

let num = prompt("Enter a number to check whether it is divisible by both 3 and 5")
num = Number(num)
let result = num%3==0 && num%5==0
console.log("number is divisible by 3 and 5 both:" + result)











//
// post increment and post decrement (unary operator)

// let a = 10
// let b = ++a + a++ + ++a + a++
// console.log(a)
// console.log(b)

// post => first it uses the value and then it uodates
// pre => first increase the value and then use it