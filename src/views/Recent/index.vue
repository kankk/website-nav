<template>
  <div id="recent">
    <div class="title">最近点击</div>
    <div class="list">
      <website-item v-for="item in recentList" :item="item" :key="`${item.link}`" @click="handleWebsiteItemClick(item)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WebsiteItem from '../../components/website_item'
export default {
  name: 'Recent',
  data () {
    return {
      list: []
    }
  },
  components: {
    WebsiteItem
  },
  methods: {
    ...mapActions([
      'addRecentItem'
    ]),
    handleWebsiteItemClick (item) {
      window.open(item.link)

      this.addRecentItem(item)
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
  .title {
    font-size: 14px;
    color: #333;
    line-height: 28px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
