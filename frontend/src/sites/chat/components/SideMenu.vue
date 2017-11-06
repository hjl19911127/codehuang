<template>
  <div class="side-menu">
    <div class="menu-inner" :class="{'will-change':willChange,'moving':moving}"
         :style="{transform:`translateX(${Math.ceil(pos/3)}px)`}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </div>
    <div class="full-screen" :class="{'will-change':willChange,'moving':moving}"
         :style="{transform:`translateX(${pos}px)`}">
      <div class="full-screen menu-mask" @click="handleMaskClick" :style="{'opacity':opacity}" v-show="pos"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  let maxWidth = 0;
  export default {
    data() {
      return {
        pos: 0,
        moving: false,
        willChange: false,
      }
    },
    methods: {
      handleMaskClick() {
        this.$emit('mask-click')
      }
    },
    computed: {
      opacity() {
        return this.pos * 0.4 / maxWidth || 0
      }
    },
    mounted() {
      const duration = 500;
      maxWidth = Math.floor((parseInt(window.getComputedStyle(this.$el).width)) * 0.75);
      let t1, t2, speed, sp, lp, np, startPos;
      let isTouch = 'ontouchstart' in window
      let mouseEvents = isTouch ?
        {
          down: 'touchstart',
          move: 'touchmove',
          up: 'touchend',
          over: 'touchstart',
          out: 'touchend'
        } :
        {
          down: 'mousedown',
          move: 'mousemove',
          up: 'mouseup',
          over: 'mouseover',
          out: 'mouseout'
        }
      let initDrag = function (e) {
        t2 = +new Date();
        startPos = this.pos;
        np = sp = e.clientX || e.changedTouches[0].clientX;
        this.willChange = true
        document.addEventListener(mouseEvents.move, drag, false);
        document.addEventListener(mouseEvents.up, removeDrag, false);
        this.$emit('slide-start', this.pos)
      }.bind(this)
      let drag = function (e) {
        t1 = t2;
        t2 = +new Date();
        lp = np;
        np = e.clientX || e.changedTouches[0].clientX;
        speed = (np - lp) / (t2 - t1)
        let pos = startPos + np - sp;
        pos = Math.min(maxWidth, pos)
        pos = Math.max(0, pos)
        this.pos = pos;
        this.$emit('slide-move', pos)
      }.bind(this)
      let removeDrag = function (e) {
        let pos = this.pos, visible = false;
        if (speed > 0) {
          visible = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5
        } else {
          visible = !((0 - pos) / speed < duration || pos < maxWidth * 3 / 5)
        }
        if (this.pos > 0 && this.pos < maxWidth) this.moving = true
        this.pos = visible ? maxWidth : 0;
        document.removeEventListener(mouseEvents.move, drag, false);
        document.removeEventListener(mouseEvents.up, removeDrag, false);
        this.$emit('slide-end', pos)
      }.bind(this)
      'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
        this.$el.addEventListener(e, () => {
          this.moving = false
          this.willChange = false
        }, false)
      })
      document.addEventListener(mouseEvents.down, initDrag, false);
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .side-menu
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0

  .menu-inner
    position: absolute
    top: 0
    left: -25%
    bottom: 0
    width: 75%
    background-color: green
    transform translateZ(0)
    word-break break-all
    word-wrap break-word

  .menu-mask
    background-color: #000
    z-index: 1000

  .will-change
    will-change transform

  .moving
    transition transform .3s ease
</style>
