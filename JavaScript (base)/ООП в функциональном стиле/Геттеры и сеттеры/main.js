'use strict';

function CoffeeMachine(power, capacity) {
	var waterAmount         = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var timerId;

	function getBoilTime() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	function onReady() {
		alert('Кофе готово!');
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

	this.setOnReady = function(newOnReady) {
		onReady = newOnReady;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	this.getPower = function() {
		return power;
	};

	this.addWater = function(amount) {
		this.setWaterAmount(waterAmount + amount);
	};

	this.run = function() {
		timerId = setTimeout(function() {
			timerId = null;
			onReady();
		}, getBoilTime());
	};

	this.isRunning = function() {
		return Boolean(timerId);
	};
}

// task 5
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
	alert( "После: " + coffeeMachine.isRunning() ); // После: false
});

// task 4
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);
//
// coffeeMachine.setOnReady(function() {
// 	var amount = coffeeMachine.getWaterAmount();
// 	alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });
//
// coffeeMachine.run();

// task 3
// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();

// var coffeeMachine = new CoffeeMachine(100000, 500);
// coffeeMachine.setWaterAmount(450);
// alert( coffeeMachine.getWaterAmount() );


// task 2
// function User() {
// 	var firstName = '';
// 	var surname = '';
//
// 	this.setFirstName = function(value) {
// 		firstName = value;
// 	};
//
// 	this.setSurname = function(value) {
// 		surname = value;
// 	};
//
// 	this.getFullName = function() {
// 		return `${firstName} ${surname}`;
// 	};
// }
//
// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
//
// alert( user.getFullName() ); // Петя Иванов
