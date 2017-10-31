<template>
  <div class="app">
    <chat-side-menu></chat-side-menu>
    <transition :name="transitionName">
      <router-view class="full-screen"></router-view>
    </transition>
  </div>
</template>
<script>
  import ChatSideMenu from '../components/side-menu';

  export default {
    components: {
      ChatSideMenu
    },
    computed: {
      transitionName() {
        return this.$store.getters.getTransitionName;
      },
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
