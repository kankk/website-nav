<template>
  <div id="whole">
    <div class="title">所有页面</div>
    <div class="list">
      <website-item v-for="item in wholeList" :item="item" :key="`${item.link}`" :with-close="true" @click="handleWebsiteItemClick(item)" @delete="handleWebsiteItemDelete(item)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WebsiteItem from '../../components/website_item'
export default {
  name: 'Whole',
  data () {
    return {

    }
  },
  components: {
    WebsiteItem
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
    }
  },
  computed: {
    ...mapGetters([
      'wholeList'
    ])
  }
}
</script>

<style lang="less" scoped>
#whole {
  width: 100%;
  padding-top: 8px;
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
