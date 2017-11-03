<template>
  <div class="side-menu" :class="{'will-change':willChange,'moving':animate}"
       :style="{transform:`translateX(${Math.ceil(pos / 3)}px)`}">
    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
  </div>
</template>
<script>
  export default {
    props: ['pos', 'willChange', 'animate']
  };
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .side-menu
    position: absolute
    top: 0
    left: -25%
    bottom: 0
    width: 75%
    background-color: green
    transform translateZ(0)
    word-break break-all
    word-wrap break-word
</style>
