import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    version: {
      type: '',
      content: '',
      more: 0
    },
    versionObj: {
      title: '',
      content: ''
    }
  },
  mutations: {
    updateVersion (state, newVersion) {
      this.state.version.type = newVersion.type
      this.state.version.content = newVersion.content
      this.state.version.more = newVersion.more
    },
    updateVersionObj (state, newVersionObj) {
      this.state.versionObj = newVersionObj
    }
  }
})

export default store
