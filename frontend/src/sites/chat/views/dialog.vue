<template>
  <chat-container>
    <a class="button-left">i</a>
    <div class="message-list">
      xczxczxczxc
    </div>
    <chat-navbar slot="footer"></chat-navbar>
  </chat-container>
</template>
<script>
  import ChatContainer from '../components/container';
  import ChatNavbar from '../components/navbar';

  export default {
    components: {
      ChatContainer,
      ChatNavbar
    },
  }
</script>
<style lang="stylus" scoped>
  .message-list
    background-color: red

  .message-item
    height px2rem(136px)
    border-bottom 1px solid
</style>
