<template>
  <div>
    <chat-header>
      <h1 slot="middle">Activity</h1>
      <a href="javascript:void(0)" class="head-avatar" slot="left">
        <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
      </a>
      <a href="javascript:void(0)" class="right-btn" slot="right">
        <i class="c-icon-add"></i>
      </a>
    </chat-header>
    <chat-content>
      <chat-search-bar></chat-search-bar>
      <div class="message-list">
        <div class="no-drawer" @mousedown="disablePopEvent" @touchstart="disablePopEvent">
          xxxx
        </div>
      </div>
    </chat-content>
    <chat-nav-bar></chat-nav-bar>
  </div>
</template>
<script>
  import ChatHeader from '../components/Header';
  import ChatContent from '../components/Content';
  import ChatNavBar from '../components/NavBar';
  import ChatSearchBar from '../components/SearchBar';

  export default {
    components: {
      ChatHeader,
      ChatContent,
      ChatNavBar,
      ChatSearchBar
    },
    data() {
      return {
        messages: {
          items: [],
          count: 0
        }
      }
    },
    methods: {
      disablePopEvent(e) {
        e.stopPropagation()
      }
    },
    created() {
      this.messages.items = (new Array(100)).fill({
        id: 1,
        from: 'Vue Drawer Layout',
        content: 'Vue: Hello world'
      })
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .message-item
    display: block
    height px2rem(136px)
    line-height: px2rem(136px)
    border-bottom 1px solid #e8e8e8
    font-size: 0

  .message-item-block
    line-height: 1
    display: inline-block
    vertical-align: middle

  .block-left
    width 20%

  .block-center
    width 70%

  .block-right
    width 10%

  .message-from
    color: #000
    margin-bottom: px2rem(18px)
    font-size: px2rem(32px)

  .message-content
    color: #888
    font-size: px2rem(26px)

  .message-time
    color: #999
    font-size: px2rem(20px)

  .avatar-wrap
    margin 0 auto
    width px2rem(100px)
    height px2rem(100px)
    overflow: hidden
    border-radius 50%
    img
      width: 100%
      height: 100%

  .head-avatar
    display: inline-block
    width px2rem(80px)
    line-height px2rem(80px)
    overflow: hidden
    border-radius 50%
    img
      width: 100%
      height: 100%

  .right-btn
    btnSize = 44px
    display: inline-block
    vertical-align middle
    color: #fff
    width: px2rem(btnSize)
    font-size: 0
    i
      font-size: px2rem(btnSize)

  .no-drawer
    height: 500px
    background-color: red
</style>
