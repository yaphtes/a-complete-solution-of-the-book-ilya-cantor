// task 1 (Полифилл для pageYOffset в IE8)
if (!window.pageYOffset) {
	Object.defineProperty(window, pageYOffset, {
		get: function() {
			return document.body.scrollTop || document.documentElement.scrollTop;
		}
	});
}
