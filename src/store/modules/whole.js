import websites from '@/assets/websites'

import Utlis from '../../utlis/websites'

import {
  COUNT_WHOLE_ITEM
} from '../mutation-types'

const WHOLE_LIST_KEY = 'WHOLE_LIST_KEY'

// 列表缓存到本地
const setListToLocal = (list) => {
  window.localStorage.setItem(WHOLE_LIST_KEY, JSON.stringify(list))
}

// 初始化列表
const initWholeList = () => {
  let _list = websites || []
  const localWholeListStr = window.localStorage.getItem(WHOLE_LIST_KEY)
  if (localWholeListStr) {
    try {
      _list = JSON.parse(localWholeListStr)
    } catch (err) {

    }
  }
  const list = _list.map(item => {
    if (!item.count) {
      item.count = 0
    }

    // 默认icon
    if (!item.icon && (!item.color || !item.bgColor)) {
      Object.assign(item, Utlis.getDefaultIcon())
    }

    return item
  })

  setListToLocal(list)

  return list
}

const state = {
  list: initWholeList()
}

const getters = {
  // 按点击次数降序
  wholeList: state => state.list.slice(0).sort((a, b) => b.count - a.count)
}

const actions = {
  clickWholeItem ({ commit }, item) {
    commit(COUNT_WHOLE_ITEM, item)
  }
}

const mutations = {
  [COUNT_WHOLE_ITEM] (state, item) {
    item.count++

    setListToLocal(state.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
