<template>
  <div>
    <div class="content">
      <div class="code">
        <p>.btn { transform: skewX(-45deg) }</p>
      </div>
      <div class="display"><a class="btn" href="#">CLICK ME</a></div>
    </div>
    <h3 class="sub-title">嵌套元素</h3>
    <div class="content">
      <div class="code">
        <p>.btn { transform: skewX(-45deg) }</p>
        <p>.btn > div { transform: skewX(45deg) }</p>
      </div>
      <div class="display"><a class="btn" href="#">
        <div>CLICK ME</div>
      </a></div>
    </div>
    <h3 class="sub-title">伪元素</h3>
    <div class="content">
      <div class="code">
        <p>.btn { position: relative; }</p>
        <pre>
        .btn::before {
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            background: #58a;
            transform: skewX(-45deg);
        }
        </pre>
      </div>
      <div class="display"><a class="btn button" href="#">CLICK ME</a></div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .content
    width: 800px
    display: flex
    align-items: center
    flex-flow: row wrap
    justify-content: space-between

  .code
    background: #ffece5
    width: 500px
    padding: 20px
    font-size: 24px
    color: #ff545e

  pre
    font-family: "microsoft yahei"
    font-size: 24px

  .btn
    display: block
    width: 200px
    height: 60px
    color: #ffffff
    font-size: 34px
    font-weight: bold
    text-align: center
    line-height: 60px
    background: #2baffb
    text-decoration: none
    position: relative
    transform: skewX(-45deg)
    > div
      transform: skewX(45deg)

  .button
    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      z-index: -1
      background-color: #2baffb
      transform: skewX(-45deg)
    position: relative
    transform: none
    background: none

  .tip
    width: 800px
    margin: 0 0 30px 0
</style>
<script>
  export default {
    data() {
      return {
        circle: {
          width: 200,
          height: 200
        }
      }
    },
    components: {},
    methods: {},
    watch: {}
  }
</script>
