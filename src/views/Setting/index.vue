<template>
<div id="setting">
  <div class="title">
    <span>设置</span>
    <icon-close class="setting_close" @close="$emit('close')" :size="12"/>
  </div>
  <div class="setting_list">
    <span class="setting_item" @click="handleExportWebsites">导出配置</span>
    <!-- <span class="setting_item" @click="handleImportWebsites">导入配置</span> -->
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Setting',
  data () {
    return {

    }
  },
  methods: {
    // 导出配置
    handleExportWebsites () {
      // 导出的字符串
      const exportString = `${JSON.stringify(this.wholeList.map(_item => {
        delete _item.count
        return _item
      }), null, 2)}`

      // 导出操作
      const exportA = document.createElement('a')
      exportA.download = 'websites.json'
      exportA.style.display = 'none'
      const exportBlob = new Blob([exportString])
      exportA.href = URL.createObjectURL(exportBlob)
      document.body.appendChild(exportA)
      exportA.click()
      document.body.removeChild(exportA)
    },
    // 导入配置
    handleImportWebsites () {

    }
  },
  computed: {
    ...mapGetters([
      'wholeList'
    ])
  }
}
</script>

<style lang="less" scope>
#setting {
  width: 200px;
  padding-top: 8px;
  .title {
    font-size: 14px;
    color: #333;
    line-height: 28px;
    text-align: center;
    position: relative;
    border-radius: 4px;
    .setting_close {
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }
  .setting_list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 12px 8px;
    .setting_item {
      margin-bottom: 8px;
      font-size: 14px;
      color: #999;
      &:hover {
        color: #333;
        cursor: pointer;
      }
    }
  }
}
</style>
