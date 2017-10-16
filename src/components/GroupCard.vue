<template>
  <a class="groupcard-a" target="_blank" :href="card.link">
    <div class="groupcard">
      <div class="groupcard-title">
        <img v-if="card.icon" :src="card.icon">
        <img v-else src="./../assets/default.png"> {{ card.title }}
      </div>
      <div class="groupcard-desc">
        {{ card.description }}
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'GroupCard',
    props: {
      card: {
        type: Object,
        required: true
      }
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
  .groupcard-a {
    text-decoration: none;
  }

  .groupcard {
    height: $groupcard-height;
    box-sizing: border-box;
    border: $groupcard-border;
    box-shadow: $groupcard-box-shadow;
    border-radius: 6px;
    padding: $groupcard-padding;
    float: left;

    .groupcard-title {
      font-size: $main-font-size;
      font-weight: 700;
      color: #3273dc;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 .1rem;
      height: $groupcard-title-height;
      img {
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        width: $groupcard-logo-hw;
        height: $groupcard-logo-hw;
      }
    }

    .groupcard-desc {
      height: $groupcard-height - $groupcard-title-height - $groupcard-padding - $groupcard-desc-padding * 2;
      font-size: $sub-font-size;
      color: gray;
      overflow: hidden;
      padding: $groupcard-desc-padding 0px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 480px) {
    .groupcard {
      width: 80%;
      margin: $groupcard-margin-top 9% 0;
    }
  }

  @media (min-width: 481px) {
    .groupcard {
      width: 43%;
      margin: $groupcard-margin-top 3% 0;
    }
  }

  @media (min-width: 768px) {
    .groupcard {
      width: 30%;
      margin: $groupcard-margin-top 1.5% 0;
    }
  }

  @media (min-width: 1040px) {
    .groupcard {
      width: 23%;
      margin: $groupcard-margin-top 0.85% 0;
    }
  }

  @media (min-width: 1200px) {
    .groupcard {
      widows: 18%;
      margin: $groupcard-margin-top 1% 0;
    }
  }

</style>
