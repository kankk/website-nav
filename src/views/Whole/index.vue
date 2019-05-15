<template>
  <div id="whole">
    <div class="title">所有页面</div>
    <div class="list">
      <website-item v-for="item in wholeList" :item="item" :key="`${item.link}`" @click="handleWebsiteItemClick(item)"/>
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
      'addRecentItem'
    ]),
    handleWebsiteItemClick (item) {
      // window.open(item.link)

      this.addRecentItem(item)
      this.clickWholeItem(item)
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
