<template>
  <div class="app">
    <chat-side-menu
      ref="menu"
      :width="width"
      :action="sideMenuAction"
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
      <div class="menu-content" slot="menu">
        <div class="menu-img-wrap">
          <a class="qrcode" href="javascript:;"><i class="c-icon-qrcode"></i></a>
          <!--<img class="menu-img" src="//static.codehuang.local:20081/upload/images/bg.jpg">-->
        </div>
      </div>
      <transition :name="transitionName" slot="content">
        <router-view class="main-content"></router-view>
      </transition>
    </chat-side-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ChatSideMenu from '../components/SideMenu';

  let historyState = history.state, lastDirection = 'forward';

  export default {
    data() {
      return {
        width: Math.floor(document.body.clientWidth * 0.8),
        transitionName: 'slide-forward'
      }
    },
    watch: {
      '$route'(to, from) {
        let direction = ''
        if (!historyState && !history.state) {
          direction = 'forward'
        } else if (history.state && !historyState) {
          direction = 'forward'
        } else if (historyState && !history.state) {
          direction = 'back'
        } else if (historyState && +historyState.key > +history.state.key) {
          direction = 'back'
        } else if (historyState && +historyState.key === +history.state.key) {
          if (lastDirection === 'back') {
            direction = 'forward'
          } else {
            direction = 'back'
          }
        } else {
          direction = 'forward'
        }
        this.transitionName = `slide-${direction}`
        historyState = history.state || historyState;
        lastDirection = direction;
      }
    },
    methods: {
      handleMaskClick() {
        this.$store.dispatch('SWITCH_SIDE_MENU', false);
      },
      handleSlideStart(pos) {
        //console.log(pos)
      },
      handleSlideMove(pos) {
        //console.log(pos)
      },
      handleSlideEnd(pos, visible) {
//        this.$store.dispatch('SET_SIDE_MENU_VISIBLE_STATUS', visible);
      }
    },
    components: {
      ChatSideMenu
    },
    computed: {
      ...mapGetters(['sideMenuEnable', 'sideMenuAction']),
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .menu-content
    height: 100%
    word-break break-all
    word-wrap break-word
    font-size 10px
    white-space pre-wrap
    background-color: #fff

  .menu-img-wrap
    position: relative
    width: 100%
    height: 33.33%
    background: url("//static.codehuang.local:20081/upload/images/bg.jpg") center/cover no-repeat
    .qrcode
      position: absolute
      top: px2rem(60px)
      right: px2rem(30px)
      color: #ffffff
      font-size: px2rem(40px)
    img
      width: 100%
      height: 100%
</style>
