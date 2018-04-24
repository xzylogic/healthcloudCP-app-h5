import axios from 'axios'
import config from '../nuxt.config.js'

axios.defaults.baseURL = config.env.baseUrl

export default axios
