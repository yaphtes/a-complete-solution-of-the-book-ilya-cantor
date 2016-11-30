// task 1 (Автовычисление процентов по вкладу)
let calculatorElem     = document.forms.calculator;
let sumElem            = calculatorElem.money;
let periodsElem        = calculatorElem.months;
let capitalizationElem = calculatorElem.capitalization;

let startValue     = Number(calculatorElem.money.value);
let periods        = Number( periodsElem[periodsElem.selectedIndex].value );
let capitalization = capitalizationElem.checked;
const RATE         = Number( (12 / 100).toFixed(2) );

let heightAfterElem = document.getElementById('height-after');
let moneyBefore = document.getElementById('money-before');
let moneyAfter = document.getElementById('money-after');


function getProfit(startValue, periods, capitalization) {
	let result;

	if (capitalization) {
		console.log('Расчет с капитализацией:');
		result = Math.round( startValue * Math.pow((1 + RATE / 12), periods) );
	} else {
		console.log('Расчет без капитализации:');
		let profit = startValue * RATE / 12 * periods;

		result = startValue + profit;
	}

	moneyAfter.textContent = result;
	moneyBefore.textContent = sumElem.value;

	let height = result / startValue * 100;
	heightAfterElem.style.height = height + 'px';
}
getProfit(startValue, periods, capitalization);


sumElem.oninput = function(event) {
	let key = event.key;

	startValue = Number(this.value);
	getProfit(startValue, periods, capitalization);
};


sumElem.onkeypress = function(event) {
	let key = event.key;

	if (!Number.isInteger(+key)) event.preventDefault();
}


periodsElem.onchange = function() {
	let selected = periodsElem[periodsElem.selectedIndex];
	periods = Number( selected.value );
	getProfit(startValue, periods, capitalization);
};


capitalizationElem.onchange = function(event) {
	capitalization = capitalizationElem.checked;
	getProfit(startValue, periods, capitalization);
};
