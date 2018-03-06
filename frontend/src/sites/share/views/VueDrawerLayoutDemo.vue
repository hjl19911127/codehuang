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
          <div class="github-btn">
            <a href="https://github.com/hjl19911127/vue-drawer-layout">View on Github</a>
          </div>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=star&count=true&size=large"
              frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=watch&count=true&size=large&v=2"
              frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=fork&count=true&size=large"
              frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="example">
        <h2 class="title">
          Basic Usage
        </h2>
        <p class="hint">
          Try to use your mouse drag from left to right.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo1/>
          </div>
          <div class="code">
            <codes name="demo1"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Slide out from right
        </h2>
        <p class="hint">
          Set <code>reverse="true"</code> then drag from right to left.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo2/>
          </div>
          <div class="code">
            <codes name="demo2"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Content movable
        </h2>
        <p class="hint">
          Set <code>content-drawable="true"</code> to enable content moving.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo3/>
          </div>
          <div class="code">
            <codes name="demo3"/>
          </div>
        </div>
        <p class="hint">
          And you could set <code>drawer-width</code> and <code>drawable-distance</code>with different value to make
          drawer and content with different
          move distance(speed). Set <code>z-index="0"</code> to hide the drawer below the content then you could have a
          clear view of it.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo4/>
          </div>
          <div class="code">
            <codes name="demo4"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Methods
        </h2>
        <p class="hint">
          Use method <code>toggle</code> to show and hide drawer.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo5/>
          </div>
          <div class="code">
            <codes name="demo5"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Events
        </h2>
        <p class="hint">
          We defined several events such as <code>slide-start</code> <code>slide-move</code> <code>slide-end</code> and
          <code>mask-click</code>. This example show you how to use it to do fun jobs like hide drawer by clicking mask.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo6/>
          </div>
          <div class="code">
            <codes name="demo6"/>
          </div>
        </div>
        <p class="hint">
          You could get full api doc <a href="https://github.com/hjl19911127/vue-drawer-layout">View on Github</a> and
          wish this component is really helpful to you. Thanks!
        </p>
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
  import Demo4 from '../components/vue-drawer-layout/demo4'
  import Demo5 from '../components/vue-drawer-layout/demo5'
  import Demo6 from '../components/vue-drawer-layout/demo6'

  export default {
    data() {
      return {}
    },
    components: {
      codes,
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      Demo5,
      Demo6
    },
    methods: {},
  }
</script>
<style lang="stylus" src="../assets/stylus/vue-drawer-layout-demo"></style>



