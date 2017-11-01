<template>
  <div class="side-menu" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"
       :style="{left:left + '%'}">
    <div class="dragger">

    </div>
    <div class="main">

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        left: -60
      }
    },
    computed: {},
    components: {},
    methods: {
      handleMouseDown(e) {
        this.startPos = e.clientX;
      },
      handleMouseMove(e) {
        let moveDistance = e.clientX - this.startPos;
        console.log(moveDistance);
      },
      handleMouseUp() {

      }
    },
    created() {

    }
  };
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .side-menu
    position: absolute
    top: 0
    left: -60%
    bottom: 0
    width: 80%
    background-color: green
    z-index 1000

  .dragger
    position: absolute
    top: 0
    left: 100%
    bottom: 0
    width: px2rem(5px)
    background-color: red

  .main
    height 100%
    right px2rem(5px)
    background-color: blue

</style>
