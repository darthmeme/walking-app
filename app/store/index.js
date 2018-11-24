import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: [],
    trackingStatus: 'initial'
  },
  mutations: {
    addDataToPoints (state, data) {
      state.points.push(data)
    }
  }
})
