"use strictly"
// Problem NO 6


// function ReverseString(a) {
//     if (typeof a !== 'string') return "This is not a string "

//     // let str= a.split('').reverse().join('')

//     let str = [...a].reverse().join('')

//     let result = ""
//     for (let i = a.length - 1; i >= 0; i--) {
//         // const element = a[i];
//         // result = result + a[i]
//         result += a[i]
//     }


//     // return str
//     return result

// }

// console.log(ReverseString("Satyam"));
// console.log(ReverseString(0123));


// Problem NO 7 find Factorial in math  

function findFactorial(number) {

    if (number <= -1) return "Only Allow the positive number"

    if (number <= 0) return "factorial is 1"
    let result = 1

    for (let i = 1; i <= number; i++) {
        // First why
        // result = result * i
        // Second why
        result *= i
    }
    return result
}
function findFactorialUsingRecursion(inputNumber) {
    // console.log(inputNumber);

    if (inputNumber < 0) return "Only Allow the positive number"

    if (inputNumber == 0 || inputNumber == 1) return 1

    return inputNumber * findFactorialUsingRecursion(inputNumber - 1)
    // return 4 * findFactorialUsingRecursion(4 - 1)  // 4*6 : 24
    // return 3 * findFactorialUsingRecursion(number - 1) // 3*2 : 6
    // return 2 * findFactorialUsingRecursion(number - 1) // 2*1 : 2
}


// console.log(findFactorial(0));
// console.log(findFactorial(4));
// console.log(findFactorial(-10));

console.log("findFactorialUsingRecursion");

// console.log(findFactorialUsingRecursion(0));
console.log(findFactorialUsingRecursion(4));
console.log(findFactorialUsingRecursion(5));
// console.log(findFactorialUsingRecursion(10));
// console.log(findFactorialUsingRecursion(-10));