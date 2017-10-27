<template>
  <div>
    <chat-header></chat-header>
    <div class="container">
      <chat-searchbar></chat-searchbar>
      <slot></slot>
    </div>
    <chat-navbar></chat-navbar>
  </div>
</template>
<script>
  import Cookie from '@/utils/cookie';
  import ChatHeader from './header';
  import ChatNavbar from './navbar';
  import ChatSearchbar from './searchbar';

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
