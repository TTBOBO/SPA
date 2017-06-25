var STORAGE_KEY = 'newlist'
export default {
	fetch: function () {
		return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
	},
	add: function (items) {
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	},
	delete: function (items) {
		window.localStorage.removeItem(items)
	}
}