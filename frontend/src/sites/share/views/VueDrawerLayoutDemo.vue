<template>
  <div class="layout">
    <div class="head">
      <div class="container">
        <div class="left">
          <h1 class="title">Vue Drawer Layout</h1>
          <h3 class="hint">
            A simple DrawerLayout component like Android has for
            <a href="http://vuejs.org">Vue.js</a>
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
          <codes name="demo1"/>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Slide out from right
        </h2>
        <div class="hint">
          Add <blockquote>reverse="true"</blockquote>
        </div>
        <div class="demo">
          <demo2/>
        </div>
        <div class="code">
          <codes name="demo2"/>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Content movable
        </h2>
        <div class="demo">
          <demo3/>
        </div>
        <div class="code">
          <codes name="demo3"/>
        </div>
      </div>
    </div>
    <div class="foot">
      Copyright © {{new Date().getFullYear()}} <a href="https://github.com/hjl19911127">Alexander Huang</a>. Developed
      and maintained by <a href="https://github.com/hjl19911127">Alexander Huang</a>.
    </div>
  </div>
</template>
<script>
  import codes from '../components/vue-drawer-layout/demo-codes'
  import Demo1 from '../components/vue-drawer-layout/demo1'
  import Demo2 from '../components/vue-drawer-layout/demo2'
  import Demo3 from '../components/vue-drawer-layout/demo3'

  export default {
    data() {
      return {}
    },
    components: {
      codes,
      Demo1,
      Demo2,
      Demo3
    },
    methods: {
      formatSrc(src) {
        return 'data:text/html;charset=utf-8,' + encodeURIComponent(`<body><style>body{margin:0;}.gist-file{margin-bottom: 0!important;}</style>${src}</body>`)
      }
    },
  }
</script>
<!--<style lang="stylus" src="../assets/stylus/reset"></style>-->
<style lang="stylus" src="../assets/stylus/vue-drawer-layout-demo"></style>
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
      font-size: 36px
      color #666
      line-height 2

  .foot
    height: 100px
    line-height: 100px
    text-align: center
    background-color: #666
    color: #fff
    margin-top: 80px;
    a
      color: #fff
      text-decoration underline

  .example
    overflow: hidden
    .title
      font-size: 30px;
      font-weight: bold;
      margin: 60px 0 20px 0;
    .hint
      margin-bottom: 2em
      code
        background-color: #ddd

  .demo
    position: relative
    float: left
    width 600px
    height 300px
    background-color: #fa8787
    user-select none
    margin-right: 50px

  .code
    box-sizing border-box
    font-size: 14px
    float: left
    position: relative
    width 550px
    height 300px
    overflow: auto
    padding: 20px
    background-color: #fdf6e3

</style>



