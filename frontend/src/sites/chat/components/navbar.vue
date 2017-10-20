<template>
  <div class="nav">
    <router-link class="nav-tab" :class="{active:$route.name === 'message'}" :to="{'name':'message'}">
      <div><i class="c-icon-bubbles"></i></div>
      <div class="tab-title">消息</div>
    </router-link>
    <router-link class="nav-tab" :class="{active:$route.name === 'contact'}" :to="{'name':'contact'}">
      <div><i class="c-icon-users"></i></div>
      <div class="tab-title">联系人</div>
    </router-link>
    <router-link class="nav-tab" :class="{active:$route.name === 'activity'}" :to="{'name':'activity'}">
      <div><i class="c-icon-star-full"></i></div>
      <div class="tab-title">动态</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    computed: {
      showMenu() {
        return this.$store.getters.getShowMenu;
      }
    },
    components: {}
  };
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .nav
    position absolute
    left 0
    right 0
    bottom 0
    height px2rem(112px)
    line-height px2rem(112px)
    background-color #fff
    font-size 0

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
      margin-top px2rem(5px)
      font-size px2rem(24px)
</style>
