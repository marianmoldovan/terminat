let Hello = Vue.component("hello", {
	template: '<p>{{ greeting }}</p>',
	data() {
		return {
      greeting: 'Hello World!'
		}
	}
})
