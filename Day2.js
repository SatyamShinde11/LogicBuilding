// Problem NO 4
// function IsEvenOrOdd(a) {
//     if (a === undefined) return "Provide Function Value")
//     const ans = a % 2
//     ans);
//     if (ans == 0 {
//         return "This is Even Number");
//     } else {
//         "This Is Odd Number");
//    }
// }
// IsEvenOrOdd(4)
// function IsEvenOrOdd2(a){
//     return a%2 === 0 ? "This is Even " : "This is Odd "
// }
// IsEvenOrOdd2(-1));


// Problem NO 5

//Example  3,1,6, -> 1
//Example  3-1,-6,9 -> -6



// function FindMinValue(a, b, c) {

//     if (typeof (a) === "string") return `This "${a}" Value is not valid`;
//     if (typeof (b) === "string") return `This "${b}" Value is not valid`;
//     if (typeof (c) === "string") return `This "${c}" Value is not valid`;


//     if (a <= b && a <= c) {
//         return a
//     } else if (b <= a && b <= c) {
//         return b
//     } else if (c <= a && c <= b) {
//         return c
//     }

// }
// function FindMinValue2(a, b, c) {
//     let smallestNumber = a
//     if (b < smallestNumber) {
//         smallestNumber = b
//     } else if (c < smallestNumber) {
//         smallestNumber = c
//     }
//     return smallestNumber
// }


// console.log(FindMinValue(3, 1, 6));
// console.log(FindMinValue(3 - 1, -6, 9));
// console.log(FindMinValue(3, 3, 3));
// // console.log(FindMinValue("3", 3, 3));

// console.log("FindMinValue2");

// console.log(FindMinValue2(3, 1, 6));
// console.log(FindMinValue2(3 - 1, -6, 9));
// console.log(FindMinValue2(3, 3, 3));


// function FindMin(arr) {
//     arr.forEach(element => {
//         element <= 1 ? " This Is The Min Value "+ element) : ""
//         // if (element <= 1) return "This Is The Min Value" +element);

//     });

// }

// function FindMin2(arr) {
//     arr.forEach(element => {
//         element <= -6 ? " This Is The Min Value "+ element) : ""
//         // if (element <= -6) return "This Is The Min Value "  element);

//     });

// }
// FindMin([3, 1, 6])
// FindMin2([3 - 1, -6, 9])