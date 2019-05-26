import websites from '@/assets/websites.json'

import Utlis from '../../utlis/websites'

import {
  COUNT_WHOLE_ITEM,
  DELETE_WHOLE_ITEM,
  RESET_WHOLE_COUNT
} from '../mutation-types'

const WHOLE_LIST_KEY = 'WHOLE_LIST_KEY'
const WHOLE_DELETE_LIST_KEY = 'WHOLE_DELETE_LIST_KEY'

// 列表缓存到本地
const setListToLocal = (list) => {
  window.localStorage.setItem(WHOLE_LIST_KEY, JSON.stringify(list))
}

// 缓存被删除的项目
const storeDeletedItem = (item) => {
  const localDeletedListStr = window.localStorage.getItem(WHOLE_DELETE_LIST_KEY)
  let localDeletedList = []
  if (localDeletedListStr) {
    localDeletedList = JSON.parse(localDeletedListStr)
  }

  for (let _item of localDeletedList) {
    // 如果已经存在与本地缓存, 忽略
    if (_item.link === item.link) {
      return
    }
  }

  localDeletedList.push(item)

  window.localStorage.setItem(WHOLE_DELETE_LIST_KEY, JSON.stringify(localDeletedList))
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
  },
  deleteWholeItem ({ commit, state }, item) {
    const filterList = state.list.filter(_item => item.link !== _item.link)
    commit(DELETE_WHOLE_ITEM, filterList)
    setListToLocal(filterList)

    storeDeletedItem(item)
  },
  resetWholeCount ({ commit }) {
    commit(RESET_WHOLE_COUNT)
  }
}

const mutations = {
  [COUNT_WHOLE_ITEM] (state, item) {
    item.count++

    setListToLocal(state.list)
  },
  [DELETE_WHOLE_ITEM] (state, list) {
    state.list = list
  },
  [RESET_WHOLE_COUNT] (state, list) {
    state.list = state.list.map(item => {
      item.count = 0
      return item
    })

    setListToLocal(state.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
