// task 1
var leader = {
	name: "Василий Иванович",
	age: 35
};

leader = JSON.stringify(leader);
console.log(leader);

leader = JSON.parse(leader);
console.log(leader);
