<template>
  <div class="side-menu">
    <div class="menu-inner move" :class="{'will-change':willChange,'moving':moving}"
         :style="{transform:`translate3d(${Math.ceil(pos/3)}px,0,0)`}">
      <button type="button" @click="handleClearClick" style="position: absolute;top: 0;right: 0;">clear</button>
    </div>
    <div class="full-screen move" :class="{'will-change':willChange,'moving':moving}"
         :style="{transform:`translate3d(${pos}px,0,0)`}">
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
  const duration = 500;
  let maxWidth = 0, isTouch = 'ontouchstart' in window;
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
    };
  export default {
    props: {
      action: Object,
      enable: Boolean,
      container: Object
    },
    data() {
      return {
        content: '',
        visible: false,
        pos: 0,
        moving: false,
        willChange: true,
      }
    },
    methods: {
      handleMaskClick() {
        if (this.moving) return;
        this.$emit('mask-click')
      },
      handleClearClick() {
        this.content = ''
      }
    },
    watch: {
      'action'(v) {
        this.visible = v.visible;
        this.pos = v.visible ? maxWidth : 0;
        this.moving = true
      }
    },
    computed: {
      opacity() {
        return this.pos * 0.4 / maxWidth || 0
      }
    },
    mounted() {
      const container = document;
      let t1, t2, speed, startX, startY, nowX, nowY, lastX, startPos, isTouching;
      maxWidth = Math.floor((parseInt(window.getComputedStyle(this.$el).width)) * 0.75);
      const initDrag = function (e) {
        if (!this.enable) return;
        isTouching = undefined;
        this.content = `${this.content}--------------------------touchstart\n`;
        nowX = startX = e.clientX || e.changedTouches[0].clientX;
        startY = e.clientY || e.changedTouches[0].clientY;
        t2 = +new Date();
        startPos = this.pos;
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
        if (isTouching === undefined) isTouching = Math.abs(nowY - startY) / Math.abs(nowX - startX) > (Math.sqrt(3) / 3);
        if (!isTouching) {
          if (!supportsPassive) e.preventDefault();
          this.pos = pos;
          this.$emit('slide-move', pos)
        }
      }.bind(this);
      const removeDrag = function (e) {
        if (isTouching !== undefined) {
          if (!isTouching) {
            let pos = this.pos;
            if (speed > 0) {
              this.visible = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5
            } else {
              this.visible = !((0 - pos) / speed < duration || pos < maxWidth * 3 / 5)
            }
            if (this.pos > 0 && this.pos < maxWidth) this.moving = true;
            this.pos = this.visible ? maxWidth : 0;
          } else {
            this.pos = this.visible ? maxWidth : 0;
          }
        }
        isTouching = undefined;
        container.removeEventListener(mouseEvents.move, drag, supportsPassive ? {passive: true} : false);
        container.removeEventListener(mouseEvents.up, removeDrag, supportsPassive ? {passive: true} : false);
      }.bind(this);
      'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
        this.$el.addEventListener(e, () => {
          this.moving = false;
          this.pos = this.visible ? maxWidth : 0;
        }, false)
      });
      container.addEventListener(mouseEvents.down, initDrag, supportsPassive ? {passive: true} : false);
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .move
    transform translateZ(0)

  .side-menu
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    overflow: hidden

  .menu-inner
    position: absolute
    top: 0
    left: -25%
    bottom: 0
    width: 75%
    background-color: green
    word-break break-all
    word-wrap break-word
    font-size 10px
    white-space pre-wrap

  .menu-mask
    background-color: #000
    z-index: 1000

  .will-change
    will-change transform

  .moving
    transition transform .3s ease
</style>
