<template>
  <div id="home">
    <Sidebar :websites="websites"></Sidebar>  
    <Group v-for="website in websites" :key="website.id" :website="website"></Group>
  </div>
</template>

<script>
  import websites from '../assets/websites'
  import Group from '../components/Group'
  import Sidebar from '../components/Sidebar'
  export default {
    name: 'Home',
    components: {
      Group,
      Sidebar
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
