'use strict';

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;

	function getBoilTime() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error('значение должно быть положительным');
		} else if (amount > capacity) {
			throw new Error('Нельзя налить воды больше, чем ' + capacity);
		} else {
			waterAmount = amount;
		}
	};

	this.getWaterAmount = function() {
		return waterAmount;
	}

	function onReady() {
		alert('Кофе готово!');
	}

	this.run = function() {
		setTimeout( onReady, getBoilTime() );
	};
}

var coffeeMachine = new CoffeeMachine(100000, 500);
coffeeMachine.setWaterAmount(450);
alert( coffeeMachine.getWaterAmount() );
