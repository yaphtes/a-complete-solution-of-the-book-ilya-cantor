// task 1
function f(x) {
    if (arguments.length == 0) {
        return 0;
    } else {
        return arguments.length;
    }
}

console.log( f(undefined) ); // 1
console.log( f() ); // 0



// task 2
function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log( sum(1, 2, 3, 15) );
