<template>
  <div>
    <chat-header></chat-header>
    <div class="container">
      <chat-searchbar></chat-searchbar>
      <router-view></router-view>
    </div>
    <chat-navbar></chat-navbar>
  </div>
</template>
<script>
  import Cookie from '@/utils/cookie';
  import ChatHeader from '../components/header';
  import ChatNavbar from '../components/navbar';
  import ChatSearchbar from '../components/searchbar';

  export default {
    components: {
      ChatHeader,
      ChatNavbar,
      ChatSearchbar
    },
    computed: {
      skin() {
        return this.$store.getters.getSkin;
      }
    },
    methods: {
      switchSkin(skin) {
        this.$store.dispatch('SET_SKIN', {skin: skin})
      },
    },
    created() {
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/shared/_mixin'
  .container
    position: absolute
    top: px2rem(104px)
    bottom px2rem(112px)
    left: 0
    right: 0
    overflow: auto
</style>
