import websites from '@/assets/websites'

import Utlis from '../../utlis/websites'

// 初始化列表
const initWholeList = () => {
  const list = (window.localStorage.getItem('whole-list') || websites || []).map(item => {
    if (!item.count) {
      item.count = 0
    }

    // 默认icon
    if (!item.icon) {
      Object.assign(item, Utlis.getDefaultIcon())
    }

    return item
  })
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
