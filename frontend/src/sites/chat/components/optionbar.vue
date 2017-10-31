<template>
  <div class="option-bar">

  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .nav
    position absolute
    left 0
    right 0
    bottom 0
    height px2rem(112px)
    line-height px2rem(112px)
    background-color #fff
    font-size 0
    border-top 1px solid #e8e8e8

  .nav-tab
    display inline-block
    vertical-align middle
    width 33.3333%
    text-align center
    color #aaa
    font-size px2rem(60px)
    line-height 1
    &.active
      color #4ab9f8
    .tab-title
      margin-top px2rem(5px)
      font-size px2rem(20px)
</style>
