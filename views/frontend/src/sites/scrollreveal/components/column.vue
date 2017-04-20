<template>
  <div class="column">
    <div class="block" v-for="(item, index) in columns" :class="[{'seq-1': !index}, item.class]" :style="item.style" :key="index"></div>
  </div>
</template>
<style lang="stylus">
  .column
    display flex
    flex-direction column
    flex 1 0 0
    .block
      flex 1 0 0
      margin: 2vw
      border-radius 2vw
      position relative
      &:first-child
        margin-top: 0
      &:before
      &:after
        content: ''
        position absolute
        width: 100%
        height: 18vw
        border-radius 2vw
        opacity .3
        left: 0
      &:before
        top 0
        background: radial-gradient(circle at top, #fff, hsla(0, 0%, 100%, 0))
      &:after
        bottom 0
        background: radial-gradient(circle at bottom, #fff, hsla(0, 0%, 100%, 0))
    .red
      background: #e31d65

    .orange
      background: #ff7c35

    .yellow
      background: #fc0
      &:before
      &:after
        opacity .5

    .green
      background: #2ead6d

    .blue
      background: #008597

    .purple
      background: #5943aa
      &:before
      &:after
        opacity .2

    .slate
      background: #2d3443
</style>
<script lang="babel">
  export default{
    props: ['columns']
  }
</script>
