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
  @import '../assets/stylus/shared/_mixin'
  .header
    height: px2rem(104px)
    background-image: linear-gradient(to right, #4f8dfe, #35bafd);
</style>
