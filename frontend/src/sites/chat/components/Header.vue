<template>
  <div class="header">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <slot name="middle"></slot>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pageTitle'],
    data() {
      return {}
    },
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .header
    position: relative
    height: px2rem(104px)
    line-height: px2rem(104px)
    background-image: linear-gradient(to right, #4f8dfe, #35bafd);
    text-align: center
    h1
      font-size: px2rem(34px)
      margin: 0
      font-weight: normal
      color: #fff

  .header-left
    position: absolute
    left: px2rem(24px)
    top: 0

  .header-right
    position: absolute
    right: px2rem(24px)
    top: 0

</style>
