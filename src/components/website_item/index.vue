<template>
  <div class="website_item" @click="$emit('click')">
    <div class="item_icon_wrap">
      <img class="item_icon" v-if="item.icon" :src="item.icon" />
      <div class="item_icon_default" :style="{ 'background-color': item.bgColor }" v-else>
        <span class="item_icon_default_text" :style="{ 'color': item.color }">{{ item.title[0] }}</span>
      </div>
    </div>
    <div class="item_title">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteItem',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@item_size: 32px;
@item_wrap_size: 48px;
.website_item {
  width: 120px;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  transition: transform 0.2s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    // transform: scale(1.1);
    .item_title {
      color: rgb(0, 0, 0);
    }
  }
  .item_icon_wrap {
    width:@item_wrap_size;
    height:@item_wrap_size;
    background-color: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item_icon {
    width:@item_size;
    height:@item_size;
    border-radius: 50%;
    background-color: #eee;
  }
  .item_icon_default {
    width:@item_size;
    height:@item_size;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item_icon_default_text {
    font-size: 16px;
    font-weight: 400;
  }
  .item_title {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    color: rgb(60, 64, 67);
    line-height: 1.5;
    text-align: center;
  }
}
</style>
