<template>
  <section class="index_page__info_section" data-0="opacity:1;transform:translateY(0px);" data-300="opacity:0;transform:translateY(10px);">
    <div class="container">
      <h1 class="index_page__logo_container">
        <a class="index_page__logo_link">
          <div class="index_page__logo_box">
            <img class="index_page__logo_img" src="../assets/images/webgradients_logo.png">
          </div>
          <span class="index_page__logo_text">WebGradient</span>
        </a>
      </h1>
      <div class="index_page__info_container">
        <h2 class="index_page__info">
          <p class="index_page__info_paragraph">Do you often look for cool background gradients for your UI?</p>
          <p class="index_page__info_paragraph">
            <a class="index_page__info_link">WebGradients</a> is a free collection of 180 linear gradients that you can
            use as<br class="index_page__info__break"> content backdrops in any part of your website. Easy copy CSS3
            crossbrowser code<br class="index_page__info__break">and use it in a moment! We've also prepared a .PNG
            version of each gradient. <br class="index_page__info__break"> As a bonus, there are packs for <a
            class="index_page__info_link">Sketch</a> & <a class="index_page__info_link">Photoshop</a>
          </p>
        </h2>
      </div>
    </div>
  </section>
</template>
<script lang="babel">
  import skrollr from '../assets/js/skrollr.min.js';
  export default{
    methods: {
      init() {
        skrollr.init()
      }
    },
    mounted() {
      skrollr.init()
    }
  }


