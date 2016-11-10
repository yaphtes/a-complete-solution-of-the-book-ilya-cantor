'use strict';

// task 1
var animal = {
	jumps: null
};
var rabbit = {
	jumps: true
};

// rabbit.__proto__ = animal;
Object.setPrototypeOf(rabbit, animal);

alert( rabbit.jumps ); // true (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // null (2)

delete animal.jumps;

alert( rabbit.jumps ); // undefined (3)



// task 3
var head = {
	glasses: 1
};

var table = {
	pen: 3
};
Object.setPrototypeOf(table, head);

var bed = {
	sheet: 1,
	pillow: 2
};
Object.setPrototypeOf(bed, table);

var pockets = {
	money: 2000
};
Object.setPrototypeOf(pockets, bed);
alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined
