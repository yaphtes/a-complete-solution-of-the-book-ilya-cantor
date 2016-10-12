// task 1
// say('Вася'); // Что выведет? Не будет ли ошибки?
//
// var phrase = 'Привет';
//
// function say(name) {
//   alert( name + ", " + phrase );
// }
// // => 'Вася, undefined'



// task 2
// var value = 0;
//
// function f() {
//
//   if (1) {
//     value = true;
//   } else {
//     var value = false;
//   }
//
//   alert( value );
// }
//
// f(); // => true



// task 3
// function test() {
//
//   alert( window );
//
//   var window = 5;
//
//   alert( window );
// }
//
// test(); // => undefined, 5



// task 4
// var a = 5
//
// (function() {
//   alert(a)
// })() // <-- error!



// task 5
// function makeCounter() {
//   var currentCount = 1;
//
//   return function() {
//     var currentCount;
//     // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//   };
// }
// // никак не получить, локальная переменная полностью перекрывает внешнюю



// task 6
// var currentCount = 1;
//
// function makeCounter() {
//   return function() {
//     return currentCount++;
//   };
// }
//
// var counter = makeCounter();
// var counter2 = makeCounter();
//
// alert( counter() ); // => 1
// alert( counter() ); // => 2
//
// alert( counter2() ); // => 3
// alert( counter2() ); // => 4
