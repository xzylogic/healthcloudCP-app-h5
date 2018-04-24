import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    version: {
      scrollTop: 0,
      type: '',
      content: '',
      more: 0,
      errorMsg: ''
    },
    versionObj: {
      title: '',
      content: '',
      errorMsg: ''
    }
  },
  mutations: {
    updateVersion (state, newVersion) {
      this.state.version.type = newVersion.type
      this.state.version.content = newVersion.content
      this.state.version.more = newVersion.more
    },
    updateScroll (state, newScrollTop) {
      this.state.version.scrollTop = newScrollTop
    },
    updateMore (state, newMore) {
      this.state.version.more = newMore
    },
    updateContent (state, newContent) {
      this.state.version.content.push(...newContent)
    },
    updateVersionError (state, newErrorMsg) {
      this.state.version.errorMsg = newErrorMsg
    },
    updateVersionObj (state, newVersionObj) {
      this.state.versionObj.title = newVersionObj.title
      this.state.versionObj.content = newVersionObj.content
    },
    updateErrorMsg (state, newErrorMsg) {
      this.state.versionObj.errorMsg = newErrorMsg
    }
  }
})

export default store
