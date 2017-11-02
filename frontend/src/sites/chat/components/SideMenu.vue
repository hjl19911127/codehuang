<template>
  <div class="side-menu" :style="{transform:`translateX(${pos / 3}px)`}">
    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
  </div>
</template>
<script>
  export default {
    props: ['pos']
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
