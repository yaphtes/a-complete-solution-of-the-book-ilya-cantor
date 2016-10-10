// task 1
function ucFirst(str) {
    var result = '';
    if (str == '') return '';
    result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
}


describe('Возвращает строку str с заглавным первым символом', function() {
    it('При аргументе \'вася\', возвращает \'Вася\'', function() {
        assert.equal(ucFirst('вася'), 'Вася');
    });

    it('при пустой строке \'\' ошибки нет, возвращается пустая строка \'\'', function() {
        assert.equal(ucFirst(''), '');
    });

});



// task 2
function checkSpam(str) {
    str = str.toLowerCase();
    if ( str.indexOf('xxx') != -1 || str.indexOf('viagra') != -1 ) return true;
    return false;
}


describe('При наличии спама: \'XXX\' или \'viagra\', возвращает true', function() {
    it('при аргументе: \'buy ViAgRA now\', возвращает true', function() {
        assert.equal(checkSpam('buy ViAgRA now'), true);
    });

    it('при аргументе: \'free xxxxx\', возвращает true', function() {
        assert.equal(checkSpam('free xxxxx'), true);
    });

    it('при аргументе: \'innocent rabbit\', возвращает false', function() {
        assert.equal(checkSpam('innocent rabbit'), false);
    });
});



//task 3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}


describe('При необходимости усекает строку str до maxlength', function() {
    it('Строка: \"Вот, что мне хотелось бы сказать на эту тему:\" будет усечена до: \"Вот, что мне хоте...\"', function() {
        assert.equal( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20), 'Вот, что мне хоте...' );
    });

    it('Строка: \"Всем привет!\" не будет усекаться', function() {
        assert.equal( truncate('Всем привет!', 20), 'Всем привет!' );
    });
});



// task 4
function extractCurrencyValue(str) {
    return Number( str.slice(1) );
}

describe('Выделяет число из строки $...', function() {
    it('Выделяет число 120 из строки $120', function() {
        assert.equal(extractCurrencyValue('$120'), 120);
    });
});
