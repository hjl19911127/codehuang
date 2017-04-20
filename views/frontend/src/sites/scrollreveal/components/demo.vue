<template>
  <div class="demo">
    <Column v-for="item in res" v-bind:columns="item.columns"></Column>
  </div>
</template>
<style lang="stylus">
  .demo
    display flex
    height 250vh
    padding 82px 2vw 0;

  @media screen and (min-width: 28.75em)
    .demo
      height 400vh
</style>

<script lang="babel">
  import res from '../assets/js/data.js'
  import Column from './column.vue'
  export default{
    data(){
      return {
        res: res
      }
    },
    components: {
      Column
    }
  }

</script>
