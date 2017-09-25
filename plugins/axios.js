import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$baseUrl = process.env.baseUrl
Vue.prototype.$http = axios
