<template>
<div id="home">
  <div id="main" :class="{ 'vague': isShowSetting }">
    <recent />
    <whole @setting="toggleSetting"/>
  </div>
  <div id="setting_wrap" :class="{ 'show': isShowSetting, 'hide': !isShowSetting }">
    <setting @close="toggleSetting(false)"/>
  </div>
</div>
</template>

<script>
import Recent from '@/views/Recent'
import Whole from '@/views/Whole'
import Setting from '@/views/Setting'
export default {
  name: 'Home',
  components: {
    Recent,
    Whole,
    Setting
  },
  data () {
    return {
      isShowSetting: false
    }
  },
  methods: {
    toggleSetting (value) {
      if (typeof value === 'boolean') {
        this.isShowSetting = value
      } else {
        this.isShowSetting = !this.isShowSetting
      }
    }
  }
}
</script>

<style lang="less" scope>
#home {
  display: flex;
  align-items: stretch;
  justify-content: center;

  #main {
    width: 640px;
    opacity: 1;
    transition: opacity 0.2s linear;

    &.vague {
      opacity: 0.35;
    }
  }

  #setting_wrap {
    overflow: hidden;
    transition: width 0.3s linear;

    &.show {
      width: 200px;
      margin-left: 50px;
      opacity: 1;
    }

    &.hide {
      width: 0px;
      opacity: 0;
    }
  }
}
</style>
