<template>
  <div class="nav-bar">
    <router-link class="nav-tab" :class="{active:$route.name === 'message'}" :to="{'name':'message'}">
      <div><i :class="[$route.name === 'message'?'c-icon-bubble-solid':'c-icon-bubble-hollow']"></i></div>
      <div class="tab-title">消息</div>
    </router-link>
    <router-link class="nav-tab" :class="{active:$route.name === 'contact'}" :to="{'name':'contact'}">
      <div><i :class="[$route.name === 'contact'?'c-icon-user-solid':'c-icon-user-hollow']"></i></div>
      <div class="tab-title">联系人</div>
    </router-link>
    <router-link class="nav-tab" :class="{active:$route.name === 'activity'}" :to="{'name':'activity'}">
      <div><i :class="[$route.name === 'activity'?'c-icon-star-solid':'c-icon-star-hollow']"></i></div>
      <div class="tab-title">动态</div>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .nav-bar
    position absolute
    left 0
    right 0
    bottom 0
    height px2rem(112px)
    line-height px2rem(112px)
    background-color #fff
    font-size 0
    border-top 1px solid #e8e8e8

  .nav-tab
    display inline-block
    vertical-align middle
    width 33.3333%
    text-align center
    color #aaa
    font-size px2rem(60px)
    line-height 1
    &.active
      color #4ab9f8
    .tab-title
      margin-top px2rem(6px)
      font-size px2rem(20px)
</style>
