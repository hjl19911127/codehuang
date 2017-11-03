<template>
  <section class="container">
    <slot></slot>
  </section>
</template>
<script>
  export default {
    components: {},
    computed: {},
    methods: {},
    created() {
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .container
    position: absolute
    top: px2rem(104px)
    bottom px2rem(112px)
    left: 0
    right: 0
    overflow: auto
</style>
