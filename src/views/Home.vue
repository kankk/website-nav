<template>
  <div id="home">
    <TheSidebar :websites="websites"></TheSidebar>  
    <Group v-for="website in websites" :key="website.id" :website="website"></Group>
  </div>
</template>

<script>
  import websites from '../assets/websites'
  import Group from '../components/Group'
  import TheSidebar from '../components/TheSidebar'
  export default {
    name: 'Home',
    components: {
      Group,
      TheSidebar
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
      margin-top: $group-margin-bottom;
    }
  }
</style>
