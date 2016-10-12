// task 1
// var date = new Date(2012, 1, 20, 3, 12);
// console.log(date);


// task 2
// var date = new Date(2012,0,3);  // 3 января 2012
//
// function getWeekDay(date) {
//     var days = ['вс', 'пн', 'вт', 'вт', 'чт', 'пт', 'сб'];
//
//     return days[date.getDay()];
// }
//
// console.log( getWeekDay(date) );      // Должно вывести 'вт'


// task 3
// var date = new Date(2012, 0, 3);  // 3 янв 2012
//
// function getLocalDay(date) {
//
//     var day = date.getDay();
//
//     if (day == 0) day = 7;
//
//     return day;
// }
//
// console.log( getLocalDay(date) );       // вторник, выведет 2


// task 4
// var date = new Date(2015, 0, 2);
//
// function getDateAgo(date, days) {
//     var dateCopy = new Date(date);
//
//     dateCopy.setDate( dateCopy.getDate() - days );
//
//     return dateCopy.getDate();
// }
//
// console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)


// task 5
// function getLastDayOfMonth(year, month) {
//     var date = new Date(year, month + 1, 0);
//
//     return date.getDate();
// }
//
// console.log( getLastDayOfMonth(2012, 1) );


// task 6
// function getSecondToday() {
//     var now = new Date(),
//         yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     return Math.round( (now - yesterday) / 1000 );
// }
//
// console.log( getSecondToday() );


// task 7
// function getSecondsToTomorrow() {
//     var now = new Date(),
//         tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//
//     return Math.round( (tomorrow - now) / 1000);
// }
//
// console.log( getSecondsToTomorrow() );


// task 8
// var d = new Date(2014, 0, 30); // 30 января 2014
//
// function formatDate(date) {
//     var dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;
//
//     var mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;
//
//     var yy = date.getFullYear() % 100;
//     if (yy < 10) yy = '0' + yy;
//
//     return dd + '.' + mm + '.' + yy;
// }
//
// console.log( formatDate(d) ); // '30.01.14'


// task 9
// function formatDate(date) {
//     var diff = new Date() - date;
//
//     if (diff < 1000) {
//         return 'только что';
//     }
//
//     var sec = Math.round(diff / 1000);
//
//     if (sec < 60) {
//         return sec + ' сек. назад';
//     }
//
//     var minutes = Math.round(diff / 60000);
//
//     if (minutes < 60) {
//         return minutes + ' минут назад';
//     }
//
//     var d = date;
//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ];
//
//     for (var i = 0; i < d.length; i++) {
//         d[i] = d[i].slice(-2);
//     }
//
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }
//
// console.log( formatDate(new Date(new Date - 1)) ); // "только что"
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
