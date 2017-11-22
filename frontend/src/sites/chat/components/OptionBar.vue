<template>
  <div class="option-bar">
    <ul class="option-button-group">
      <li><i class="c-icon-audio"></i></li>
      <li><i class="c-icon-image"></i></li>
      <li><i class="c-icon-camera"></i></li>
      <li><i class="c-icon-bonus"></i></li>
      <li><i class="c-icon-gif"></i></li>
      <li><i class="c-icon-smile"></i></li>
      <li><i class="c-icon-add-circle"></i></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .option-bar
    position absolute
    left 0
    right 0
    bottom 0
    height px2rem(112px)
    line-height px2rem(112px)
    background-color #fff
    font-size 0
    border-top 1px solid #e8e8e8

  .option-button-group
    padding 0
    li
      display inline-block
      vertical-align middle
      width 14.2857%
      text-align center
      color #aaa
      font-size px2rem(56px)
      line-height 1
      &:active
        color #4ab9f8
</style>
