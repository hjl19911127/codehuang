<template>
  <div class="header">

  </div>
</template>

<script>
  export default {
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
  @import '../assets/stylus/shared/_mixin.styl'
  .header
    height: px2rem(112px)
    background-color: #3ca9fe
</style>
