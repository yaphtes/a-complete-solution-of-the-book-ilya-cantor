// task 1
document.getElementById('age-table').getElementsByTagName('label');

document.getElementById('age-table').getElementsByTagName('td')[0];
// в современных браузерах можно одним запросом:
var result = document.querySelector('#age-table td');

document.getElementsByTagName('form')[1];

document.querySelector('form[name="search"]');

document.querySelector('form[name="search"] input')

document.getElementsByName("info[0]")[0];

document.querySelector('form[name="search-person"] [name="info[0]"]');



// task 2
let lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++ {
	console.log(lis[i].firstChild);
	var length = lis[i].getElementsByTagName('li').length;
}
