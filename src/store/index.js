import Vue from 'vue'
import Vuex from 'vuex'
import recent from './modules/recent'
import whole from './modules/whole'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    recent,
    whole
  },
  strict: debug
})

export default store
