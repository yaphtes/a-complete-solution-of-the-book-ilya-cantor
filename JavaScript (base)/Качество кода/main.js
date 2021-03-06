//  <<<<<<<<<< ОБЩАЯ ИНФОРМАЦИЯ ПО ТЕСТАМ >>>>>>>>>>
// BDD – поведенческие тесты кода
//
// Мы рассмотрим методику тестирования, которая входит в BDD – Behavior Driven Development. Подход BDD давно и с успехом
// используется во многих проектах.
//
// BDD – это не просто тесты. Это гораздо больше.
//
// Тесты BDD – это три в одном: И тесты, И документация, И примеры использования.
//
//
//
//  <<ПОТОК РАЗРАБОТИ>>
//  Как правило, поток разработки таков:
//
// Пишется спецификация, которая описывает самый базовый функционал.
// Делается начальная реализация.
// Для проверки соответствия спецификации мы задействуем фреймворк (в нашем случае Mocha). Фреймворк запускает все тесты it
// и выводит ошибки, если они возникнут. При ошибках вносятся исправления.
// Спецификация расширяется, в неё добавляются возможности, которые пока, возможно, не поддерживаются реализацией.
// Идём на пункт 2, делаем реализацию. И так «до победного конца».
// Разработка ведётся итеративно: один проход за другим, пока спецификация и реализация не будут завершены.
//
// В нашем случае первый шаг уже завершён, начальная спецификация готова, хорошо бы приступить к реализации. Но перед этим
//  проведём «нулевой» запуск спецификации, просто чтобы увидеть, что уже в таком виде, даже без реализации – тесты работают.
//
//
//
//  <<САМЫЕ ВОССТРЕБОВАННЫЕ assert>>
//  assert(value) – проверяет что value является true в логическом контексте.
// assert.equal(value1, value2) – проверяет равенство value1 == value2.
// assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
// assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
// assert.isTrue(value) – проверяет, что value === true
// assert.isFalse(value) – проверяет, что value === false
// …более полный список – в документации(http://chaijs.com/api/assert/)
//
//
//
describe("pow", function() {
    describe("возводит x в степень n", function() {
        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });


  describe("возводит x в степень 0", function() {

      it("при возведении 0 в 0 степень результат NaN", function() {
        assert(isNaN( pow(0, 0) ), "результат не NaN");
      });


        function makeTest(x) {
            it("при возведении " +  x + " в степень 0 результат 1", function() {
                assert.equal( pow(x, 0), 1);
            });
        }

        for (var i = 1; i <= 20; i++) {
            makeTest(i);
        }

    });


    it("при возведении в отрицательную степень результат NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
    });
});

describe('some test', function() {
    it('some one test', function() {

    });
});
