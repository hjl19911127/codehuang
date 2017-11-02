<template>
  <div>
    <chat-header page-title="消息">
      <a href="javascript:void(0)" class="head-avatar" slot="left" @click="handleHeaderAvatarClick">
        <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
      </a>
      <a href="javascript:void(0)" class="right-btn" slot="right">
        <i class="c-icon-add"></i>
      </a>
    </chat-header>
    <chat-content>
      <chat-search-bar></chat-search-bar>
      <div class="message-list">
        <router-link class="message-item" :to="{name:'messageDetail',params: { mid: item.id }}"
                     v-for="item in messages.items" :key="item.id">
          <div class="message-item-block block-left">
            <div class="avatar-wrap">
              <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
            </div>
          </div>
          <div class="message-item-block block-center">
            <div class="message-from" v-text="item.from"></div>
            <div class="message-content" v-text="item.content"></div>
          </div>
          <div class="message-item-block block-right">
            <div class="message-time">8:45</div>
          </div>
        </router-link>
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
      handleHeaderAvatarClick() {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', true);
      }
    },
    created() {
      this.messages.items = (new Array(100)).fill({
        id: 1,
        from: '福大数计15工硕群',
        content: '软工 刘峰：明天早上过去'
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
</style>
