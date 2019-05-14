<template>
  <div id="recent">
    <div class="title">最近点击</div>
    <div class="list">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Recent',
  data () {
    return {
      list: []
    }
  },
  methods: {

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
}
</style>
