// task 1
// function work(a) {
//     /* ... */ // work - произвольная функция, один аргумент
// }
//
// function makeLogging(f, log) {
//     return function(x) {
//         log.push(x);
//         return f.call(this, x);
//     }
// }
//
// var log = [];
// work = makeLogging(work, log);
//
// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log
//
// for (var i = 0; i < log.length; i++) {
//     console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }



// task 2
// function work(a, b) {
//     console.log( a + b ); // work - произвольная функция
// }
//
// function makeLogging(f, log) {
//     return function() {
//         log.push( [].slice.call(arguments) );
//         return f.apply(this, arguments);
//     }
// }
//
// var log = [];
// work = makeLogging(work, log);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (var i = 0; i < log.length; i++) {
//     var args = log[i]; // массив из аргументов i-го вызова
//     console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }



// task 3
function f(x) {
	return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
	var cache = {};

	return function(x) {
		if ( !(x in cache) ) {
			cache[x] = f.call(this, x);
		}

		return cache[x];
	};
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение
