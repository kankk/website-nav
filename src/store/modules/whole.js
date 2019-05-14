import websites from '@/assets/websites'

import Utlis from '../../utlis/websites'

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
  wholeList: state => state.list.slice(0).sort((a, b) => a.count - b.count)
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
