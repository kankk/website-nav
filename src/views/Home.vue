<template>
  <div id="home">
    <Group v-for="website in websites" :key="website.group" :website="website"></Group>
  </div>
</template>

<script>
  import websites from '../assets/websites'
  import Group from '../components/Group'
  export default {
    name: 'Home',
    components: {
      Group
    },
    data() {
      return {
        websites
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss" scope>
  @import '../assets/styles/common.sass';

  #home {
    &:first-child {
      margin-top: 20px;
    }
  }
</style>
