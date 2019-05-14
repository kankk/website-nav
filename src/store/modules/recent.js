import {
  GET_RECENT_LIST,
  SET_RECENT_LIST
} from '../mutation-types'

const state = {
  list: []
}

const getters = {
  recentList: state => state.list
}

const actions = {
  initRecentList ({ commit, state }) {

  },
  setRecentList ({ commit, state }) {

  },
  addRecentItem ({ commit, state }) {

  }
}

const mutations = {
  [GET_RECENT_LIST] (state) {

  },
  [SET_RECENT_LIST] (state, list = []) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
