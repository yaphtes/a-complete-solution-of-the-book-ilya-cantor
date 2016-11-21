// task 1 (Найдите координаты точки в документе)
var field = document.getElementById('field');

console.log(
	field.getBoundingClientRect().left + ':' + field.getBoundingClientRect().top
); // 1

console.log(
	field.getBoundingClientRect().right + ':' + field.getBoundingClientRect().bottom
); // 2

console.log(
	(field.getBoundingClientRect().left + field.clientLeft) + ':' + (field.getBoundingClientRect().top + field.clientTop)
); // 3

console.log(
	(field.getBoundingClientRect().left + field.clientLeft + field.clientWidth) + ':' + (field.getBoundingClientRect().top + field.clientTop + field.clientHeight)
); // 4
