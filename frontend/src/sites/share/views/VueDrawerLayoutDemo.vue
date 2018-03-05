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
        <div class="demo">
          <demo1/>
        </div>
        <div class="code">
          <iframe :src="'data:text/html;charset=utf-8,'+encodeURIComponent('<body><script src=\'https://gist.github.com/hjl19911127/625ce23d7d3238ad06f4801911690954.js\'></script></body>')"></iframe>
        </div>
      </div>
      <div class="example">
        <div class="demo">
          <vue-drawer-layout>
            <div class="drawer" slot="drawer">
              This is drawer
            </div>
            <div class="content" slot="content">
              <ul>
                <li v-for="item in new Array(100)">滚动视图</li>
              </ul>
            </div>
          </vue-drawer-layout>
        </div>
        <div class="code">
    <pre>
      &lt;vue-drawer-layout&gt;
        &lt;div class=&quot;menu-content&quot; slot=&quot;drawer&quot;&gt;
          Menus
        &lt;/div&gt;
        &lt;div class=&quot;content&quot; slot=&quot;content&quot;&gt;
          This is content
        &lt;/div&gt;
      &lt;/vue-drawer-layout&gt;
    </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Demo1 from '../components/vue-drawer-layout/demo1'

  export default {
    data() {
      return {}
    },
    components: {
      Demo1
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

  .demo
    position: relative
    float: left
    width 600px
    height 300px
    background-color: lightskyblue
    user-select none
    border 1px solid lightskyblue

  .code
    color white
    background-color: #999
    padding-bottom 9999px
    margin-bottom -9999px
    padding-top 20px
    overflow: hidden

  .drawer
    position: absolute
    background-color: lightgoldenrodyellow
    top: 0
    right: 0
    bottom: 0
    left: 0

  .content
    width 100%
    height 100%
    overflow: auto
</style>



