'use strict';

var expr, res;

while (true) {
	expr = prompt("Введите выражение?", '2-');
	if (expr == null) break;

	try {
		res = eval(expr);
		if (isNaN(res)) {
			throw new Error("Результат неопределён");
		}

		break;
	} catch (e) {
		alert( "Ошибка: " + e.message + ", повторите ввод" );
	}
}

alert( res );
