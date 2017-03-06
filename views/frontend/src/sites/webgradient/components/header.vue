<template>
  <section>
    <nav class="nav">
      <div class="nav__container">
        <a class="nav__logo_box">
          <img class="nav__creator_logo_img" src="../assets/images/logo.png">
        </a>
        <div class="nav__buttons_box">
          <a class="button nav__button button--blank" href="#">about</a>
          <a class="button nav__button button--sketch" href="#">.sketch</a>
          <a class="button nav__button button--psd" href="#">.psd</a>
        </div>
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
  max-width 1320px
  height 87px
  margin auto
  padding 0 30px
  display flex
  align-items center
  justify-content space-between
.nav__logo_box
  display inline-block
  width 82px
.nav__creator_logo_img
  width 100%
  vertical-align middle
  transition opacity .25s ease
  &:hover
    opacity .8
@media (max-width: 500px)
  .nav__container
    height 50px
    justify-content center
  .nav__logo_box
    width 50px
  .nav__buttons_box
    display none
.button
  display inline-block
  min-width 130px
  padding 0 33px
  height: 42px
  line-height 36px
  border-radius 42px
  font-size 10px
  letter-spacing 0.065em
  text-transform uppercase
  font-weight: 700
  font-family Montserrat, Helvetica, sans-serif
  background-color: #f6f6f6
  border 2px solid transparent
  cursor pointer
  color: #333435
  text-align: center
  text-decoration: none
  transition background-color .25s ease-out, box-shadow .25s ease
.nav__button
  margin-right: 15px
  &:last-child
    margin-right: 0
.button--blank
  padding-right: 0
  margin-right: -5px !important
  transition opacity .25s ease, transform .25s ease
  background-color: transparent
  box-shadow none
  color: #333435
  &:hover
    opacity .65
  &:hover
  &:focus
    background-color: transparent
    box-shadow none
    color: #333435
.button--sketch
  background-color: transparent
  border 2px solid #f7b157
  &:hover
    background-color: #f7b157
    color #fff
    box-shadow none
.button--psd
  background-color: transparent
  border 2px solid #3583fb
  &:hover
    background-color: #3583fb
    color #fff
    box-shadow none
</style>

