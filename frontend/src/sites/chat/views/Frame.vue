<template>
  <div class="app" :class="{'will-change':willChange,'moving':animate}" :style="{transform:`translateX(${pos}px)`}">
    <chat-side-menu></chat-side-menu>
    <div class="full-screen menu-mask" @click="handleMaskClick" :style="{'opacity':opacity}"></div>
    <transition :name="transitionName">
      <router-view class="full-screen"></router-view>
    </transition>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ChatSideMenu from '../components/SideMenu';

  let maxWidth = 0;

  export default {
    data() {
      return {
        pos: 0,
        animate: false,
        willChange: false,
      }
    },
    methods: {
      handleMaskClick() {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', false);
      }
    },
    components: {
      ChatSideMenu
    },
    computed: {
      ...mapGetters(['transitionName']),
      opacity() {
        console.log(this.pos / maxWidth)
        return Math.min(this.pos / maxWidth, 0.4) || 0
      }
    },
    mounted() {
      const duration = 500;
      maxWidth = parseInt((window.getComputedStyle(this.$el).width)) * 0.75;
      this.$store.watch(() => {
        return this.$store.getters.sideMenuVisible
      }, (v) => {
        if (v) {
          this.pos = maxWidth;
          this.animate = true;
        } else {
          this.pos = 0;
          this.animate = true;
        }
      })
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
      }.bind(this)
      let removeDrag = function (e) {
        let pos = this.pos;
        if (speed > 0) {
          pos = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5 ? maxWidth : 0
        } else {
          pos = (0 - pos) / speed < duration || pos < maxWidth * 3 / 5 ? 0 : maxWidth
        }
        if (this.pos > 0 && this.pos < maxWidth) this.animate = true
        this.pos = pos;
        document.removeEventListener(mouseEvents.move, drag, false);
        document.removeEventListener(mouseEvents.up, removeDrag, false);
      }.bind(this)
      'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
        this.$el.addEventListener(e, () => {
          this.animate = false
          this.willChange = false
        }, false);
      })
      document.addEventListener(mouseEvents.down, initDrag, false);
    },
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
<style lang="stylus" scoped>
  .will-change
    will-change transform

  .moving
    transition transform .3s ease

  .menu-mask
    background-color: #000
    z-index: 2000
</style>
