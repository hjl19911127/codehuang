<template>
  <div class="wrap">
    <chat-header>
      <div class="head-title" slot="middle">
        <div class="name">Vue Drawer Layout</div>
        <div class="status">Online</div>
      </div>
      <a href="javascript:void(0)" class="head-btn" slot="left" @click="handleReturnBtnClick">
        <i class="c-icon-arrow-left"></i>
      </a>
      <a href="javascript:void(0)" class="head-btn" slot="right">
        <i class="c-icon-add"></i>
      </a>
    </chat-header>
    <chat-content :style="contentBottomOffset?{bottom:contentBottomOffset+'px'}:{}">
      <div class="message-list">
        <div :class="{'is-mine':item.from_user_id === 0}" v-for="(item,index) in messages" :key="item.id">
          <div class="message-time" v-show="showTimeStamp(item,index)">{{item.sendTime | time('HH:mm')}}</div>
          <div class="message-item">
            <div class="message-item-block block-left">
              <div class="avatar-wrap" v-show="item.from_user_id !== 0">
                <img src="//static.codehuang.com/upload/avatars/default.png">
              </div>
            </div>
            <div class="message-item-block block-center">
              <div class="message-content-wrap">
                <div class="message-content">{{item.content}}</div>
              </div>
            </div>
            <div class="message-item-block block-right">
              <div class="avatar-wrap" v-show="item.from_user_id === 0">
                <img src="//static.codehuang.com/upload/avatars/default.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </chat-content>
    <chat-option-bar @height-change="handleHeightChange"></chat-option-bar>
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
        contentBottomOffset: 0,
        messages: [],
        total: [],
        filter: {
          page: 0, size: 10
        }
      }
    },
    computed: {
      messageGroups() {
        let items = this.messages;
        let time = 0, lastTime = 0, groupItems = [], allGroup = [];
        items.forEach((v, i) => {
          if (i === 0) {
            time = lastTime = v.sendTime
          } else {
            lastTime = time;
            time = v.sendTime;
            if (time - lastTime >= 180000) {
              allGroup = allGroup.concat(groupItems)
              groupItems = []
            } else {
              groupItems.push(v)
            }
          }
        });
        return allGroup;
      }
    },
    methods: {
      showTimeStamp(item, index) {
        let last = this.messages[index - 1];
        return !last || item.sendTime - last.sendTime >= 180000
      },
      handleReturnBtnClick() {
        this.$router.back()
      },
      handleHeightChange(data) {
        this.contentBottomOffset = data;
      }
    },
    created() {
      let timeOffset = 0;
      this.messages = new Array(100).fill(undefined).map((v, i) => {
        let isMine = Math.round(Math.random());
        //2017-07-27 10:26:14
        let time = +new Date();
        timeOffset += 180000 * (+(i % 3 === 0));
        return {
          id: i + 1,
          from_user_id: isMine,
          from_user_name: ['Vue Drawer Layout', 'Vue Drawer Layout'][isMine],
          to_user_id: +!isMine,
          sendTime: time + timeOffset,
          content: 'Vue: Hello world'
        }
      });
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .wrap {
    background-color: #f0f2f8;
  }

  .message-list
    padding px2rem(30px) 0

  .message-item
    display: block
    font-size: 0
    padding px2rem(24px) 0

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

  .message-content-wrap
    padding-right px2rem(30px)

  .message-content
    color: #000
    font-size: px2rem(30px)
    line-height: px2rem(46px)
    padding px2rem(20px)
    background-color: #fff
    border-radius px2rem(30px)
    white-space pre-wrap

  .is-mine
    .message-content-wrap
      padding-right 0
      padding-left px2rem(30px)
    .message-content
      color: #fff
      background-color: #4ab9f8

  .message-time
    color: #999
    font-size: px2rem(20px)
    line-height: px2rem(84px)
    text-align: center

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
