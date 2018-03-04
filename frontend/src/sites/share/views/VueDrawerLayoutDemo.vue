<template>
  <div>
    <div class="demo">
      <vue-drawer-layout>
        <div class="menu-content" slot="drawer">
          <div class="menu-item-list">
            <router-link class="menu-item" to="/vip">激活会员</router-link>
            <router-link class="menu-item" to="/wallet">QQ钱包</router-link>
            <router-link class="menu-item" to="/vip">个性装扮</router-link>
            <router-link class="menu-item" to="/collect">我的收藏</router-link>
            <router-link class="menu-item" to="/album">我的相册</router-link>
            <router-link class="menu-item" to="/file">我的文件</router-link>
            <router-link class="menu-item" to="/vip">免流量特权</router-link>
          </div>
        </div>
        <div class="content" slot="content">
          内容区
        </div>
      </vue-drawer-layout>
    </div>
    <div class="demo">
      <vue-drawer-layout>
        <div class="menu-content" slot="drawer">
          <div class="menu-item-list">
            <router-link class="menu-item" to="/vip">激活会员</router-link>
            <router-link class="menu-item" to="/wallet">QQ钱包</router-link>
            <router-link class="menu-item" to="/vip">个性装扮</router-link>
            <router-link class="menu-item" to="/collect">我的收藏</router-link>
            <router-link class="menu-item" to="/album">我的相册</router-link>
            <router-link class="menu-item" to="/file">我的文件</router-link>
            <router-link class="menu-item" to="/vip">免流量特权</router-link>
          </div>
        </div>
        <div class="content" slot="content">
          <ul>
            <li v-for="item in new Array(100)">滚动视图</li>
          </ul>
        </div>
      </vue-drawer-layout>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    components: {},
    methods: {},
  }
</script>
<style lang="stylus" src="../assets/stylus/reset"></style>
<style lang="stylus" scoped>
  .demo
    position: relative
    width 600px
    height 300px
    background-color: lightskyblue
    user-select none
    font-size: 16px;
    border 1px solid lightskyblue
    margin-bottom: 20px

  .menu-content
    background-color: #fff
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
    .menu-item
      font-size: 16px
      display: block
      text-align: center



  .content
    width 100%
    height 100%
    overflow: auto
</style>



