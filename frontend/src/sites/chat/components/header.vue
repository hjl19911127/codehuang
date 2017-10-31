<template>
  <header class="header">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <h1 v-text="title"></h1>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {}
    },
    computed: {
      session() {
        return this.$store.getters.session;
      }
    },
    components: {}
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .header
    height: px2rem(104px)
    line-height: px2rem(104px)
    background-image: linear-gradient(to right, #4f8dfe, #35bafd);
    text-align: center
    h1
      font-size: px2rem(40px)
      margin: 0
      font-weight: normal
      color: #fff

  .header-left
    float: left
    width: px2rem(114px)
    height: px2rem(114px)

  .header-right
    float: right
</style>
