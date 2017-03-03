<template>
  <footer class="footer footer--06">
    <div class="footer__main_box--06">
      <div class="container footer__container">
        <div class="footer__left_box--06">
          <a class="footer__logo_box footer__logo_box--06">
            <img class="footer__logo footer__logo--06" src="../assets/images/logo.png">
          </a>
          <span class="footer__description footer__description--06">Itmeo is a software and design company. Our team creates useful tools for web designers and developers.</span>
          <ul class="social">
            <li class="social__item social__item--left_margin"><a class="social__link social__link--twitter--black"></a></li>
            <li class="social__item social__item--left_margin"><a class="social__link social__link--facebook--black"></a></li>
            <li class="social__item social__item--left_margin"><a class="social__link social__link--behance--black"></a></li>
          </ul>
        </div>
        <div class="footer__right_box--06">
          <ul class="footer__menu footer__menu--06">
            <li class="footer__menu__item footer__menu__footer">
              <span class="footer__menu__title">other projects</span>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">Phoenix Startup</a>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">WebGradients</a>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">UI Market</a>
            </li>
          </ul>
          <ul class="footer__menu footer__menu--06">
            <li class="footer__menu__item footer__menu__footer">
              <span class="footer__menu__title">get in touch</span>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">About</a>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">Contact Us</a>
            </li>
            <li class="footer__menu__item">
              <a class="footer__menu__link">Advertising</a>
            </li>
          </ul>
          <ul class="footer__menu footer__menu--06">
            <li class="footer__menu__item footer__menu__footer">
              <span class="footer__menu__title">follow the best</span>
            </li>
            <li class="footer__menu__item">
              <form class="footer__form">
                <input class="footer__input" type="email" placeholder="Your email" name="EMAIL" required>
                <button class="footer__button" type="submit"></button>
                <div class="footer__message footer__message--red">An email address must contain a single @</div>
                <div class="footer__message footer__message--green">Thanks!<br>Please click the link in the email we've just sent you.</div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__description_box--06">
      <div class="container footer__container">
        <span class="footer__copyright footer__copyright--06">© itmeo.com, 2017</span>
      </div>
    </div>
  </footer>
</template>
<style lang="stylus">
.footer
  background-color #fff
.footer__container
  position relative
.footer__main_box--06
  padding 49px 0 75px
  border-bottom 1px solid rgba(188,198,208,0.4)
.footer__left_box--06
  float: left
.footer__logo_box
  display inline-block
  width: 82px
  transition opacity .2s ease
  img
    width: 100%
  &:hover
    opacity .8
.footer__logo_box--06
  display: block
  margin-bottom: 28px
.footer__description
  font-size 13px
  line-height 1.6
  letter-spacing 0.05em
.footer__description--06
  display inline-block
  max-width 300px
  margin-bottom: 60px
.social
.footer__menu
  padding: 0
  margin: 0
  list-style none
.social__item
 display inline-block
.social__item--left_margin
  margin-left: 15px
  display inline-block
  &:first-child
    margin-left: 0
.social__link
  display inline-block
  position relative
  vertical-align middle
  transition opacity .2s ease
  &:hover
    opacity .8
  &:before
    content ""
    position absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
