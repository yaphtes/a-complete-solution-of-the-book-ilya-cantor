// function makeCounter() {
//   var currentCount = 1;
//
//   // возвращаемся к функции
//   function counter() {
//       return currentCount++;
//     }
//
//   // ...и добавляем ей методы!
//   counter.set = function(value) {
//     currentCount = value;
//   };
//
//   counter.reset = function() {
//     currentCount = 1;
//   };
//
//   return counter;
// }
//
// var counter = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// counter.set(5);
// alert( counter() ); // 5


// task 1
// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }
//
// console.log( sum(1)(2) ); // => 3
// console.log( sum(5)(-1) ); // => 4


// // task 2
// function makeBuffer() {
//     var container = '';
//
//     function buffer(value) {
//         if (arguments.length == 0) {
//             return container;
//         } else {
//             container += String(value);
//         }
//     }
//
//     //task 3
//     buffer.clear = function() {
//         container = '';
//     }
//
//     return buffer;
// }
//
// var buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// // получить текущее значение
// console.log( buffer() ); // Замыкания Использовать Нужно!
//
// buffer.clear();
// console.log( buffer() ); // => ''
//
// // создать второйф буффер
// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);
// // получить текущее значение
// console.log( buffer2() ); // '010'



// // task 4
// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];
//
// users.sort(byField('name'));
// users.forEach(function(user) {
//   console.log( user.name );
// }); // Вася, Маша, Петя
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//   console.log( user.name );
// }); // Маша, Вася, Петя
//
// function byField(field) {
//     return function(a, b) {
//         return (a[field] > b[field]) ? 1: -1;
//     }
// }



// // task 5
// function filter(arr, func) {
//     var result = [];
//
//     arr.forEach(function(item) {
//
//         if ( func(item) == true ) {
//             result.push(item);
//         }
//
//     });
//
//     return result;
// }
//
//
// function inBetween(a, b) {
//     return function(x) {
//         if (x >= a && x <= b) return true;
//     }
// }
//
//
// function inArray(arr) {
//     return function(x) {
//         return arr.indexOf(x) != -1;
//     }
// }
//
// var arr = [1, 2, 3, 4, 5, 6, 7];
//
// console.log(filter(arr, function(a) {
//   return a % 2 == 0;
// })); // 2,4,6
// console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
// console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2


// 
// // task 6
// function makeArmy() {
//   var shooters = [];
//
//   for (let i = 0; i < 10; i++) {
//     var shooter = function(x) {
//         console.log(i);
//     };
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }
//
// var army = makeArmy();
//
// army[0](); // => 0
// army[5](); // => 5
