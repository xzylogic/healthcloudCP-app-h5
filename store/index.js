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
    updateMore (state, newMore) {
      this.state.version.more = newMore
    },
    updateContent (state, newContent) {
      this.state.version.content.push(...newContent)
    },
    updateVersionObj (state, newVersionObj) {
      this.state.versionObj = newVersionObj
    }
  }
})

export default store
