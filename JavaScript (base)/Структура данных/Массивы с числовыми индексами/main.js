'use strict';

// task 1
// var elt = arr[arr.length - 1];



// task 2
// var goods = [];
// goods.push('Компьютер');



// task 3
// var styles = ['Джаз', 'Блюз'];
// console.log(styles);
//
// styles.push('Рок-н-Ролл');
// console.log(styles);
//
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
//
// console.log( styles.shift() );
// console.log(styles);
//
// styles.unshift('Реп', 'Регги');
// console.log(styles);
//
//
//
// // task 4
// function getRandomInt(min, max) {
//     return Math.floor( Math.random() * (max + 1 - min) );
// }
//
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// console.log( arr[getRandomInt(0,3)] );



// task 5
// var values = [];
//
// while (true) {
//     var val = prompt('please, input number');
//
//     if ( isNaN(val) || val == '' || val == null) break;
//     values.push(val);
// }
//
// var sum = 0;
// for (var i = 0; i < values.length; i++) {
//     sum += Number( values[i] );
// }
//
// console.log('Сумма элементов массива values : ' + sum);



// task 7
// var arr = ["test", 2, 1.5, false];
//
// function find(arr, value) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === value) return i;
//     }
//     return -1;
// }
//
// console.log( find(arr, "test") ); // 0
// console.log( find(arr, 2) ); // 1
// console.log( find(arr, 1.5) ); // 2
// console.log( find(arr, 0) );// -1



// task 8
// var arr = [5, 4, 3, 8, 0];
//
// function filterRange(arr, a, b) {
//     var result = [];
//
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] <= b && arr[i] >= a) result.push(arr[i]);
//     }
//
//     return result;
// }
//
// var filtered = filterRange(arr, 3, 5);
// console.log(filtered);



// task 9
// function reshetoErato(n) {
//
//     var arr = [];
//     for (var i = 2; i <= n; i++) {
//         arr[i] = true;
//     }
//
//     var p = 2;
//     while (true) {
//         for (var i = p * 2; i < arr.length; i += p) {
//             arr[i] = false;
//         }
//
//         for (var i = p + 1; i < arr.length; i++) {
//             if (arr[i]) break;
//         }
//         p = i;
//
//         if ( Math.pow(p, 2) >= n ) break;
//     }
//
//     var sum = 0;
//     for (var i = 0; i <= arr.length; i++) {
//         if (arr[i]) sum += i;
//     }
//
//     return sum;
// }
//
// console.log( reshetoErato(100) );  // => 1060



// taks 10
// function getMaxSubSum(arr) {
//     var maxSum = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//         var tmpSum = 0;
//         for (var j = i; j < arr.length; j++) {
//             tmpSum += arr[j];
//             maxSum = Math.max(maxSum, tmpSum);
//         }
//     }
//
//     return maxSum;
// }
//
//
// console.log( getMaxSubSum([-1, 2, 3, -9]) );       // = 5 (сумма выделенных)
// console.log( getMaxSubSum([2, -1, 2, 3, -9]) );    // = 6
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );   // = 11
// console.log( getMaxSubSum([-2, -1, 1, 2]) );       // = 3
// console.log( getMaxSubSum([100, -9, 2, -3, 5]) );  // = 100
// console.log( getMaxSubSum([1, 2, 3]) );             // = 6 (неотрицательные - берем всех)
