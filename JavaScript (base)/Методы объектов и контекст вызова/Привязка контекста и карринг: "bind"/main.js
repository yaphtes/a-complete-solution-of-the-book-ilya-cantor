// task 1
// "use strict";
//
// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         alert( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         alert( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(user), this.loginFail.bind(user));
//     }
// };
//
// user.checkPassword();



// task 2
// option 1
// "use strict";
//
// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: 'Василий',
//     password: '12345',
//
//     // метод для вызова из ask
//     loginDone: function(result) {
//         alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//     },
//
//     checkPassword: function() {
//         ask( "Ваш пароль?", this.password, this.loginDone.bind(user, true), this.loginDone.bind(user, false) );
//     }
// };
//
// var vasya = user;
// user = null;
// vasya.checkPassword();
//
// option 2
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        var self = this
        ask( "Ваш пароль?", this.password,
            function() {
                self.loginDone(true);
            },
            function() {
                self.loginDone(false);
            }
        );
    }
};

var vasya = user;
user = null;
vasya.checkPassword();
