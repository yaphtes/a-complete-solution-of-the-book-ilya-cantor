'use strict';

// task 1
// function CoffeeMachine(power) {
// 	this._power = 0;
// 	this._waterAmount = 0;
// }
//
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype._getTimeToBoil = function() {
// 	return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };
//
// CoffeeMachine.prototype.run = function() {
// 	setTimeout(function() {
// 		alert('Кофе готов!');
// 	}, this._getTimeToBoil());
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
// 	this._waterAmount = amount;
// };



// task 2
function Hamster() {
	this.food = [];
}

// Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
	this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert(speedy.food.length); // 2
alert(lazy.food.length); // 2 (!??)
