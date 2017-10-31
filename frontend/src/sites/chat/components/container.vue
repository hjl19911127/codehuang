<template>
  <div>
    <chat-header :title="pageTitle">
      <slot slot="left" name="header-left"></slot>
      <slot slot="right" name="header-right"></slot>
    </chat-header>
    <section class="container">
      <slot name="content"></slot>
    </section>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  import ChatHeader from './header';
  import ChatOptionbar from './optionbar';

  export default {
    props: ['pageTitle'],
    components: {
      ChatHeader,
      ChatOptionbar
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
