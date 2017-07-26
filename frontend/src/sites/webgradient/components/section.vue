<template>
  <section class="index_page__content_section">
    <div class="container index_page__content_container">
      <div class="gradient js-appearing-card" v-for="(item,index) in cards.items">
        <span class="gradient__title">{{index + 1 | formatIndex}} {{item.title}}</span>
        <a class="gradient__download_button">Get .PNG</a>
        <div class="gradient__background" :style="item.style" :data-css-code="item.style"
             @click.prevent="seeViewFull($event)"></div>
        <div class="gradient__colors_box" v-if="item.sc">
          <span class="gradient__color">{{item.sc}}</span>
          <span class="gradient__arrow_symbol">→</span>
          <span class="gradient__color">{{item.ec}}</span>
        </div>
        <div class="gradient__advanced_text" v-if="!item.sc">Many colors</div>
        <button class="gradient__copy_button js-copy-css" type="button" :data-clipboard-text="item.style">Copy CSS
        </button>
        <div class="gradients__copy_message">
          <textarea class="gradients__code_text js-code-textarea" readonly>{{item.style}}</textarea>
        </div>
        <div class="gradients__done_message">
          <div class="gradients__done_message_box">
            <span class="gradients__done_emoji">{{item.emoji ? decodeURIComponent(item.emoji) : ''}}</span>
            <br/>
            <span class="gradients__done_word">{{item.word}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index_page__loading_wrapper" v-show="cards.items.length !== cards.count">
      <div class="index_page__loading_section">
        <i></i><i></i><i></i><i></i><i></i>
      </div>
    </div>

  </section>
</template>
<script>
  import api from '../api/gradient'
  import Clipboard from '../assets/js/clipboard.min.js'
  import ScrollReveal from '../assets/js/scrollreveal.js'

  export default {
    data() {
      return {
        cards: {
          items: [],
          count: 0
        },
        filter: {
          page: 0,
          size: 12
        },
        isLoading: false
      }
    },

    methods: {
      init() {
        this.getList()
      },
      getList() {
        api.getList(this.filter).then((data) => {
          this.cards.items = this.cards.items.concat(data.items)
          this.cards.count = data.count
          this.isLoading = false
          this.$nextTick(() => {
            this.copyCss()
            if (!window.sr) this.oscrollreveal()
            else window.sr.sync()
          })

        }).catch((err) => {
          // error callback
        })
      },
      seeViewFull(e) {
        this.$store.commit('SET_FULL_VIEW', true)
        this.$store.commit('SET_STYLE', e.target.attributes['data-css-code'].value + ';left:' + (e.clientX - 1500) + 'px;' + 'top:' + (e.clientY - 1500) + 'px')
        if (!~document.body.className.lastIndexOf('state-fixed')) document.body.className += ' state-fixed'
        setTimeout(() => {
          this.$store.commit('SET_COMPLETED', true)
        }, 700)
      },
      scroll() {
        document.body.onscroll = this.throttle(this.getMoreCards, 300)
      },
      getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      },
      getMoreCards() {
        let container = document.querySelector('.index_page__content_section'),
          f = document.getElementById('footer'),
          doc = document.body
        if ((container.offsetTop + container.clientHeight + f.clientHeight - 200 <= doc.clientHeight + this.getScrollTop()) && !this.isLoading) {
          this.filter.page++
          if (this.filter.page * this.filter.size >= this.cards.count) return
          this.isLoading = true
          this.getList()
        }
      },
      throttle(fn, delay) {
        var timer = null
        return function () {
          var context = this, args = arguments;
          clearTimeout(timer)
          timer = setTimeout(function () {
            fn.apply(context, args)
          }, delay)
        }
      },
      copyCss() {
        let e = new window.Clipboard('.js-copy-css'),
          t = 2e3,
          n = 700,
          self = this
        e.on('success', function (e) {
          e.trigger.parentNode.className += ' state-done-message-visible'
          setTimeout(() => {
            e.trigger.parentNode.className += ' state-done-message-gone'
          }, t)
          setTimeout(() => {
            e.trigger.parentNode.className = e.trigger.parentNode.className.replace('state-done-message-visible', '').replace('state-done-message-gone', '').trim()
          }, t + n)
        })
        e.on('error', function (e) {
          e.trigger.parentNode.className += ' state-copy-message-visible'
          e.trigger.parentNode.querySelector('.js-code-textarea').select()
          setTimeout(() => {
            e.trigger.parentNode.className += ' state-copy-message-gone'
          }, 5 * t)
          setTimeout(() => {
            e.trigger.parentNode.className = e.trigger.parentNode.className.replace('state-copy-message-visible', '').replace('state-copy-message-gone', '').trim()
          }, 5 * t + n)
        })
      },
      oscrollreveal() {
        window.sr = window.ScrollReveal()
        sr.reveal(".js-appearing-card", {
          origin: "bottom",
          distance: "10%",
          duration: 500,
          delay: 0,
          rotate: {
            x: 0,
            y: 0,
            z: 0
          },
          opacity: .1,
          scale: .99,
          easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
          container: window.document.documentElement,
          mobile: !1,
          reset: !1,
          useDelay: "always",
          viewFactor: .2,
          viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          beforeReveal: function (e) {
          },
          beforeReset: function (e) {
          },
          afterReveal: function (e) {
          },
          afterReset: function (e) {
          }
        })
      }
    },
    created() {
      this.init()
    },
    mounted() {
      this.scroll()
    }
  }
