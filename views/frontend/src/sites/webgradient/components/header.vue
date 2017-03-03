<template>
  <section>
    <nav class="nav">
      <div class="nav__container">
        <a class="nav__logo_box">
          <img class="nav__creator_logo_img" src="../assets/images/logo.png">
        </a>
      </div>
    </nav>
  </section>
</template>
<style lang="stylus">
.nav
  position fixed
  z-index 10
  left 0
  right 0
  top 0
  border-bottom 1px solid #ebebeb
  background-color rgba(255,255,255,0.9)
  .nav__container
    height 50px
    margin 0
    padding 0 30px
    display flex
    align-items center
    justify-content center
  .nav__logo_box
    display inline-block
    width 50px
  .nav__creator_logo_img
    width 100%
    vertical-align middle
</style>

