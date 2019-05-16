<template>
  <div id="whole">
    <div class="search">
      <input class="search_input" :class="{ 'active': !!searchKey }" v-model="searchKey" placeholder="关键字搜索"/>
      <icon-close :style="{ 'visibility': !!searchKey ? 'visible' : 'hidden' }" class="search_input_clear" @close="handleClearFilter" :size="16"/>
    </div>
    <div class="title">所有页面</div>
    <div class="list">
      <website-item v-for="item in filterWholeList" :item="item" :key="`${item.link}`" :with-close="true" @click="handleWebsiteItemClick(item)" @delete="handleWebsiteItemDelete(item)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Whole',
  data () {
    return {
      searchKey: ''
    }
  },
  methods: {
    ...mapActions([
      'clickWholeItem',
      'deleteWholeItem',
      'addRecentItem'
    ]),
    // 点击网站导航项
    handleWebsiteItemClick (item) {
      window.open(item.link)

      this.addRecentItem(item)
      this.clickWholeItem(item)
    },
    // 点击删除网站导航项
    handleWebsiteItemDelete (item) {
      this.deleteWholeItem(item)
    },
    // 清除搜索关键字
    handleClearFilter () {
      this.searchKey = ''
    }
  },
  computed: {
    ...mapGetters([
      'wholeList'
    ]),
    // 过滤关键字后的列表
    filterWholeList () {
      const lowerSearchKey = this.searchKey.toLocaleLowerCase()
      return this.wholeList.filter(item => {
        return item.title.toLocaleLowerCase().includes(lowerSearchKey) || item.link.toLocaleLowerCase().includes(lowerSearchKey)
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 搜索框选中样式
.search_active {
  width: 45%;
  border: 1px solid #999;
}

#whole {
  width: 100%;
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    .search_input {
      font-size: 14px;
      width: 35%;
      border-radius: 7px;
      border: 1px solid #ddd;
      padding: 4px 8px;
      margin-right: 12px;
      transition: all 0.2s linear;
      color: #333;
      &::-webkit-input-placeholder {
        color: #ddd;
      }
      &:focus {
        .search_active;
      }
      &.active {
        .search_active;
      }
    }
    .search_input_clear {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .title {
    font-size: 14px;
    color: #333;
    line-height: 28px;
    text-align: center;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
