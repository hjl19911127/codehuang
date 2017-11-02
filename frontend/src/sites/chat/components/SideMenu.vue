<template>
  <div class="side-menu">

  </div>
</template>
<script>
  export default {};
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .side-menu
    position: absolute
    top: 0
    left: -75%
    bottom: 0
    width: 75%
    background-color: green
    z-index 1000
    transform translateZ(0)

</style>
