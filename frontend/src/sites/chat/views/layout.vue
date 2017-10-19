<template>
  <div class="app" :class="[skin]">
    <chat-header></chat-header>
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

  export default {
    components: {ChatHeader, ChatNavbar},
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
<style lang="stylus">
  html
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    height: 100%;
    min-width: 6.4rem;
    font-size: 312.5%;
    background-color: #f6f6f6;

  @media screen and (min-width: 410px) {
    html {
      font-size: 400%
    }
  }

  @media screen and (min-width: 480px) {
    html {
      font-size: 469%
    }
  }

  @media screen and (min-width: 640px) {
    html {
      font-size: 625%
    }
  }

  body, .app
    height 100%;

  .app
    background-color: #c5c5c5;

</style>
