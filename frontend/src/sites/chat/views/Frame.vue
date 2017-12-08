<template>
  <div class="app">
    <vue-drawer-layout
      ref="menu"
      :width="width"
      :animate="true"
      :action="sideMenuAction"
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
      <div class="menu-content" slot="drawer">
        <div class="menu-user-wrap">
          <div class="user-info">
            <div class="avatar-wrap">
              <img src="//static.codehuang.com/upload/avatars/default.png">
              <div class="user-name">老夫子Alexander</div>
            </div>
          </div>
          <a class="qrcode" href="javascript:;"><i class="c-icon-qrcode"></i></a>
        </div>
        <div class="menu-item-list">
          <router-link class="menu-item" to="/vip"><i class="c-icon-vip"></i>激活会员</router-link>
          <router-link class="menu-item" to="/wallet"><i class="c-icon-wallet"></i>QQ钱包</router-link>
          <router-link class="menu-item" to="/vip"><i class="c-icon-drawing-board"></i>个性装扮</router-link>
          <router-link class="menu-item" to="/collect"><i class="c-icon-collect"></i>我的收藏</router-link>
          <router-link class="menu-item" to="/album"><i class="c-icon-image"></i>我的相册</router-link>
          <router-link class="menu-item" to="/file"><i class="c-icon-file"></i>我的文件</router-link>
          <router-link class="menu-item" to="/vip"><i class="c-icon-signal"></i>免流量特权</router-link>
        </div>
        <div class="menu-foot">
          <router-link class="menu-foot-button" to="/setting"><i class="c-icon-setting"></i>设置</router-link>
          <a class="menu-foot-button" href="javascript:void(0);"><i class="c-icon-moon"></i>夜间</a>
        </div>
        <div class="menu-weather">
          <div class="weather-temperature">18<span>°</span></div>
          <div class="weather-district">福州</div>
        </div>
      </div>
      <transition :name="transitionName" slot="content">
        <router-view class="main-content"></router-view>
      </transition>
    </vue-drawer-layout>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  // import ChatSideMenu from '../components/SideMenu';

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
      // ChatSideMenu
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
    position: relative
    height: 100%
    background-color: #fff

  .menu-user-wrap
    position: relative
    width: 100%
    height: 30%
    background: url(//static.codehuang.com/upload/images/bg.jpg) center / cover no-repeat
    .user-info
      padding px2rem(196px) px2rem(40px) 0
      .avatar-wrap
        position: relative
        padding-left px2rem(110px)
      img
        position: absolute
        left: 0
        width: px2rem(80px)
        height: px2rem(80px)
        border 3px solid #fff
        border-radius 50%
    .user-name
      color: #fff
      font-size: px2rem(56px)
      width: 100%
      white-space nowrap
      text-overflow ellipsis
      overflow: hidden
      line-height: 2
    .qrcode
      position: absolute
      top: px2rem(40px)
      right: px2rem(40px)
      color: #ffffff
      font-size: px2rem(56px)

  .menu-item
    display: block
    line-height: px2rem(98px)
    color: #232323
    font-size: px2rem(34px)
    padding-left px2rem(50px)
    i
      vertical-align px2rem(-4px)
      font-size: px2rem(48px)
      margin-right: px2rem(36px)
      color: #5f6379

  .menu-foot
    position: absolute
    bottom: px2rem(36px)
    left: 0
    right: 35%
    font-size: 0
    .menu-foot-button
      display: inline-block
      color: #232323
      width: 50%
      font-size: px2rem(28px)
      text-align: center

  .menu-weather
    position: absolute
    left: 74%
    bottom: px2rem(36px)
    text-align: center
    .weather-temperature
      font-size: px2rem(56px)
      margin-bottom: px2rem(36px)
      color: #12b7f5
      span
        vertical-align px2rem(10px)
        font-weight: 100;
    .weather-district
      font-size: px2rem(28px)
</style>
