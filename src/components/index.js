import Vue from 'vue'

import IconClose from './icon_close'
import WebsiteItem from './website_item'

class Components {
  constructor () {
    this.inited = false
  }

  init () {
    if (this.inited) return

    // 注册全局组件
    Vue.component('icon-close', IconClose)
    Vue.component('website-item', WebsiteItem)

    this.inited = true
  }
}

export default new Components()
