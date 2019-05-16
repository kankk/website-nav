<template>
  <div id="recent" v-if="recentList.length">
    <div class="title">
      <span>最近点击</span>
      <span class="clear_localstorage" @click="clearLocalStorage">清空本地缓存</span>
    </div>
    <div class="list">
      <website-item v-for="item in recentList" :item="item" :key="`${item.link}`" @click="handleWebsiteItemClick(item)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Recent',
  data () {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions([
      'addRecentItem',
      'resetRecentList'
    ]),
    handleWebsiteItemClick (item) {
      window.open(item.link)

      this.addRecentItem(item)
    },
    clearLocalStorage () {
      if (confirm('是否清空最近点击的本地缓存')) {
        this.resetRecentList()
      }
    }
  },
  computed: {
    ...mapGetters([
      'recentList'
    ])
  }
}
</script>

<style lang="less" scoped>
#recent {
  width: 100%;
  padding-top: 8px;
  .title {
    font-size: 14px;
    color: #333;
    line-height: 28px;
    text-align: center;
    position: relative;
    border-radius: 4px;
    .clear_localstorage {
      visibility: hidden;
      position: absolute;
      right: 12px;
      font-size: 14px;
      color: #999;
      line-height: 28px;
      &:hover {
        color: #666;
        cursor: pointer;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      .clear_localstorage {
        visibility: visible;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
