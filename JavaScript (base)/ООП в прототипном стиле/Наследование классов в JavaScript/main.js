'use strict';
// СТРУКТУРА НАСЛЕДОВАНИЯ ПОЛНОСТЬЮ

// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

// Методы хранятся в прототипе
Animal.prototype.run = function() {
	alert(this.name + " бежит!")
}

// --------- Класс-потомок -----------
// Конструктор потомка
function Rabbit(name) {
	Animal.apply(this, arguments);
}

// Унаследовать
Rabbit.prototype = Object.create(Animal.prototype);

// Желательно и constructor сохранить
Rabbit.prototype.constructor = Rabbit;

// Методы потомка
Rabbit.prototype.run = function() {
	// Вызов метода родителя внутри своего
	Animal.prototype.run.apply(this);
	alert(this.name + " подпрыгивает!");
};

// Готово, можно создавать объекты
var rabbit = new Rabbit('Кроль');
rabbit.run();



// task 1
// function Animal(name) {
// 	this.name = name;
// }
//
// Animal.prototype.walk = function() {
// 	alert("ходит " + this.name);
// };
//
// function Rabbit(name) {
// 	this.name = name;
// }
// Rabbit.prototype = Object.create(Animal.prototype);
//
// Rabbit.prototype.walk = function() {
// 	alert("прыгает! и ходит: " + this.name);
// };



// task 2
// function Animal(name) {
// 	this.name = name;
// }
//
// Animal.prototype.walk = function() {
// 	alert("ходит " + this.name);
// }
//
// function Rabbit(name) {
// 	Animal.apply(this, arguments);
// }
// Rabbit.prototype = Object.create(Animal.prototype);
//
// Rabbit.prototype.walk = function() {
// 	alert("прыгает " + this.name);
// };
//
// var rabbit = new Rabbit("Кроль");
// rabbit.walk();



// task 3
// function Clock(options) {
// 	this._template = options.template;
// }
//
// Clock.prototype._render = function render() {
// 	var date = new Date();
//
// 	var hours = date.getHours();
// 	if (hours < 10) hours = '0' + hours;
//
// 	var min = date.getMinutes();
// 	if (min < 10) min = '0' + min;
//
// 	var sec = date.getSeconds();
// 	if (sec < 10) sec = '0' + sec;
//
// 	var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
//
// 	console.log(output);
// };
//
// Clock.prototype.stop = function() {
// 	clearInterval(this._timer);
// };
//
// Clock.prototype.start = function() {
// 	this._render();
// 	var self = this;
// 	this._timer = setInterval(function() {
// 		self._render();
// 	}, 1000);
// };



// task 4
// function ExtendedClock(options) {
// 	Clock.apply(this, arguments);
// 	this._precision = +options.precision || 1000;
// }
//
// ExtendedClock.prototype = Object.create(Clock.prototype);
//
// ExtendedClock.prototype.start = function() {
// 	this._render();
// 	var self = this;
// 	this._timer = setInterval(function() {
// 		self._render();
// 	}, this._precision);
// };



// task 5
// function AnimatingMenu() {
// 	Menu.apply(this, arguments);
// }
//
// AnimatingMenu.prototype = Object.create(Menu.prototype);
//
// AnimatingMenu.prototype.STATE_ANIMATING = 2;
//
// AnimatingMenu.prototype.open = function() {
// 	var self = this;
//
// 	this._state = this.STATE_ANIMATING;
//
// 	this._timer = setTimeout(function() {
// 		Menu.prototype.open.call(self);
// 	}, 1000);
// };
//
// AnimatingMenu.prototype.close = function() {
// 	clearTimeout(this._timer);
// 	Menu.prototype.close.apply(this);
// };
//
// AnimatingMenu.prototype._stateAsString = function() {
//
// 	switch (this._state) {
// 		case this.STATE_ANIMATING:
// 			return 'анимация';
//
// 		default:
// 			return Menu.prototype._stateAsString.call(this);
// 	}
// };
//
// // тест, использование..
// var menu = new AnimatingMenu();
//
// menu.showState(); // закрыто
//
// menu.open();
// menu.showState(); // анимация
//
// setTimeout(function() { // через 1 секунду
// 	menu.showState(); // открыто
//
// 	menu.close();
// 	menu.showState(); // закрыто
// }, 1000);



// task 6
// function Animal() {}
//
// function Rabbit() {}
// Rabbit.prototype = Object.create(Animal.prototype);
//
// var rabbit = new Rabbit();
//
// alert( rabbit.constructor == Rabbit ); // false
// alert( rabbit.constructor == Animal ); // true
