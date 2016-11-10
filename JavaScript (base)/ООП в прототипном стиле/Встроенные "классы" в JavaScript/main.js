'use strict';

// task 1
// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// }
//
// function f() {
//   alert( "привет" );
// }
//
// f.defer(1000); // выведет "привет" через 1 секунду



// task 2
Function.prototype.defer = function(ms) {
	var f = this;
	return function() {
		var self = this;
		var args = arguments;

		setTimeout(function() {
			f.apply(self, args);
		}, ms);
	};
}

function f(a, b) {
	alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
