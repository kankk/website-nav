<template>
  <a class="card-a" target="_blank" :href="card.link">
    <div class="card">
      <div class="card-title">
        <img v-if="card.icon" :src="card.icon">
        <img v-else src="./../assets/default.png"> {{ card.title }}
      </div>
      <div class="card-desc">
        {{ card.description }}
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'Card',
    props: ['card'],
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
  .card-a {
    text-decoration: none;
  }

  .card {
    height: $card-height;
    box-sizing: border-box;
    border: $card-border;
    box-shadow: $card-box-shadow;
    border-radius: 6px;
    padding: $card-padding;
    float: left;

    .card-title {
      font-size: $main-font-size;
      font-weight: 700;
      color: #3273dc;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 .1rem;
      height: $card-title-height;
      img {
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        width: $card-logo-hw;
        height: $card-logo-hw;
      }
    }

    .card-desc {
      height: $card-height - $card-title-height - $card-padding - $card-desc-padding * 2;
      font-size: $sub-font-size;
      color: gray;
      overflow: hidden;
      padding: $card-desc-padding 0px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 80%;
      margin: $card-margin-top 9% 0;
    }
  }

  @media (min-width: 481px) {
    .card {
      width: 43%;
      margin: $card-margin-top 3% 0;
    }
  }

  @media (min-width: 768px) {
    .card {
      width: 30%;
      margin: $card-margin-top 1.5% 0;
    }
  }

  @media (min-width: 1040px) {
    .card {
      width: 23%;
      margin: $card-margin-top 0.85% 0;
    }
  }

  @media (min-width: 1200px) {
    .card {
      widows: 18%;
      margin: $card-margin-top 1% 0;
    }
  }

</style>
