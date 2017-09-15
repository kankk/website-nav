<template>
  <div class="group">
    <p class="group-title">{{ website.group }}</p>
    <Card v-for="link in website.links" :key="link.title" :card="link"></Card>
  </div>
</template>

<script>
  import Card from './Card'
  export default {
    name: 'Group',
    props: ['website'],
    components: {
      Card
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>

<style lang="scss" scope>
  @import '../assets/styles/common.sass';

  .group {
    margin: $group-margin-top $group-margin-horizontal $group-margin-bottom $group-margin-horizontal;
    background-color: $group-bgColor;
    padding: 1% 1% 20px 1%;
    overflow: hidden;

    .group-title {
      padding: 12px 0 0 2%;
      font-family: "PingRegular";
    }
  }

</style>
