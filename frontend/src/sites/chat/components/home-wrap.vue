<template>
  <chat-container :page-title="pageTitle">
    <div class="avatar-wrap" slot="header-left">
      <img src="http://static.codehuang.local:20081/upload/avatars/default.png">
    </div>
    <template slot="content">
      <chat-searchbar></chat-searchbar>
      <slot></slot>
    </template>
    <chat-navbar slot="footer"></chat-navbar>
  </chat-container>
</template>
<script>
  import ChatContainer from '../components/container';
  import ChatNavbar from '../components/navbar';
  import ChatSearchbar from '../components/searchbar';

  export default {
    props: ['pageTitle'],
    components: {
      ChatContainer,
      ChatNavbar,
      ChatSearchbar
    },
    computed: {},
    methods: {},
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
