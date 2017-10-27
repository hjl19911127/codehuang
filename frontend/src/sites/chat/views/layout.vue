<template>
  <div class="app" :class="[skin]">
    <chat-header></chat-header>
    <chat-searchbar></chat-searchbar>
    <div class="container">
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
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
