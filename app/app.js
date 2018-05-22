'use strict'

const app = new Vue({
  el: '#app',
  template: '<div id="app"><hello></hello></div>',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    'hello': Hello
  }
})
