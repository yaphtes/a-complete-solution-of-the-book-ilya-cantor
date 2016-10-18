// taksk 2
// function Calculator() {
//     this.read = function() {
//         this.a = Number( prompt('Please, input a') );
//         this.b = Number( prompt('Please, input b') );
//     };
//
//     this.sum = function() {
//         return this.a + this.b;
//     };
//
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
//
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма = " + calculator.sum() );
// alert( "Произведение = " + calculator.mul() );



// task 3
// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function() {
//         this.value += Number( prompt('Please, input next value') );
//     };
// }
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение



// task 4
function Calculator() {
    // default methods
    var methods = {
        '-': function(a, b) {
            return a - b;
        },
        '+': function(a, b) {
            return a + b;
        }
    };

    // custom methods
    this.addMethod = function(name, func) {
        methods[name] = func;
    };

    this.calculate = function(str) {
        var split = str.split(' '),
            a = Number( split[0] ),
            b = Number( split[2] ),
            op = split[1];

        if (!methods[op] || isNaN(a) || isNaN(b)) return NaN;

        return methods[op](a, b);
    };
}

var calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // => 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});

powerCalc.addMethod("/", function(a, b) {
  return a / b;
});

powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
console.log( result ); // => 8