</script>
<style lang="stylus">
  .index_page__content_section
    position relative
    z-index 1
    padding 50px 0 70px
    background-color #f6f6f6

  .gradient
    position relative
    float: left
    width calc(33.3333% - 20px)
    height 420px
    background-color #fff
    margin-right: 30px
    margin-bottom 50px
    border-radius 16px
    overflow hidden
    box-shadow 0 6px 15px rgba(36, 37, 38, 0.08)
    transition box-shadow 0.25s ease
    &:hover
      box-shadow 5px 12px 20px rgba(36, 37, 38, 0.13)
    &:active
    &.state-done-message-visible
    &.state-copy-message-visible
      box-shadow 5px 12px 20px rgba(36, 37, 38, 0)

  @media (min-width: 1025px)
    .gradient:nth-of-type(3n)
      margin-right: 0

  @media (max-width: 1024px)
    .gradient:nth-of-type(2n)
      margin-right: 0

    .gradient
      width calc(50% - 15px)

  @media (max-width: 650px)
    .gradient
      width 100%
      margin-right 0

  .gradient__title
    position absolute
    left 36px
    top 29px
    font-size .8125em
    color #333435
    letter-spacing 0.03em

  .gradient__download_button
    position absolute
    z-index 1
    top 28px
    right 26px
    padding-right 30px
    text-indent -5px
    font-size 13px
    color transparent
    text-decoration none
    transtion color .2s ease, text-indent .2s ease
    &:before
      content ''
      position absolute
      right 0
      bottom 0
      top 0
      margin 0
      width: 20px
      height 20px
      border-radius 50%
      border 1px solid #383839
      background url('data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iOSIgaGVpZ2h0PSI5Ij48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwOSI+PC9kZWZzPjxwYXRoIGlkPSJTdmdqc1BhdGgxMDEwIiBkPSJNNTg4LjcgMTY5LjE2NUw1ODYuMTI1IDE3MS43NDA5OTk5OTk5OTk5OUw1ODYuMTI1IDE2NS4xMjVDNTg2LjEyNSAxNjQuNzggNTg1Ljg0NSAxNjQuNSA1ODUuNSAxNjQuNUM1ODUuMTU1IDE2NC41IDU4NC44NzUgMTY0Ljc4IDU4NC44NzUgMTY1LjEyNUw1ODQuODc1IDE3MS43NDA5OTk5OTk5OTk5OUw1ODIuMjk5IDE2OS4xNjVDNTgyLjA1NSAxNjguOTIxIDU4MS42NiAxNjguOTIxIDU4MS40MTU5OTk5OTk5OTk5IDE2OS4xNjVDNTgxLjE3MDk5OTk5OTk5OTkgMTY5LjQxIDU4MS4xNzA5OTk5OTk5OTk5IDE2OS44MDQ5OTk5OTk5OTk5OCA1ODEuNDE1OTk5OTk5OTk5OSAxNzAuMDQ4OTk5OTk5OTk5OThMNTg0Ljk1MDk5OTk5OTk5OTkgMTczLjU4Mzk5OTk5OTk5OTk3QzU4NS4xMDA5OTk5OTk5OTk5IDE3My43MzM5OTk5OTk5OTk5OCA1ODUuMzA1OTk5OTk5OTk5OSAxNzMuNzc5OTk5OTk5OTk5OTcgNTg1LjQ5OTk5OTk5OTk5OTkgMTczLjc0NTk5OTk5OTk5OTk4QzU4NS42OTM5OTk5OTk5OTk4IDE3My43Nzk5OTk5OTk5OTk5NyA1ODUuODk5OTk5OTk5OTk5OSAxNzMuNzMyOTk5OTk5OTk5OTggNTg2LjA0OTk5OTk5OTk5OTggMTczLjU4Mzk5OTk5OTk5OTk3TDU4OS41ODQ5OTk5OTk5OTk4IDE3MC4wNDg5OTk5OTk5OTk5OEM1ODkuODI4OTk5OTk5OTk5OCAxNjkuODA0OTk5OTk5OTk5OTggNTg5LjgyODk5OTk5OTk5OTggMTY5LjQwOSA1ODkuNTg0OTk5OTk5OTk5OCAxNjkuMTY1QzU4OS4zMzk5OTk5OTk5OTk4IDE2OC45MjEgNTg4Ljk0Mzk5OTk5OTk5OTggMTY4LjkyMSA1ODguNjk5OTk5OTk5OTk5OCAxNjkuMTY1WiAiIGZpbGw9IiMzMzM0MzUiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTU4MSwtMTY1KSI+PC9wYXRoPjwvc3ZnPg==') no-repeat center / 8px auto
      transition all .2s ease
    &:hover
      color: #383839
      text-indent 0
      &:before
        border-color transparent
        background-color #fff
        box-shadow 2px 3.5px 5px rgba(51, 52, 53, 0.16)

  .gradient__background
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    margin auto
    border-radius 50%
    width 250px
    height 250px
    background-repeat no-repeat
    background-size cover
    background-position center
    cursor url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuOC4zICgyOTgwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+em9vbS1jdXJzb3I8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMjQsMTIgQzI0LDE4LjYzIDE4LjYyNywyNCAxMiwyNCBDNS4zNzIsMjQgMCwxOC42MyAwLDEyIEMwLDUuMzcgNS4zNzIsMCAxMiwwIEMxOC42MjcsMCAyNCw1LjM3IDI0LDEyIEwyNCwxMiBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICAgICAgPGZpbHRlciB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMiI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMSIgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTY4ODQ2MjQxIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ6b29tLWN1cnNvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiPgogICAgICAgICAgICAgICAgPGcgaWQ9Inpvb20tY3Vyc29yIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iU3ZnanNTdmcxMDAwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlN2Z2pzUGF0aDEwMDciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMS1saW5rIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGF0aC0xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWx0ZXI9InVybCgjZmlsdGVyLTIpIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGF0aC0xLWxpbmsiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCwxMiBDMjQsMTguNjMgMTguNjI3LDI0IDEyLDI0IEM1LjM3MiwyNCAwLDE4LjYzIDAsMTIgQzAsNS4zNyA1LjM3MiwwIDEyLDAgQzE4LjYyNywwIDI0LDUuMzcgMjQsMTIgTDI0LDEyIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibWFnbmlmeWluZy1nbGFzcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuMDAwMDAwKSIgZmlsbD0iIzFBMUExQiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuODk0OTAwMiwxMS4zODgwMjY2IEw4Ljk3ODcxMzk3LDguNDcxODQwMzUgQzkuNzYwOTc1NjEsNy41NzI1MDU1NCAxMC4yMzQ1ODk4LDYuMzk5MTEzMDggMTAuMjM0NTg5OCw1LjExNjYyOTcxIEMxMC4yMzQ1ODk4LDIuMjkzNTY5ODQgNy45MzgzNTkyLDAgNS4xMTc5NjAwOSwwIEMyLjI5NDkwMDIyLDAgMC4wMDEzMzAzNzY5NCwyLjI5NjIzMDYgMC4wMDEzMzAzNzY5NCw1LjExNjYyOTcxIEMwLjAwMTMzMDM3Njk0LDcuOTM3MDI4ODIgMi4yOTc1NjA5OCwxMC4yMzMyNTk0IDUuMTE3OTYwMDksMTAuMjMzMjU5NCBDNi40MDA0NDM0NiwxMC4yMzMyNTk0IDcuNTczODM1OTIsOS43NTk2NDUyMyA4LjQ3MzE3MDczLDguOTc3MzgzNTkgTDExLjM4OTM1NywxMS44OTM1Njk4IEMxMS40NTg1MzY2LDExLjk2Mjc0OTQgMTEuNTUxNjYzLDEyIDExLjY0MjEyODYsMTIgQzExLjczMjU5NDIsMTIgMTEuODI1NzIwNiwxMS45NjU0MTAyIDExLjg5NDkwMDIsMTEuODkzNTY5OCBDMTIuMDMzMjU5NCwxMS43NTUyMTA2IDEyLjAzMzI1OTQsMTEuNTI2Mzg1OCAxMS44OTQ5MDAyLDExLjM4ODAyNjYgTDExLjg5NDkwMDIsMTEuMzg4MDI2NiBaIE0wLjcxNzA3MzE3MSw1LjExNjYyOTcxIEMwLjcxNzA3MzE3MSwyLjY5MDAyMjE3IDIuNjkxMzUyNTUsMC43MTg0MDM1NDggNS4xMTUyOTkzMywwLjcxODQwMzU0OCBDNy41NDE5MDY4NywwLjcxODQwMzU0OCA5LjUxMzUyNTUsMi42OTI2ODI5MyA5LjUxMzUyNTUsNS4xMTY2Mjk3MSBDOS41MTM1MjU1LDcuNTQwNTc2NSA3LjU0MTkwNjg3LDkuNTE3NTE2NjMgNS4xMTUyOTkzMyw5LjUxNzUxNjYzIEMyLjY5MTM1MjU1LDkuNTE3NTE2NjMgMC43MTcwNzMxNzEsNy41NDMyMzcyNSAwLjcxNzA3MzE3MSw1LjExNjYyOTcxIEwwLjcxNzA3MzE3MSw1LjExNjYyOTcxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=') , pointer

  @media (max-width: 992px)
    .gradient__background
      height: 200px
      width: 200px

  .gradient__colors_box
    position absolute
    left 35px
    bottom 34px

  .gradient__advanced_text
    position absolute
    left: 35px
    bottom: 34px
    font-size .8125em
    color: #333435

  .gradient__color
    font-size .8125em
    color #333435

  .gradient__arrow_symbol
    margin 0 8px 0 10px
    font-weight 700

  .gradient__copy_button
    position absolute
    right 30px
    bottom 31px
    font-size .8125em
    color #333435
    letter-spacing 0.03em
    cursor pointer
    &:before
    &:after
      content ''
      position absolute
      left 0
      bottom -2px
      height 1px
      width 13%
      background-color #333435
      transition: opacity 0.25s ease, transform 0.25s ease, width 0.3s cubic-bezier(0.68, 0.05, 0.46, 1.02), left 0.2s 0.2s ease-out
    &:after
      z-index 10
      width 30%
      background-color #fff
      opacity 0
    &:hover
      &:before
        width 100%
      &:after
        opacity 1
        left 100%

  @media (min-width: 1025px)
    .gradient:nth-of-type(3n)
      margin-right: 0

  .gradients__copy_message
  .gradients__done_message
    visibility hidden
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    margin auto
    transition opacity .25s ease
    &:before
      content ''
      width 100%
      padding-bottom 100%
      position absolute
      left 50%
      top 50%
      margin auto
      z-index 1
      border-radius 50%
      background-color: rgba(255, 255, 255, .9)
      transform scale(0)
      transform-origin center
      transition transform .7s cubic-bezier(0.47, 0.04, 0.22, 0.92)

  .gradients__code_text
    opacity 0
    position absolute
    z-index 10
    left 0
    right 0
    top 50%
    transform translateY(-50%)
    max-width 300px
    padding 0 30px
    transition opacity .25s ease
    text-align center
    margin auto
    width 100%
    border none
    background-color transparent
    height: 70px
    resize none

  .gradients__done_message_box
    opacity 0
    position absolute
    z-index 10
    left 0
    right 0
    top 50%
    transform translateY(-50%)
    margin auto
    text-align center
    transition opacity .25s ease

  .gradients__done_emoji
    font-size 50px
    margin-bottom 10px

  .gradients__done_word
    font-size .8125em

  .state-done-message-visible
    .gradients__done_message
      visibility visible
      &:before
        transform scale(3)
      .gradients__done_message_box
        transition-delay .6s
        opacity 1

  .state-done-message-gone
    .gradients__done_message
      opacity 0

  .state-copy-message-visible
    .gradients__copy_message
      visibility visible
      &:before
        transform scale(3)
      .gradients__code_text
        opacity 1

  .state-copy-message-gone
    .gradients__done_message
      opacity 0

  .index_page__loading_wrapper
    width: 100%
    display: flex
    align-items: center
    justify-content: center

  .index_page__loading_section
    width: 80px
    height: 20px
    position: relative
    text-align: center
    i
      display: inline-block
      width: 20px
      height: 20px
      border-radius: 50%
      margin-right: 10px
      position: absolute
      &:nth-child(1)
        animation: loading-6 2s linear 0s infinite
        background-image: linear-gradient(-180deg, #FECFEF 0%, #FF989C 100%)
      &:nth-child(2)
        animation: loading-6 2s linear -0.4s infinite
        background-image: linear-gradient(0deg, #330867 0%, #30CFD0 100%)
      &:nth-child(3)
        animation: loading-6 2s linear -0.8s infinite
        background-image: linear-gradient(0deg, #009EFD 0%, #2AF598 100%)
      &:nth-child(4)
        animation: loading-6 2s linear -1.2s infinite
        background-image: linear-gradient(0deg, #FBC8D4 0%, #9795F0 100%)
      &:nth-child(5)
        animation: loading-6 2s linear -1.6s infinite
        background-image: linear-gradient(90deg, #B12A5B 0%, #CF556C 25%, #FF8C7F 63%, #FF8177 100%)

  @keyframes loading-6
    0%
      left: 100px
      top: 0

    80%
      left: 0
      top: 0

    85%
      left: 0
      top: -20px

    95%
      left: 100px
      top: -20px

    100%
      left: 100px
      top: 0


</style>