.social__link--twitter--black
  width: 14px
  height: 12px
  &:before
   background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEF2b2NvZGUgMi4zLjItZWE2MDYyMCAtIGh0dHA6Ly9hdm9jb2RlLmNvbSAtLT4KPHN2ZyBoZWlnaHQ9IjEwIiB3aWR0aD0iMTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiAxMCI+CiAgICA8cGF0aCBmaWxsPSIjMzMzNDM1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMTEuMzMgMS40NCBDIDEwLjkxIDEuNjMgMTAuNDYgMS43NSA5Ljk5IDEuODEgQyAxMC40NyAxLjUyIDEwLjg0IDEuMDUgMTEuMDIgMC41MSBDIDEwLjU3IDAuNzggMTAuMDcgMC45NyA5LjU0IDEuMDggQyA5LjEyIDAuNjIgOC41MSAwLjMzIDcuODQgMC4zMyBDIDYuNTYgMC4zMyA1LjUyIDEuMzkgNS41MiAyLjY5IEMgNS41MiAyLjg3IDUuNTQgMy4wNSA1LjU4IDMuMjMgQyAzLjY1IDMuMTMgMS45MyAyLjE5IDAuNzkgMC43NiBDIDAuNTkgMS4xMSAwLjQ3IDEuNTIgMC40NyAxLjk1IEMgMC40NyAyLjc3IDAuODggMy40OSAxLjUxIDMuOTEgQyAxLjEzIDMuOSAwLjc3IDMuNzkgMC40NSAzLjYyIEMgMC40NSAzLjYzIDAuNDUgMy42MyAwLjQ1IDMuNjQgQyAwLjQ1IDQuNzkgMS4yNSA1Ljc0IDIuMzIgNS45NiBDIDIuMTIgNi4wMSAxLjkyIDYuMDQgMS43MSA2LjA0IEMgMS41NiA2LjA0IDEuNDEgNi4wMiAxLjI3IDYgQyAxLjU2IDYuOTMgMi40MiA3LjYxIDMuNDQgNy42MyBDIDIuNjQgOC4yNiAxLjY0IDguNjQgMC41NSA4LjY0IEMgMC4zNyA4LjY0IDAuMTggOC42MyAwIDguNjEgQyAxLjAzIDkuMjggMi4yNSA5LjY3IDMuNTYgOS42NyBDIDcuODQgOS42NyAxMC4xOCA2LjA4IDEwLjE4IDIuOTYgQyAxMC4xOCAyLjg2IDEwLjE3IDIuNzYgMTAuMTcgMi42NiBDIDEwLjYyIDIuMzMgMTEuMDIgMS45MSAxMS4zMyAxLjQ0IEMgMTEuMzMgMS40NCAxMS4zMyAxLjQ0IDExLjMzIDEuNDQgWiIgLz4KPC9zdmc+') no-repeat center/14px 12px
.social__link--facebook--black
  width: 6px
  height: 12px
  &:before
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEF2b2NvZGUgMi4zLjItZWE2MDYyMCAtIGh0dHA6Ly9hdm9jb2RlLmNvbSAtLT4KPHN2ZyBoZWlnaHQ9IjEyIiB3aWR0aD0iNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYgMTIiPgogICAgPHBhdGggZmlsbD0iIzMzMzQzNSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNIDMuOTkgMTEuOTkgQyAzLjk5IDExLjk5IDEuMzIgMTEuOTkgMS4zMiAxMS45OSBDIDEuMzIgMTEuOTkgMS4zMiA2LjMzIDEuMzIgNi4zMyBDIDEuMzIgNi4zMyAtMC4wMSA2LjMzIC0wLjAxIDYuMzMgQyAtMC4wMSA2LjMzIC0wLjAxIDQuMTUgLTAuMDEgNC4xNSBDIC0wLjAxIDQuMTUgMS4zMiA0LjE1IDEuMzIgNC4xNSBDIDEuMzIgNC4xNSAxLjMyIDIuODQgMS4zMiAyLjg0IEMgMS4zMiAxLjA2IDIuMDggMCA0LjIxIDAgQyA0LjIxIDAgNS45OSAwIDUuOTkgMCBDIDUuOTkgMCA1Ljk5IDIuMTggNS45OSAyLjE4IEMgNS45OSAyLjE4IDQuODggMi4xOCA0Ljg4IDIuMTggQyA0LjA1IDIuMTggMy45OSAyLjQ5IDMuOTkgMy4wNSBDIDMuOTkgMy4wNSAzLjk5IDQuMTUgMy45OSA0LjE1IEMgMy45OSA0LjE1IDYgNC4xNSA2IDQuMTUgQyA2IDQuMTUgNS43NyA2LjMzIDUuNzcgNi4zMyBDIDUuNzcgNi4zMyAzLjk5IDYuMzMgMy45OSA2LjMzIEMgMy45OSA2LjMzIDMuOTkgMTEuOTkgMy45OSAxMS45OSBaIiAvPgo8L3N2Zz4=') no-repeat center/6px 12px
.social__link--behance--black
  width: 13px
  height: 11px
  &:before
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA0MzAuMTIzIDQzMC4xMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMC4xMjMgNDMwLjEyMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGlkPSJCZWhhbmNlIiBkPSJNMzg4LjQzMiwxMTkuMTJIMjgwLjY1OVY5Mi4zNWgxMDcuNzgydjI2Ljc3SDM4OC40MzJ6IE0yMDguOTEyLDIyOC44OTUgICBjNi45NTQsMTAuNzcxLDEwLjQyOSwyMy44NDksMTAuNDI5LDM5LjIwM2MwLDE1Ljg3OC0zLjkxOCwzMC4xMjItMTEuODg5LDQyLjcwNGMtNS4wNzEsOC4zMjYtMTEuMzY3LDE1LjM1OS0xOC45MzIsMjEuMDIxICAgYy04LjUyLDYuNTQ4LTE4LjYwNywxMS4wMzgtMzAuMjAzLDEzLjQzN2MtMTEuNjMzLDIuNDAzLTI0LjIyNCwzLjYxNy0zNy43ODcsMy42MTdIMFY4MS4yNDdoMTI5LjI1ICAgYzMyLjU3OSwwLjUzLDU1LjY3Niw5Ljk2OSw2OS4zMTUsMjguNTA2YzguMTg0LDExLjM2OSwxMi4yMzksMjUuMDExLDEyLjIzOSw0MC44NjhjMCwxNi4zNjItNC4xMDQsMjkuNDU0LTEyLjM2OCwzOS40MDEgICBjLTQuNTk3LDUuNTc3LTExLjM4OCwxMC42NS0yMC4zNzgsMTUuMjI5QzE5MS42NzUsMjEwLjIzNiwyMDIuMDA3LDIxOC4wODYsMjA4LjkxMiwyMjguODk1eiBNNjEuNzIyLDE4Ni43Nmg1Ni42MzIgICBjMTEuNjM4LDAsMjEuMDQ2LTIuMjEyLDI4LjI5Mi02LjYzNGM3LjI0MS00LjQxNSwxMC44NTQtMTIuMjYzLDEwLjg1NC0yMy41MzFjMC0xMi40NDktNC43ODQtMjAuNzEyLTE0LjM3NS0yNC42ODkgICBjLTguMjQ0LTIuNzYzLTE4Ljc5Mi00LjE4Ni0zMS41OTEtNC4xODZINjEuNzIyVjE4Ni43NnogTTE2Mi45NTMsMjY0LjI3NWMwLTEzLjkwMi01LjY4Mi0yMy41MTMtMTcuMDIzLTI4LjY3ICAgYy02LjM0Mi0yLjkzMS0xNS4yOS00LjQyOS0yNi43NjMtNC41MzZINjEuNzIydjcxLjMyMmg1Ni41NTZjMTEuNjE5LDAsMjAuNjEyLTEuNTIxLDI3LjEwMi00LjY5NCAgIEMxNTcuMDg0LDI5MS44NjMsMTYyLjk1MywyODAuNzYsMTYyLjk1MywyNjQuMjc1eiBNNDI4LjQxOSwyMjAuNzM2YzEuMzAyLDguNzU2LDEuODkxLDIxLjQ2LDEuNjUyLDM4LjA2NUgyOTAuNDkzICAgYzAuNzcsMTkuMjY2LDcuNDIxLDMyLjczOSwyMC4wMzUsNDAuNDQ5YzcuNjA3LDQuODM1LDE2LjgzLDcuMTk2LDI3LjYzLDcuMTk2YzExLjM4OCwwLDIwLjY3LTIuODc5LDI3LjgxNS04Ljc5NyAgIGMzLjg5My0zLjEzNyw3LjMyNy03LjU2NSwxMC4yOTYtMTMuMTUyaDUxLjE2Yy0xLjM0LDExLjM3OS03LjUsMjIuOTItMTguNTcsMzQuNjQ4Yy0xNy4xNTEsMTguNjQxLTQxLjIwNSwyNy45ODgtNzIuMDk3LDI3Ljk4OCAgIGMtMjUuNTIsMC00OC4wMTEtNy44ODMtNjcuNTMzLTIzLjU5MkMyNDkuNzcyLDMwNy43NzcsMjQwLDI4Mi4yMTEsMjQwLDI0Ni43NDZjMC0zMy4yNTcsOC43NzMtNTguNzEyLDI2LjM3OC03Ni40MyAgIGMxNy42Ny0xNy43NTEsNDAuNDc0LTI2LjU4Niw2OC41ODMtMjYuNTg2YzE2LjY2MSwwLDMxLjY4LDIuOTc4LDQ1LjA3OSw4Ljk2NWMxMy4zNTcsNS45OTMsMjQuMzk2LDE1LjQyNSwzMy4wOSwyOC4zODggICBDNDIwLjk5OCwxOTIuNDk5LDQyNi4wNTgsMjA1LjY5OSw0MjguNDE5LDIyMC43MzZ6IE0zNzguMDYyLDIyNS43M2MtMC45MzgtMTMuMzIyLTUuMzg2LTIzLjQwNS0xMy4zOTUtMzAuMjk2ICAgYy03Ljk0My02LjkxLTE3Ljg2Ni0xMC4zNzktMjkuNzA2LTEwLjM3OWMtMTIuODg2LDAtMjIuODM2LDMuNzA4LTI5LjkwNiwxMC45OTZjLTcuMTE4LDcuMjczLTExLjU0NywxNy4xNjEtMTMuMzYyLDI5LjY4SDM3OC4wNjIgICBMMzc4LjA2MiwyMjUuNzN6IiBmaWxsPSIjMzMzNDM1Ii8+CjwvZz4KPC9zdmc+Cg==') no-repeat center/13px 11px

