// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }
//
// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)


// task 1
// call, apply (option 1)
function sumArgs() {
    // Вызываем метод Function.prototype.reduce  в контексте arguments
    return [].reduce.call(arguments, function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
}
console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

// Одалживание метода (option 2)
function sumArgs2() {
    // Одолжили метод
    arguments.reduce = [].reduce;

    // Вызвали его
    return arguments.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
}
console.log( sumArgs2(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива



// task 2
function applyAll(func) {
    // Выполнить func с массивом аргументов. Массив аргументов вернется из: [].slice.call(arguments, 1)
    return func.apply( null, [].slice.call(arguments, 1) );
}


function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
console.log( applyAll(Math.max, 2, -2, 3) ); // -> 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -> -2
