import Vue from 'vue'
import axios from 'axios'

// // Vue.prototype.$baseUrl = process.env.baseUrl
// // Vue.prototype.$http = axios

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})

let options = { }
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = process.env.baseUrl
}

export default axios.create(options)
