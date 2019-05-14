<template>
  <div id="whole">
    <div class="title">所有页面</div>
    <div class="list">
      <website-item v-for="item in wholeList" :item="item" :key="item.link" @click="handleWebsiteItemClick(item)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    handleWebsiteItemClick (item) {
      window.open(item.link)
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
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 20px;
    .item {
      width: 120px;
      margin: 12px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .item_icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #eee;
      }
      .item_icon_default {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .item_icon_default_text {
        font-size: 16px;
        font-weight: 400;
      }
      .item_title {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
        color: rgb(60, 64, 67);
        line-height: 24px;
        text-align: center;
      }
    }
  }
}
</style>
