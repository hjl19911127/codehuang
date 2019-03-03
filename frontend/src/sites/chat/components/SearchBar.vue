<template>
  <div class="search-wrap">
    <div class="search">
      <i class="c-icon-search"></i> Search
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
    },
    components: {}
  };
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .search-wrap
    padding 0 px2rem(24px)
    margin-top px2rem(14px)

  .search
    height px2rem(62px)
    line-height px2rem(62px)
    background-color #f3f3f3
    color #a4a4a4
    font-size px2rem(28px)
    text-align center
    border-radius px2rem(5px)

  .c-icon-search
    font-size px2rem(26px)
</style>
