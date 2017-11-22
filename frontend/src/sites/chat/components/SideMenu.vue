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
  const supportsPassive = (() => {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    return supportsPassive;
  })();
  const duration = 500
  let maxWidth = 0, isTouch = 'ontouchstart' in window
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
  export default {
    props: {
      visible: Boolean,
      enable: Boolean,
      container: Object
    },
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
    watch: {
      visible(v) {
        this.pos = v ? maxWidth : 0
        this.moving = true
      }
    },
    computed: {
      opacity() {
        return this.pos * 0.4 / maxWidth || 0
      }
    },
    mounted() {
      const container = this.$el.parentNode;
      let t1, t2, speed, startX, startY, nowX, nowY, lastX, startPos, isScroll = false;
      maxWidth = Math.floor((parseInt(window.getComputedStyle(this.$el).width)) * 0.75);
      const initDrag = function (e) {
        if (!this.enable) return;
        nowX = startX = e.clientX || e.changedTouches[0].clientX;
        startY = e.clientY || e.changedTouches[0].clientY;
        t2 = +new Date();
        startPos = this.pos;
        this.willChange = true;
        container.addEventListener(mouseEvents.move, drag, supportsPassive ? {passive: true} : false);
        container.addEventListener(mouseEvents.up, removeDrag, supportsPassive ? {passive: true} : false);
        this.$emit('slide-start', this.pos)
      }.bind(this);
      const drag = function (e) {
        t1 = t2;
        t2 = +new Date();
        lastX = nowX;
        nowX = e.clientX || e.changedTouches[0].clientX;
        nowY = e.clientY || e.changedTouches[0].clientY;
        speed = (nowX - lastX) / (t2 - t1);
        let pos = startPos + nowX - startX;
        pos = Math.min(maxWidth, pos);
        pos = Math.max(0, pos);
        if (Math.abs(nowX - startX) < 10 && Math.abs(nowX - startY) > 5) isScroll = true;
        if (!isScroll) {
          if (!supportsPassive) e.preventDefault();
          this.pos = pos;
          this.$emit('slide-move', pos)
        }
      }.bind(this);
      const removeDrag = function (e) {
        container.removeEventListener(mouseEvents.move, drag, supportsPassive ? {passive: true} : false);
        container.removeEventListener(mouseEvents.up, removeDrag, supportsPassive ? {passive: true} : false);
        if (!isScroll) {
          let pos = this.pos, visible = false;
          if (speed > 0) {
            visible = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5
          } else {
            visible = !((0 - pos) / speed < duration || pos < maxWidth * 3 / 5)
          }
          if (this.pos > 0 && this.pos < maxWidth) this.moving = true;
          this.pos = visible ? maxWidth : 0;
          this.$emit('slide-end', pos, visible)
        }
        isScroll = false;
      }.bind(this);
      'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
        this.$el.addEventListener(e, () => {
          this.moving = false;
          this.willChange = false
        }, false)
      });
      container.addEventListener(mouseEvents.down, initDrag, supportsPassive ? {passive: true} : false);
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
