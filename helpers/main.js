/**
 * Возвращает случайное целое число от min до max включительно
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max + 1 - min));
}


/**
 * Проверяет, является ли n числом
 * @param  {number} n
 * @return {Boolean}
 */
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
