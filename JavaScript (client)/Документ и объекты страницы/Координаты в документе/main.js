// task 1 (Область видимости для документа)
function getDocumentScroll() {
	return {
		top: window.pageYOffset,
		bottom: window.pageYOffset + document.documentElement.clientHeight,
		height: document.documentElement.scrollHeight
	};
}
