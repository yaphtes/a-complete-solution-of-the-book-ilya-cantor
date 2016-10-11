// taks 1
// var obj = {
//   className: 'open menu'
// }
//
// function addClass(obj, str) {
//     var classNames = obj.className.split(' ');
//
//     for (var i = 0; i < classNames.length; i++) {
//         if ( classNames.indexOf(str) == -1 ) classNames.push(str);
//     }
//
//     obj.className = classNames.join(' ');
// }
//
// addClass(obj, 'new'); // obj.className='open menu new'
// console.log(obj);
// addClass(obj, 'open'); // без изменений (класс уже существует)
// console.log(obj);
// addClass(obj, 'me'); // obj.className='open menu new me'
// console.log(obj);



// taks 2
// function camelize(str) {
//     var arr = str.split('-');
//
//     for (var i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//
//     return arr.join('');
// }
//
// console.log( camelize("background-color") );
// console.log( camelize("list-style-image") );
// console.log( camelize("-webkit-transition") );



// taks 3
// var obj = {
//     className: 'my menu menu'
// };
//
// function removeClass(obj, cls) {
//     var classNames = obj.className.split(' ');
//
//     for (var i = 0; i < classNames.length; i++) {
//         if (classNames[i] == cls) {
//             classNames.splice(i, 1);
//             i--;
//         }
//     }
//
//     obj.className = classNames.join(' ');
// }
//
// console.log(obj);
// removeClass(obj, 'menu');
// console.log(obj);



// task 4
// var arr = [5, 3, 8, 1];
//
// function filterRangeInPlace(arr, a, b) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log(arr); // массив изменился: остались [3, 1]



// task 5
// var arr = [5, 2, 1, -10, 8];
//
// arr.sort(function (a, b) {
//     return b - a;
// });
//
// console.log( arr ); // 8, 5, 2, 1, -10



// task 6
// var arr = ["HTML", "JavaScript", "CSS"],
//     arrSorted = [];
//
// arrSorted.slice().sort();
//
// console.log( arrSorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)



// task 7
// var arr = [1, 2, 3, 4, 5];
//
// arr.sort(function() {
//     return Math.random() - 0.5;
// });
//
// console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]



// task 8
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
//
// var people = [ vasya , masha , vovochka ];
//
// people.sort(function(personA, personB) {
//     return personA.age - personB.age;
// });
//
// for (var i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }



// task 9
// var list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// option 1
// function printList(list) {
//     var tmp = list;
//
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
// }
//
//
//option 2
// function printList(list) {
//     var tmp = list;
//
//     console.log(tmp.value);
//
//     if (tmp.next) {
//         printList(tmp.next)
//     }
// }
//
//
//option 3
// function printList(list) {
//     var tmp = list;
//
//
//     if (tmp.next) {
//         printList(tmp.next)
//     }
//
//     console.log(tmp.value);
// }
//
//
// option 4
// function printList(list) {
//     var arr = [];
//     var tmp = list;
//
//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }
//
//     arr.reverse();
//
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// printList(list);



// task 10
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//
// function aclean(arr) {
//     var obj = {};
//
//     for (var i = 0; i < arr.length; i++) {
//         var sorted = arr[i].toLowerCase().split('').sort().join('');
//
//         obj[sorted] = arr[i];
//     }
//
//     var result = [];
//     for (var key in obj) {
//         result.push(obj[key]);
//     }
//
//     return result;
// }
//
// console.log( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"



// task 11
function unique(arr) {
    var result = [];

    outer:
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        for (var j = 0; j < result.length; j++) {
            if (result[j] == str) continue outer;
        }
        result.push(str);
    }
    return result;
}

var strings = [
    "кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()
