'use strict';

// task 1
function isEmpty(object) {
    var counter = 0;

    for (var key in object) {
        counter++;
    }

    if (counter == 0) return true;
    return false;
}


describe('isEmpty(object)', function() {
    it('При проверке пустого объекта, возвращает true', function() {
        assert.equal(isEmpty({}), true);
    });

    it('При проверке непустого объекта, возвращает false', function() {
        assert.equal(isEmpty({name: 'John'}), false);
    });
});



// task 2
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// var sum = 0;
// for (var key in salaries) {
//     sum += salaries[key];
// }
//
// console.log(sum);



// task 3
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// var max = 0,
//     name = '';
//
// for (var key in salaries) {
//     if (max < salaries[key]) {
//         max = salaries[key];
//         name = key;
//     }
// }
//
// if (!name) {
//     console.log('Нет сотрудников');
// } else {
//     console.log(name);
// }



// tsk 4
function isNumber(n)  {
    return !isNaN( parseFloat(n) ) && isFinite(n);
}


describe('isNumber', function() {
    it('25px не число', function() {
        assert.equal(isNumber('25px'), false);
    });

    it('-100 число', function() {
        assert.equal(isNumber('-100'), true);
    });

    it('100 число', function() {
        assert.equal(isNumber('100'), true);
    });

    it('NaN не число', function() {
        assert.equal(isNumber(NaN), false);
    });

    it('null не число', function() {
        assert.equal(isNumber(null), false);
    });

    it('true не число', function() {
        assert.equal(isNumber(true), false);
    });

    it('false не число', function() {
        assert.equal(isNumber(false), false);
    });
});


var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu);

function multiplyNumeric(object) {
    for (var key in object) {
        if ( isNumber(object[key]) ) object[key] *= 2;
    }
}

multiplyNumeric(menu);
console.log(menu);



// <<<<<<<<<< FUCKING CONSOLE >>>>>>>>>>
console.log('\n');
console.log('\n');

var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
}

console.log(time); // (*)
time.microsecond++; // (**)

console.log(time);
time.microsecond++;

console.log(time);
time.microsecond++;
