<template>
  <div id="home">
    <!-- <recent /> -->
    <whole />
  </div>
</template>

<script>
import websites from '@/assets/websites'
import Recent from '@/views/Recent'
import Whole from '@/views/Whole'
export default {
  name: 'Home',
  components: {
    Recent,
    Whole
  },
  data () {
    return {
      websites
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scope>
#home {
  width: 720px;
  margin: 0 auto;
}
</style>
