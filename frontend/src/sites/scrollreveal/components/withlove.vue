<template>
  <div class="withlove">
    <span class="alpha">From the</span>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="92px" height="72px" viewBox="0 0 92 72" enable-background="new 0 0 92 72" xml:space="preserve" class="heart">
        <g>
          <path fill="#010101" d="M82.32,7.888c-8.359-7.671-21.91-7.671-30.271,0l-5.676,5.21l-5.678-5.21c-8.357-7.671-21.91-7.671-30.27,0 c-9.404,8.631-9.404,22.624,0,31.255l35.947,32.991L82.32,39.144C91.724,30.512,91.724,16.52,82.32,7.888z"></path>
        </g>
      </svg>
    <span class="omega">of <a href="/">@jlmakes</a></span>
  </div>
</template>
<style lang="stylus">
@keyframes a {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1)
  }

  50% {
    -webkit-transform: scale(.8);
    transform: scale(.8)
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1)
  }
}
.withlove
  overflow: hidden
  text-align center
  padding 16px 0 40px
  cursor default
  color #616c84
  *
    display inline-block
  .alpha
  .omega
    box-sizing border-box
    width 40%
    font-size 16px
  .omega
    text-align left
    padding-left 3px
  .alpha
    text-align right
    padding-right 2px
  .heart
    margin 0 -2px
    position relative
    z-index 2
    animation a 1.33s ease-in-out infinite
    top: 12px
    width: 32px
    height: 32px
    path
      fill #ff005d
  a
    transition all .16s ease-out
    &:link
    &:visited
      font-weight 700
      color #fff
      text-decoration none
    &:hover
      transform scale(1.05)

@media screen and (min-width: 440px)
  .withlove
    .heart
      top 24px
      width: 64px
      height: 64px
    .alpha
    .omega
      font-size 24px
@media screen and (min-width: 1000px)
  .withlove
    .heart
      top 32px
      width: 80px
      height: 80px
    .alpha
    .omega
      font-size 28px
</style>

