<template>
  <div class="search-wrap">
    <div class="search">
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      showMenu() {
        return this.$store.getters.getShowMenu;
      }
    },
    components: {}
  };
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .search-box
    height
</style>
