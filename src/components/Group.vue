<template>
  <div class="group" :id="website.id">
    <p class="group-title">{{ website.group }}</p>
    <GroupCard v-for="link in website.links" :key="link.title" :card="link"></GroupCard>
  </div>
</template>

<script>
  import GroupCard from './GroupCard'
  export default {
    name: 'Group',
    props: {
      website: {
        type: Object,
        required: true
      }
    },
    components: {
      GroupCard
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
    padding: 1% 1% 20px 1%; // width: calc(80% - $sidebar-width);
    overflow: hidden;

    .group-title {
      padding: 6px 0 0 2%;
      font-family: "PingRegular";
    }
  }

  @media (min-width: 481px) {
    .group {
      margin-left: $sidebar-width + $group-margin-horizontal;
    }
  }

</style>
