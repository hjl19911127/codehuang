<template>
  <container>
    <div class="message-list">
      <router-link href="javascript:;" class="message-item">
        <span class="avatar-wrap"></span>
      </router-link>
    </div>
  </container>
</template>
<script>
  import Container from '../components/container';

  export default {
    components: {
      Container
    },
  }
</script>
<style lang="stylus" scoped>
  .message-item
    height px2rem(136px)
    border-bottom 1px solid
</style>
