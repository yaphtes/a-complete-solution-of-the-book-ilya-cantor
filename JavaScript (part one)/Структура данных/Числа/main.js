// task 1
// var a = Number( prompt('a?') );
// var b = Number( prompt('b?') );
//
// alert(a + b);



// task 2
// console.log( 6.35.toFixed(20) );
// console.log( 1.35.toFixed(20) );



// task 3
// var a = 0.1,
    // b = 0.2;
//variant 1
// console.log( (a + b).toFixed(2) + '$' );
//variant 2
// console.log( (a * 10 + b * 10) / 10 + '$' );



// task 5
// function getDecimal(x) {
//     var result = x - Number( x.toFixed(0) );
//     result = Math.round(result * 1000) / 1000;
//     if (result < 0) result = -result;
//     return result;
// }
//
// describe('тесты для задачи 5', function() {
//     it('Дробная часть числа 12.345 = 0.345', function() {
//         assert.equal( getDecimal(12.345), 0.345 );
//     });
//
//     it('Дробная часть числа 1.2 = 0.2', function() {
//         assert.equal( getDecimal(1.2), 0.2 );
//     });
//
//     it('Дробная часть числа -1.2 = 0.2', function() {
//         assert.equal( getDecimal(-1.2), 0.2 );
//     });
//
//     it('Дробная часть числа 12.5 = 0.5', function() {
//         assert.equal( getDecimal(12.5), 0.5 );
//     });
// });



// task 6
// function fib(n) {
//     var a = 1,
//         b = 2,
//         c = null;
//
//     for (var i = 4; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }
//
//
// function fibBinet(n) {
//     var FI = ( 1 + Math.sqrt(5) ) / 2;
//     return Math.round( Math.pow(FI, n) / Math.sqrt(5) );
// }
//
//
// describe('Тесты для шестой задачи', function() {
//
//     describe('С помощью функции fib(n)', function() {
//         it('7ое число Фибоначи равно 13', function() {
//             assert.equal(fib(7), 13);
//         });
//
//         it('4ое число Фибоначи равно 3', function() {
//             assert.equal(fib(4), 3);
//         });
//
//         it('10ое число Фибоначи равно 55', function() {
//             assert.equal(fib(10), 55);
//         });
//
//         it('22ое число Фибоначи равно 17711', function() {
//             assert.equal(fib(22), 17711);
//         });
//
//         it('31ое число Фибоначи равно 1346269', function() {
//             assert.equal(fib(31), 1346269);
//         });
//
//         it('17ое число Фибоначи равно 1597', function() {
//             assert.equal(fib(17), 1597);
//         });
//
//         it('77ое число Фибоначи равно 5527939700884757', function() {
//             assert.equal(fib(77), 5527939700884757);
//         });
//     });
//
//
//     describe('С помощью функции fibBinet(n)', function() {
//         it('7ое число Фибоначи равно 13', function() {
//             assert.equal(fibBinet(7), 13);
//         });
//
//         it('4ое число Фибоначи равно 3', function() {
//             assert.equal(fibBinet(4), 3);
//         });
//
//         it('10ое число Фибоначи равно 55', function() {
//             assert.equal(fibBinet(10), 55);
//         });
//
//         it('22ое число Фибоначи равно 17711', function() {
//             assert.equal(fibBinet(22), 17711);
//         });
//
//         it('31ое число Фибоначи равно 1346269', function() {
//             assert.equal(fibBinet(31), 1346269);
//         });
//
//         it('17ое число Фибоначи равно 1597', function() {
//             assert.equal(fibBinet(17), 1597);
//         });
//
//         it('77ое число Фибоначи равно 5527939700884757', function() {
//             assert.equal(fib(77), 5527939700884757);
//         });
//     });
//
// });



// task 7
// function getRandom(max) {
//     return Math.random() * max;
// }
//
// console.log( getRandom(10) );
// console.log( getRandom(20) );
// console.log( getRandom(30) );
// console.log( getRandom(40) );
// console.log( getRandom(50) );
// console.log( getRandom(60) );
// console.log( getRandom(70) );
// console.log( getRandom(80) );



// task 8
// function getRandom(from, to) {
//     return from + Math.random() * (to - from);
// }
//
// console.log( getRandom(10, 20) );
// console.log( getRandom(20, 30) );
// console.log( getRandom(30, 40) );
// console.log( getRandom(40, 50) );
// console.log( getRandom(50, 60) );
// console.log( getRandom(60, 70) );
// console.log( getRandom(70, 80) );
// console.log( getRandom(80, 90) );



// task 9
// function getRandomInteger(from, to) {
//     return Math.floor( from + Math.random() * (to + 1 - from) );
// }
//
// console.log( getRandomInteger(10, 20) );
// console.log( getRandomInteger(20, 30) );
// console.log( getRandomInteger(30, 40) );
// console.log( getRandomInteger(40, 50) );
// console.log( getRandomInteger(50, 60) );
// console.log( getRandomInteger(60, 70) );
// console.log( getRandomInteger(70, 80) );
// console.log( getRandomInteger(80, 90) );
