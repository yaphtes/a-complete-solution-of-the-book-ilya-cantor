// task 1
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5
//
//
// arrLength = arr.map(function(item, i, arr) {
//     return item.length;
// });



//task 2
// arr = [ 1, 2, 3, 4, 5 ]
//
// function getSums(arr) {
//     var result = [];
//
//     var lastItem = arr.reduce(function(sum, item) {
//         result.push(sum);
//         return sum + item;
//     });
//     result.push(lastItem);
//     return result;
// }
//
// console.log( getSums([1,2,3,4,5]) ); // = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
