<template>
  <div class="option-bar">
    <div class="input-wrap" :style="{height:inputWrapHeight+'px'}">
      <content-editable class="input-text" v-model="inputText" @input="handleInput"/>
      <a href="javascript:void(0)" class="input-button" :class="{'disabled':!inputText.length}"
         @click="send">Send</a>
    </div>
    <ul class="option-button-group">
      <li><i class="c-icon-audio"></i></li>
      <li><i class="c-icon-image"></i></li>
      <li><i class="c-icon-camera"></i></li>
      <li><i class="c-icon-bonus"></i></li>
      <li><i class="c-icon-gif"></i></li>
      <li><i class="c-icon-smile"></i></li>
      <li><i class="c-icon-add-circle"></i></li>
    </ul>
  </div>
</template>

<script>
  import ContentEditable from '@/components/content-editable';

  let inputElement, inputElementHeight;
  export default {
    data() {
      return {
        inputElementHeight: 0,
        inputText: ''
      }
    },
    components: {
      ContentEditable
    },
    watch: {
      'inputElementHeight'() {
        this.$nextTick(() => {
          this.$emit('height-change', parseInt(window.getComputedStyle(this.$el).height));
        })
      }
    },
    computed: {
      inputWrapHeight() {
        return this.inputElementHeight;
      }
    },
    methods: {
      send() {

      },
      handleInput(data) {
        this.inputElementHeight = parseInt(window.getComputedStyle(inputElement).height)
      }
    },
    mounted() {
      inputElement = document.querySelector('.input-text');
      inputElementHeight = parseInt(window.getComputedStyle(inputElement).height);
      this.inputElementHeight = inputElementHeight;
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .option-bar
    position absolute
    left 0
    right 0
    bottom 0
    font-size 0
    background-color: #f0f2f8
    border-top 1px solid #f0f2f8

  .input-wrap
    position: relative

  .input-text
    float: left
    position: absolute
    left: px2rem(10px);
    bottom: 0
    border none
    width: 82%
    font-size px2rem(32px)
    min-height: px2rem(76px)
    line-height px2rem(32px)
    background-color: #fff
    max-height px2rem(200px)
    &::-webkit-scrollbar {
      display: none;
    }
    &:active, &:focus
      outline none

  .input-button
    position: absolute
    right: px2rem(10px);
    bottom: 0
    text-align center
    display: inline-block
    width: 14%
    line-height: px2rem(76px)
    height px2rem(76px)
    color: #fff
    background-color: #4ab9f8
    border-radius px2rem(10px)
    font-size px2rem(26px)

  .option-button-group
    line-height px2rem(94px)
    padding 0
    li
      display inline-block
      vertical-align middle
      width 14.2857%
      text-align center
      color #aaa
      font-size px2rem(56px)
      line-height 1
      &:active
        color #4ab9f8
</style>
