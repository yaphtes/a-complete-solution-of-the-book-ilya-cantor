// task 1
// function printNumbersInterval() {
// 	var i = 1;
//
// 	var id = setInterval(function() {
// 		if (i == 20) clearInterval(id);
// 		console.log(i++);
// 	}, 100);
// }
//
// printNumbersInterval();



// task 2
// function printNumbersTimeoutRecursive() {
// 	var j = 1;
//
// 	var id = setTimeout(function run() {
// 		if (j < 20) setTimeout(run, 100);
// 		console.log(j++);
// 	}, 100);
// }
//
// printNumbersTimeoutRecursive();



// task 7
// function delay(f, ms) {
// 	return function() {
// 		var self = this;
// 		var args = arguments;
//
// 		setTimeout(function() {
// 			f.apply(self, args);
// 		}, ms);
// 	};
// }
//
// function f(x) {
// 	alert( x );
// }
//
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд



// task 8
// function debounce(f, ms) {
// 	var state = null;
//
// 	var COLDOWN = 1;
//
// 	return function() {
// 		if (state) return;
//
// 		f.apply(this, arguments);
//
// 		state = COLDOWN;
// 		setTimeout(function() {
// 			state = null;
// 		}, ms);
// 	};
// }
//
// function f(value) { return value; }
//
// var f = debounce(f, 1000);
//
// f(1); // выполнится сразу же
// f(2); // игнор
//
// setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
// setTimeout( function() { f(4) }, 1100); // выполнится
// setTimeout( function() { f(5) }, 1500); // игнор



// task 9
/**
 * Декоратор - возвращает обертку над f, передающий вызов f не чаще,
 * чем раз в ms милисекунд. Последний вызов гарантированно обработается!
 * @param  {function} f  затормаживаемая функция
 * @param  {number} ms количество миллисекунда
 * @return {function} wrapper декоратор
 */
function throttle(f, ms) {
	var isThrottled = false,
		savedArgs,
		savedThis;

	function wrapper() {
		if (isThrottled === true) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		f.apply(this, arguments);
		isThrottled = true;

		setTimeout(function() {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedArgs, savedArgs);
				savedArgs = null;
				savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}


var f = function(a) {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
