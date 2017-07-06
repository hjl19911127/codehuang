<template>
    <div class="content">
        <div class="tip">
            <h5>tip</h5>
            <ul>
                <li>transform: perspective(.5em) rotateX(5deg)</li>
            </ul>
        </div>
        <div class="option">
            <div class="tab">TRAPEZOID</div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.content
  margin: 100px 0 0 0
  display: flex
  flex-flow: row wrap
  align-items: flex-start
  justify-content: space-between
  height: 600px
.tab
  position: relative
  padding: .5em 1em .35em
  color: #fff
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: -1
    background: #58a
    transform: perspective(0.5em) rotateX(5deg)
</style>
<script>

</script>
