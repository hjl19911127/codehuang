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
    mounted() {
      let startX, startY, nowX, nowY
      let isScroll = false;
      const initDrag = function (e) {
        startX = e.clientX || e.changedTouches[0].clientX;
        startY = e.clientY || e.changedTouches[0].clientY;
        this.$el.addEventListener('touchmove', drag, false);
        this.$el.addEventListener('touchend', removeDrag, false);
      }.bind(this)
      const drag = function (e) {
        nowX = e.clientX || e.changedTouches[0].clientX;
        nowY = e.clientY || e.changedTouches[0].clientY;
        if (Math.abs(nowX - startX) < 10 && Math.abs(nowX - startY) > 5) isScroll = true
        if (isScroll) e.stopPropagation();
      }.bind(this)
      const removeDrag = function (e) {
        isScroll = false;
        this.$el.addEventListener('touchmove', drag, false);
        this.$el.addEventListener('touchend', removeDrag, false);
      }.bind(this)
      this.$el.addEventListener('touchstart', initDrag, false);
    },
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
