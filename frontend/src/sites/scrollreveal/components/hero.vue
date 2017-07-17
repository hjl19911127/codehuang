<template>
  <div class="hero">
    <Logo/>
    <h1 class="title"> ScrollReveal</h1>
    <p class="intro">Easy scroll animations for web and mobile browsers.</p>
  </div>
</template>
<style lang="stylus">
  .hero
    padding 8vw 0
    .logo
      vertical-align sub
      margin-right 16px
      width 48px
      height 32px
    .title
      display inline-block
      font-size 32px
      margin 32px 0 28px
    .intro
      font-size 18px
      color #616c83
      padding 0 16vw
      padding-bottom 32px
      border-bottom 1px dashed #2d3443;

  @media screen and (min-width: 28.75em)
    .hero
      .title
        font-size 48px
      .logo
        width: 72px
        height: 48px
        margin-right: 24px
      .intro
        font-size 24px
        padding 0 14vw 48px

  @media screen and (min-width: 48em)
    .hero
      .title
        font-size 72px
        margin-bottom 44px
      .logo
        width: 96px
        height: 64px
        margin-right: 32px
      .intro
        padding 0 8vw 48px
</style>
<script lang="babel">
  import Logo from './logo.vue'
  export default{
    components: {
      Logo
    }
  }
</script>
