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
        <div class="menu-user-wrap">
          <div class="user-info">
            <div class="avatar-wrap">
              <img src="//static.codehuang.com/upload/avatars/default.png">
              <div class="user-name">老夫子Alexander</div>
            </div>
          </div>
          <a class="qrcode" href="javascript:;"><i class="c-icon-qrcode"></i></a>
          <!--<img class="menu-img" src="//static.codehuang.local:20081/upload/images/bg.jpg">-->
        </div>
        <div class="menu-item-list">
          <router-link class="menu-item" to="/vip">激活会员</router-link>
          <router-link class="menu-item" to="/wallet">QQ钱包</router-link>
          <router-link class="menu-item" to="/vip">个性装扮</router-link>
          <router-link class="menu-item" to="/collect">我的收藏</router-link>
          <router-link class="menu-item" to="/album">我的相册</router-link>
          <router-link class="menu-item" to="/file">我的文件</router-link>
          <router-link class="menu-item" to="/vip">免流量特权</router-link>
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

  .menu-user-wrap
    position: relative
    width: 100%
    height: 30%
    background: url("//static.codehuang.local:20081/upload/images/bg.jpg") center / cover no-repeat
    .user-info
      padding px2rem(196px) px2rem(40px) 0
      img
        width: px2rem(80px)
        height: px2rem(80px)
        border 2px solid #fff
        border-radius 50%
        vertical-align bottom
        margin-right px2rem(16px)
    .user-name
      display: inline-block
      color: #fff
      font-size: px2rem(56px)
      vertical-align bottom
      width: 80%
      white-space nowrap
      text-overflow ellipsis
      overflow: hidden
    .qrcode
      position: absolute
      top: px2rem(40px)
      right: px2rem(40px)
      color: #ffffff
      font-size: px2rem(56px)

  .menu-item
    display: block
    line-height: px2rem(98px)
    color: #000
    font-size: px2rem(36px)
    padding-left px2rem(128px)
</style>
