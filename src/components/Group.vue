<template>
  <div class="group">
    <h1>{{ website.group }}</h1>
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
    border: $group-border;
    background-color: $group-bgColor;
    padding: 1%;
    overflow: hidden;
  }

</style>
