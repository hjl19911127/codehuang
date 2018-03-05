<template>
  <div class="layout">
    <div class="head">
      <div class="container">
        <div class="left">
          <h1 class="title">Vue Drawer Layout</h1>
          <h3 class="hint">A simple DrawerLayout component like Android has for <a href="http://vuejs.org">Vue.js</a>
          </h3>
        </div>
        <div class="right">
          <a href="https://github.com/hjl19911127/vue-drawer-layout">View on Github</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="example">
        <h2 class="title">
          Basic Usage
        </h2>
        <div class="demo">
          <demo1/>
        </div>
        <div class="code">
          <div class="iframe-container">
            <iframe frameborder="0"
                    :src="'data:text/html;charset=utf-8,'+encodeURIComponent('<body style=\'margin:0;\'><script src=\'https://gist.github.com/hjl19911127/625ce23d7d3238ad06f4801911690954.js\'></script></body>')"></iframe>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Reverse (slide out from right)
        </h2>
        <div class="demo">
          <demo2/>
        </div>
        <div class="code">
          <iframe frameborder="0"
                  :src="'data:text/html;charset=utf-8,'+encodeURIComponent('<body style=\'margin:0;\'><script src=\'https://gist.github.com/hjl19911127/625ce23d7d3238ad06f4801911690954.js\'></script></body>')"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Demo1 from '../components/vue-drawer-layout/demo1'
  import Demo2 from '../components/vue-drawer-layout/demo2'

  export default {
    data() {
      return {}
    },
    components: {
      Demo1, Demo2
    },
    methods: {},
  }
</script>
<style lang="stylus" src="../assets/stylus/reset"></style>
<style lang="stylus" scoped>
  .layout
    font-size: 16px;
    a
      font-size: 16px;

  .container
    width: 1200px
    margin: 0 auto

  .head
    background: #f5f5f5 linear-gradient(to bottom, #eee 0, #f5f5f5 100%);
    padding 30px 0
    a
      text-decoration underline
    .title
      font-size: 32px
      color #666
      line-height 2

  .example
    overflow: hidden
    margin-bottom: 20px
    .title
      font-size: 20px;
      line-height 2.5

  .demo
    position: relative
    float: left
    width 600px
    height 300px
    background-color: lightskyblue
    user-select none

  .code
    float: left
    position: relative
    width 600px
    height 300px
    .iframe-container
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
    iframe
      width: 100%
      height: 100%

</style>



