'use strict';

function CoffeeMachine(power, capacity) {
	// Унаследовали Machine
	// Machine.call(this);
	Machine.apply(this, arguments);

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
		if (this._enable == true) {
			timerId = setTimeout(function() {
				timerId = null;
				onReady();
			}, getBoilTime());
		} else {
			throw new Error('ошибка, кофеварка выключена!');
		}
	};

	this.isRunning = function() {
		return Boolean(timerId);
	};

	var parentDisable = this.disable;
	this.disable = function() {
		parentDisable.call(this);
		clearTimeout(timerId);
	};
}

function Machine(power) {
	this._power = power;
	this._enable = false;

	this.enable = function() {
		this._enable = true;
	};

	this.disable = function() {
		this._enable = false;
	};
}

function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];
	var maxItems = this._power / 100;

	this.filterFood = function(fn) {
		return food.filter(fn);
	};

	this.removeFood = function(item) {
		var index = food.indexOf(item);
		if (index != -1) {
			food.splice(index, 1);
		}
	};

	this.addFood = function(...items) {
		if (this._enable == false) {
			throw new Error('Нельзя добавить еду в выключенный холодильник');
		} if (food.length + arguments.length >= maxItems) {
			throw new Error(`Нельзя добавить больше, чем ${maxItems} еды`);
		} else {
			food.push(...items);
		}
	};

	this.getFood = function() {
		var result = food;
		return result;
	};

	var parentDisable = this.disable;
	this.disable = function() {
		if (food.length) {
			throw new Error('Ошибка, в холодильнике есть еда');
		}
		parentDisable.call(this);
	};
}

// task 1
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!


// task 2
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет

// task 3
// // создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

// task 4
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

// task 5
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда
