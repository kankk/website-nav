import {
  ADD_RECENT_ITEM,
  RESET_RECENT_LIST
} from '../mutation-types'

const RECENT_LIST_KEY = 'RECENT_LIST_KEY'
const RECENT_LIST_MAX = 5

// 列表缓存到本地
const setListToLocal = (list) => {
  window.localStorage.setItem(RECENT_LIST_KEY, JSON.stringify(list))
}

// 初始化列表
const initRecentList = () => {
  let _list = []
  const localRecentListStr = window.localStorage.getItem(RECENT_LIST_KEY)
  if (localRecentListStr) {
    try {
      _list = JSON.parse(localRecentListStr)
    } catch (err) {

    }
  }

  const list = _list.map(item => {
    delete item.count
    return item
  })

  return list
}

const state = {
  list: initRecentList()
}

const getters = {
  recentList: state => state.list
}

const actions = {
  addRecentItem ({ commit, state }, item) {
    const nextItem = Object.assign({}, item)
    delete nextItem.count

    // 查找最近点击的列表中是否已经存在
    const nextList = state.list.slice(0).filter(_item => _item.link !== item.link)

    if (nextList.length >= RECENT_LIST_MAX) {
      nextList.pop()
      nextList.unshift(nextItem)
    } else {
      nextList.unshift(nextItem)
    }
    commit(ADD_RECENT_ITEM, nextList)
    setListToLocal(nextList)
  },
  resetRecentList ({ commit }) {
    window.localStorage.removeItem(RECENT_LIST_KEY)
    commit(RESET_RECENT_LIST)
  }
}

const mutations = {
  [ADD_RECENT_ITEM] (state, list = []) {
    state.list = list
  },
  [RESET_RECENT_LIST] (state) {
    state.list = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
