'use strict';

function CoffeeMachine(power) {
	// публичное свойство
	this.waterAmount = 0;

	// приватная переменная-константа
	var WATER_HEAT_CAPACITY = 4200;

	// приватное свойство
	var runId;

	// сохраним контекст
	var self = this;

	// приватный метод
	function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	// Привязка контекста не через self = this, а с помощью Function.prototype.bind();
	// function getBoilTime() {
	// 	return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	// }
	// getBoilTime = getBoilTime.bind(this);

	// приватный метод
	function onReady() {
		alert('Кофе готово!');
	}

	// публичный метод
	this.run = function() {
		runId = setTimeout( onReady, getBoilTime() );
	};

	this.stop = function() {
		clearTimeout(runId);
	};
}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