</script>
<style lang="stylus">
  .index_page__info_section
    background-color: #fff
    text-align: center
    position fixed
    top: 88px
    left: 0
    right: 0
    padding-top: 39px
    padding-bottom: 54px
    transform translateZ(0)

  @media (max-width: 500px)
    .index_page__info_section
      padding-top: 20px
      padding-bottom: 30px

  .container
    max-width 1320px
    margin auto
    padding: 0 30px
    &:after
      content ""
      visibility hidden
      display: block
      height: 0;
      clear both

  .index_page__logo_container
    margin-bottom: 45px

  @media (max-width: 500px)
    .index_page__logo_container
      margin-bottom: 30px

  .index_page__logo_link
    display: inline-block
    color: #2673e7
    text-decoration none
    transition opacity 0.3s ease
    &:hover
      opacity 0.7

  .index_page__logo_box
    margin auto
    width: 32px

  .index_page__logo_img
    width: 100%

  .index_page__logo_text
    display: inline-block
    width: 150px
    height: 19px
    text-indent 101%
    overflow hidden
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDkuNTI4IiBoZWlnaHQ9IjE3Ljg3NSIgdmlld0JveD0iMCAwIDE0OS41MjggMTcuODc1Ij4KICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjwvbWV0YWRhdGE+CjxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyNjczZTc7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBpZD0iV2ViR3JhZGllbnRzX2NvcHlfMiIgZGF0YS1uYW1lPSJXZWJHcmFkaWVudHMgY29weSAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik04OTYuNjQxLDE4My44NDdsMy41LDEwLjE1M0g5MDIuNWw1LjkyOS0xNi4wMDloLTMuMzEybC0zLjg0MSwxMC45LTMuNy0xMS4wNGgtMS43MjhsLTMuOTEzLDExLjA0LTMuNTc2LTEwLjloLTMuMzEyTDg5MC42MTYsMTk0aDIuMzUzWm0xOS45OTIsNi44MTdhMi42NzksMi42NzksMCwwLDEtMi40MjQsMS4zNjgsMi40NzcsMi40NzcsMCwwLDEtMi4wODktLjk4NCwzLjA2NiwzLjA2NiwwLDAsMS0uNS0xLjc1Mmg3Ljc3N3YtMC4yNGE2LjIxNCw2LjIxNCwwLDAsMC0xLjI0OC00LjA4MSw0Ljk2Nyw0Ljk2NywwLDAsMC00LjA1Ni0xLjcsNS4zMjUsNS4zMjUsMCwwLDAtMy45MTMsMS40NjQsNS41MzYsNS41MzYsMCwwLDAtMS41ODQsNC4wODEsNS4yMzgsNS4yMzgsMCwwLDAsMS42MzIsNC4wNTYsNS40NDIsNS40NDIsMCwwLDAsMy45ODUsMS40NjQsNS4xMzQsNS4xMzQsMCwwLDAsNS4xMTItMy4yNFptLTQuOTIxLTMuMjQxYTIuNDk0LDIuNDk0LDAsMCwxLDQuOTIxLDBoLTQuOTIxWk05MjQuNTc2LDE3Ni41aC0yLjkyOFYxOTRoMi45Mjh2LTEuMzQ0YTMuOTI4LDMuOTI4LDAsMCwwLDMuMzEyLDEuNjhjMy4wNzMsMCw1LjE4NS0yLjM3Niw1LjE4NS01LjU0NSwwLTMuMTQ0LTIuMDQtNS41Mi01LjExMy01LjUyYTQuMDMxLDQuMDMxLDAsMCwwLTMuMzg0LDEuNjhWMTc2LjVabTIuNTkyLDkuMzYxYTIuOTQxLDIuOTQxLDAsMSwxLTIuODgsMi45MjhBMi44MjcsMi44MjcsMCwwLDEsOTI3LjE2OCwxODUuODYzWm0xNi43MDUsMi4yNTZIOTQ4YTQuMjcyLDQuMjcyLDAsMCwxLTEuNTEyLDIuNDQ5LDUuMzM3LDUuMzM3LDAsMCwxLTMuMTQ1Ljk2LDQuOTI1LDQuOTI1LDAsMCwxLTMuNTUyLTEuMzY4LDUuNDQ1LDUuNDQ1LDAsMCwxLTEuNTg0LTQuMDU3LDUuOTY2LDUuOTY2LDAsMCwxLDEuNjA4LTQuMjI0LDUuNDExLDUuNDExLDAsMCwxLDMuNy0xLjQxNiw1LjI1Miw1LjI1MiwwLDAsMSwyLjI1Ny41LDQuMzY1LDQuMzY1LDAsMCwxLDEuODcyLDEuOWwyLjcxMi0xLjQ2NGE3LjUzNiw3LjUzNiwwLDAsMC0zLTIuOTI4LDcuNzU1LDcuNzU1LDAsMCwwLTMuNy0uODQxLDguNTQsOC41NCwwLDAsMC02LjMxMiwyLjQ0OSw4LjE3Nyw4LjE3NywwLDAsMC0yLjM1Miw1Ljk1Miw4LjU4Nyw4LjU4NywwLDAsMCwyLjM3Niw2LjE2OSw4LjgsOC44LDAsMCwwLDExLjUuMDQ4YzIuMjA4LTIuMTg0LDIuMzUyLTUuNTQ1LDIuMzUyLTYuNjI1di0wLjE5MmgtNy4zNDR2Mi42ODhaTTk1My42NjQsMTk0aDIuOTI4di00Ljk5M2EzLjU3LDMuNTcsMCwwLDEsLjU3Ni0yLjMsMi4zOTMsMi4zOTMsMCwwLDEsMS45NDQtLjg0LDIuMiwyLjIsMCwwLDEsMS4zNjguMzg0bDAuMzg0LTIuNzM2YTMuNiwzLjYsMCwwLDAtMS4yNDgtLjI0LDMuMTg0LDMuMTg0LDAsMCwwLTEuNzI4LjQ1NiwzLjUsMy41LDAsMCwwLTEuMywxLjQ0di0xLjU2aC0yLjkyOFYxOTRabTE2LjM2OC05LjA0OWEzLjc2NCwzLjc2NCwwLDAsMC0zLjMzNi0xLjY4LDUuMiw1LjIsMCwwLDAtNS4xNjEsNS41Miw1LjI3NCw1LjI3NCwwLDAsMCw1LjMwNSw1LjU0NSwzLjcyNywzLjcyNywwLDAsMCwzLjE5Mi0xLjY4VjE5NGgyLjkyOFYxODMuNjA3aC0yLjkyOHYxLjM0NFptLTIuNTkyLjkxMmEyLjk0MSwyLjk0MSwwLDEsMS0yLjg4LDIuOTI4QTIuODI2LDIuODI2LDAsMCwxLDk2Ny40NCwxODUuODYzWm0xNi4yNzItLjkxMmEzLjc2NCwzLjc2NCwwLDAsMC0zLjMzNi0xLjY4LDUuMiw1LjIsMCwwLDAtNS4xNjEsNS41Miw1LjI3NCw1LjI3NCwwLDAsMCw1LjMsNS41NDUsMy43MjcsMy43MjcsMCwwLDAsMy4xOTItMS42OFYxOTRoMi45MjhWMTc2LjVoLTIuOTI4djguNDQ5Wm0tMi41OTIuOTEyYTIuOTQxLDIuOTQxLDAsMSwxLTIuODgxLDIuOTI4QTIuODI2LDIuODI2LDAsMCwxLDk4MS4xMiwxODUuODYzWm04LjMtMi4yNTZWMTk0aDIuOTI4VjE4My42MDdoLTIuOTI4Wm0tMC4yODgtNC4zOTJhMS43NTIsMS43NTIsMCwxLDAsMS43NTItMS43NTNBMS43NjIsMS43NjIsMCwwLDAsOTg5LjEzNSwxNzkuMjE1Wm0xMy41MTUsMTEuNDQ5YTIuNjgyLDIuNjgyLDAsMCwxLTIuNDMsMS4zNjgsMi40NzIsMi40NzIsMCwwLDEtMi4wODUtLjk4NCwzLjA2NiwzLjA2NiwwLDAsMS0uNS0xLjc1Mmg3Ljc3OXYtMC4yNGE2LjIzOSw2LjIzOSwwLDAsMC0xLjI1LTQuMDgxLDQuOTY0LDQuOTY0LDAsMCwwLTQuMDYtMS43LDUuMzIyLDUuMzIyLDAsMCwwLTMuOTA5LDEuNDY0LDUuNTM2LDUuNTM2LDAsMCwwLTEuNTg0LDQuMDgxLDUuMjM4LDUuMjM4LDAsMCwwLDEuNjMyLDQuMDU2LDUuNDM3LDUuNDM3LDAsMCwwLDMuOTgxLDEuNDY0LDUuMTQ5LDUuMTQ5LDAsMCwwLDUuMTItMy4yNFptLTQuOTIzLTMuMjQxYTIuNDk1LDIuNDk1LDAsMCwxLDQuOTIzLDBoLTQuOTIzWk0xMDA3LjY2LDE5NGgyLjkzVjE4OC43YTMuNTE3LDMuNTE3LDAsMCwxLC40Ni0yLjAxNiwxLjk5MiwxLjk5MiwwLDAsMSwxLjgtLjkxMiwxLjksMS45LDAsMCwxLDEuMzcuNTI4LDMuMDE4LDMuMDE4LDAsMCwxLC41NSwyLjA0VjE5NGgyLjkzdi02LjUyOWE0LjM4MSw0LjM4MSwwLDAsMC0uODItMi45MjgsMy45NzcsMy45NzcsMCwwLDAtMy4wNy0xLjI3MiwzLjgyMSwzLjgyMSwwLDAsMC0zLjIyLDEuNjh2LTEuMzQ0aC0yLjkzVjE5NFptMTcuNzYtNy45di0yLjVoLTIuMDF2LTMuNTUyaC0yLjkzdjMuNTUyaC0xLjE1djIuNWgxLjE1VjE5NGgyLjkzdi03LjloMi4wMVptOC42NC0xLjcyOGE1LjE3NSw1LjE3NSwwLDAsMC0zLjMxLTEuMSw0LjI3Myw0LjI3MywwLDAsMC0yLjcxLjc0NCwzLjA4NywzLjA4NywwLDAsMC0xLjA4LDIuMzUyLDIuNzg3LDIuNzg3LDAsMCwwLC43OSwxLjk5Miw1LjYxNCw1LjYxNCwwLDAsMCwyLjIzLDEuMjQ5bDAuNjcsMC4yNGExLjE1OSwxLjE1OSwwLDAsMSwuOTIsMS4wNTYsMS4yNDEsMS4yNDEsMCwwLDEtMS40NCwxLjEyOCwzLjIzLDMuMjMsMCwwLDEtMi4zMS0xLjJsLTEuNTMsMS43NzZhNS4yMzIsNS4yMzIsMCwwLDAsNC4wMywxLjcyOCw0LjM2Nyw0LjM2NywwLDAsMCwzLjEyLTEuMSwzLjQ1MiwzLjQ1MiwwLDAsMCwxLjE1LTIuNjQsMy4wMzQsMy4wMzQsMCwwLDAtLjUzLTEuNzI5LDUuMzA3LDUuMzA3LDAsMCwwLTIuNjQtMS40ODhsLTAuNjktLjIxNmExLjAzNiwxLjAzNiwwLDAsMS0uOTQtMC45MzYsMC45NDgsMC45NDgsMCwwLDEsMS4xMy0uODQsMi40MTcsMi40MTcsMCwwLDEsMS43LjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODg1LjA2MiAtMTc2LjUpIi8+Cjwvc3ZnPgo=') no-repeat center / 100% auto

  @media (max-width: 500px)
    .index_page__logo_text
      width 100px

  .index_page__info_container
    margin-bottom: 45px

  @media (max-width: 500px)
    .index_page__info_container
      margin-bottom: 30px

  .index_page__info
    font-size: 1em
    line-height: 1.4
    color: #6a6969

  @media (max-width: 600px)
    .index_page__info
      font-size 10.4px

  .index_page__info_paragraph:not(:last-child)
    margin-bottom: 20px

  @media (max-width: 500px)
    .index_page__info_paragraph:not(:last-child)
      margin-bottom: 10px

  .index_page__info_link
    position relative
    color: inherit;
    font-weight: 700
    text-decoration none
    transition opacity 0.3s ease
    &:before
      content ''
      opacity 0
      position absolute
      left 0
      right: 0
      bottom: -4px
      width: 100%
      height: 2px
      transform translateY(2px) rotateZ(1deg)
      transition opacity .3s ease, transform .2s ease
      background-color: #6a6969
    &:hover
      &:before
        opacity 1
        transform none

  @media (max-width: 768px)
    .index_page__info__break
      display: none
</style>

