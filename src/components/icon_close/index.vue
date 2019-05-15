<template>
  <div class="icon_close" @click.stop="$emit('close')" :style="{ 'width': size + 'px', 'height': size + 'px' }">
    <div class="icon_close_v" :style="{ 'height': size + 'px' }"></div>
    <div class="icon_close_h" :style="{ 'width': size + 'px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'IconClose',
  props: {
    size: {
      type: Number,
      default: () => 8
    }
  }
}
</script>

<style lang="less" scoped>
@close_color: rgba(0, 0, 0, 0.35);
@close_color_hover: rgba(0, 0, 0, 0.65);
.icon_close {
  transform: rotate(45deg);
  .icon_close_v {
    width: 1px;
    background-color: @close_color;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%)
  }
  .icon_close_h {
    height: 1px;
    background-color: @close_color;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%)
  }

  &:hover {
    .icon_close_v {
      background-color: @close_color_hover;
    }
    .icon_close_h {
      background-color: @close_color_hover;
    }
  }
}
</style>
