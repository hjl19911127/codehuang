<template>
  <div class="crown">
    <Logo/>
    <div class="title">ScrollReveal</div>
  </div>
</template>
<style lang="stylus">
  .crown
    box-sizing border-box
    position fixed
    top -64px
    z-index 1
    overflow hidden
    padding 8px 4vw
    width: 100%
    background: #1a2434
    box-shadow 0 2px 6px rgba(26, 36, 52, .5)
    transition top .6s cubic-bezier(.6, .2, .1, 1)
    .logo
      margin-top: 16px
      margin-right: 8px
      float: left
      width: 24px
      height: 16px
    .title
      float: left
      line-height: 46px
      font-size 16px
      position relative
      top: 2px

  .visible
    top: 0

  @media screen and (min-width: 28.75em)
    .crown
      .title
        font-size 24px
        top: 0
      .logo
        margin-top: 12px
        margin-right: 12px
        width: 32px
        height: 24px

  @media screen and (min-width: 33.75em)
    .crown
      .title
        font-size 32px
      .logo
        margin-top: 8px
        margin-right: 16px
        width: 48px
        height: 32px
</style>
<script lang="babel">
  import Logo from './logo.vue'
  export default{
    components: {
      Logo
    }
  }
</script>