.footer__menu--06
  display inline-block
  vertical-align top
  margin-right: 65px
  &:last-child
    margin-right: 0
.footer__menu__item
  margin-bottom: 25px
  &:last-child
    margin-bottom: 0
.footer__menu__title
  font-family: Montserrat, Helvetica, sans-serif
  color: rgba(51, 52, 53, 0.3)
  font-size 11px
  letter-spacing 0.05em
  text-transform uppercase

.footer__menu__link
  position relative
  color: #333435;
  letter-spacing 0.05em
  font-size 13px
  font-weight:700
  text-decoration none
  transition opacity 0.2s ease
  &:before
    content ''
    opacity 0
    position absolute
    left 0
    right: 0
    bottom: -4px
    width: 100%
    height: 2px
    background-color: #6a6969
    transform translateY(2px) rotate(1deg)
    transition opacity 0.3s ease, transform .2s ease
  &:hover
    &:before
      opacity 1
      transform none

.footer__form
  position relative
.footer__input
  max-width 207px
  height 42px
  line-height 42px
  background-color: #fff
  border-radius 42px
  border 1px solid #ebebeb
  padding 0 40px 0 15px
  transition border-color .2s ease;
  &::-webkit-input-placeholder
    color rgba(106,105,105,.6)
    font-size 13px
    transition filter .2s ease, opacity .2s .2s ease
  &::-moz-placeholder
    color rgba(106,105,105,.6)
    font-size 13px
    transition filter .2s ease, opacity .2s .2s ease
  &::-ms-input-placeholder
    color rgba(106,105,105,.6)
    font-size 13px
    transition filter .2s ease, opacity .2s .2s ease
  &:focus
    border-color #333435
    &::-webkit-input-placeholder
      opacity 0
      filter: blur(3px)
    &::-moz-placeholder
      opacity 0
      filter: blur(3px)
    &::-ms-input-placeholder
      opacity 0
      filter: blur(3px)
