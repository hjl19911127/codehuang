<template>
  <div class="wrap">
    <chat-header>
      <div class="head-title" slot="middle">
        <div class="name">老夫子</div>
        <div class="status">在线</div>
      </div>
      <a href="javascript:void(0)" class="head-btn" slot="left" @click="handleReturnBtnClick">
        <i class="c-icon-arrow-left"></i>
      </a>
      <a href="javascript:void(0)" class="head-btn" slot="right">
        <i class="c-icon-add"></i>
      </a>
    </chat-header>
    <chat-content>
      <div class="message-list">
        <div class="message-item" v-for="item in messages.items" :key="item.id">
          <div class="message-item-block block-left">
            <div class="avatar-wrap" v-show="item.from_user_id !== 0">
              <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
            </div>
          </div>
          <div class="message-item-block block-center">
            <div class="message-content" v-text="item.content"></div>
          </div>
          <div class="message-item-block block-right">
            <div class="avatar-wrap" v-show="item.from_user_id === 0">
              <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
            </div>
          </div>
        </div>
      </div>
    </chat-content>
  </div>
</template>
<script>
  import ChatHeader from '../components/Header';
  import ChatContent from '../components/Content';
  import ChatOptionBar from '../components/OptionBar';

  export default {
    components: {
      ChatHeader,
      ChatContent,
      ChatOptionBar
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
      handleReturnBtnClick() {
        this.$router.back()
      }
    },
    created() {

      this.messages.items = new Array(100).fill(undefined).map((v, i) => {
        let isMine = Math.round(Math.random())
        return {
          id: i + 1,
          from_user_id: isMine,
          from_user_name: ['老夫子', '豆豆儿'],
          to_user_id: +!isMine,
          sendTime: +new Date() + 10000 * i,
          content: '软工 刘峰：明天早上过去'
        }
      })
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .wrap {
    background-color: #f0f2f8;
  }

  .message-item
    display: block
    font-size: 0

  .message-item-block
    line-height: 1
    display: inline-block
    vertical-align: top

  .block-left
    width 20%

  .block-center
    width 60%

  .block-right
    width 20%

  .message-content
    color: #000
    font-size: px2rem(30px)
    line-height: px2rem(46px)
    padding px2rem(20px)
    background-color: #fff
    border-radius px2rem(30px)

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

  .head-btn
    btnSize = 44px
    display: inline-block
    vertical-align middle
    color: #fff
    width: px2rem(btnSize)
    font-size: 0
    i
      font-size: px2rem(btnSize)

  .head-title
    padding-top px2rem(20px)
    line-height: 1.2
    color: #fff
    .name
      font-size: px2rem(30px)
    .status
      font-size: px2rem(20px)
</style>
