'use strict';

// task 1
// function sumTo(x) {
//     var result = null;
//     for (var i = 1; i <= 100; i++) {
//         result += i;
//     }
//     return result;
// }
//
// var answer = sumTo(100);
// console.log(answer);'

// function sumTo(x) {
//     if (x == 1) return 1;
//     return x + sumTo(x - 1);
// }
//
// var answer = sumTo(100);
// console.log(answer);

// function sumTo(x) {
//     return x*(x + 1)/2;
// }
//
// var answer = sumTo(100);
// console.log(answer);


// task 2
// function calculateFactorial(x) {
//     if (x == 1) return 1;
//     return x * calculateFactorial(x -1);
// }
//
// var answer = calculateFactorial(100);
// console.log(answer);


// task 3
// function calculateFib(n) {
//     if (n == 3) {
//         return 2;
//     } else if (n == 2) {
//         return 1;
//     } else {
//         return calculateFib(n - 1) + calculateFib(n - 2);
//     }
// }
//
// var answer = calculateFib(7);
// console.log(answer);
//
// function calculateFib(n) {
//     var a = 1, b = 1, c;
//     for (var i = 3; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// var answer = calculateFib(77);
// console.log(answer);