.footer__button
  position absolute
  right: 10px
  top: 0
  bottom: 0
  border-radius 50%
  cursor pointer
  margin auto
  width: 20px
  height: 20px
  border 1px solid rgba(51,52,53,0.66)
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTBweCIgdmlld0JveD0iMCAwIDEwIDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmktLWFycm93LS1yaWdodDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpLS1hcnJvdy0tcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNTAwMDAwLCA1LjAwMDAwMCkgcm90YXRlKDI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC41MDAwMDAsIC01LjAwMDAwMCkgIiBmaWxsPSIjMzMzNDM1Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTcuNyw1LjE2NSBMNS4xMjUsNy43NDEgTDUuMTI1LDEuMTI1IEM1LjEyNSwwLjc4IDQuODQ1LDAuNSA0LjUsMC41IEM0LjE1NSwwLjUgMy44NzUsMC43OCAzLjg3NSwxLjEyNSBMMy44NzUsNy43NDEgTDEuMjk5LDUuMTY1IEMxLjA1NSw0LjkyMSAwLjY2LDQuOTIxIDAuNDE2LDUuMTY1IEMwLjE3MSw1LjQxIDAuMTcxLDUuODA1IDAuNDE2LDYuMDQ5IEwzLjk1MSw5LjU4NCBDNC4xMDEsOS43MzQgNC4zMDYsOS43OCA0LjUsOS43NDYgQzQuNjk0LDkuNzggNC45LDkuNzMzIDUuMDUsOS41ODQgTDguNTg1LDYuMDQ5IEM4LjgyOSw1LjgwNSA4LjgyOSw1LjQwOSA4LjU4NSw1LjE2NSBDOC4zNCw0LjkyMSA3Ljk0NCw0LjkyMSA3LjcsNS4xNjUgTDcuNyw1LjE2NSBaIiBpZD0iU3ZnanNQYXRoMTAxMCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') no-repeat center / 10px auto
  transition border-color .2s ease, background-color .2s ease, transfrom .2s ease
  &:hover
    border-color #209cff
    transform translateX(3px) scale(1.1)
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTBweCIgdmlld0JveD0iMCAwIDEwIDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlN2Z2pzUGF0aDEwMTA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaS0tYXJyb3ctLXJpZ2h0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjUwMDAwMCwgNS4wMDAwMDApIHJvdGF0ZSgyNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQuNTAwMDAwLCAtNS4wMDAwMDApIHRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjcsNS4xNjUgTDUuMTI1LDcuNzQxIEw1LjEyNSwxLjEyNSBDNS4xMjUsMC43OCA0Ljg0NSwwLjUgNC41LDAuNSBDNC4xNTUsMC41IDMuODc1LDAuNzggMy44NzUsMS4xMjUgTDMuODc1LDcuNzQxIEwxLjI5OSw1LjE2NSBDMS4wNTUsNC45MjEgMC42Niw0LjkyMSAwLjQxNiw1LjE2NSBDMC4xNzEsNS40MSAwLjE3MSw1LjgwNSAwLjQxNiw2LjA0OSBMMy45NTEsOS41ODQgQzQuMTAxLDkuNzM0IDQuMzA2LDkuNzggNC41LDkuNzQ2IEM0LjY5NCw5Ljc4IDQuOSw5LjczMyA1LjA1LDkuNTg0IEw4LjU4NSw2LjA0OSBDOC44MjksNS44MDUgOC44MjksNS40MDkgOC41ODUsNS4xNjUgQzguMzQsNC45MjEgNy45NDQsNC45MjEgNy43LDUuMTY1IEw3LjcsNS4xNjUgWiIgaWQ9IlN2Z2pzUGF0aDEwMTAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==') no-repeat center / 9px 10px #209cff
.footer__message
  display none
  position absolute
  left: 0
  right: 0
  padding: 15px 0 0 0
  font-size 10px
  text-transform uppercase
  font-weight: 700
.footer__message--red
  color: #f84b29
.footer__message--green
  color #21d593
.footer__description_box--06
  padding 23px 0 25px
.footer__copyright
  font-size 10px
  font-weight: 700
  text-transform uppercase
  letter-spacing 0.05em
.footer__copyright--06
  float: right
@media (min-width: 993px)
  .footer__right_box--06
    float: right
</style>

