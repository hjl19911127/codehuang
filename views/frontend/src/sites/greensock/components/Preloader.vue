<template>
  <div class="preloader_wrapper">
    <div class="preloader__info_box">
      <p class="preloader__info preloader__info_strong">Click to open/close the preloader.</p>
      <p class="preloader__info">Completely customizable (colors, radius, number of dots, size, etc.).</p>
      <p class="preloader__info">One JavaScript call opens or closes the preloader elegantly.</p>
    </div>
  </div>
</template>
<script lang="babel">
  import { mapState } from 'vuex'
  export default{
    data(){
      return {}
    },
    methods: {}
  }

</script>
<style lang="stylus">
  .preloader
    &__info_box
      margin auto
    &__info
      text-align center
      font-size 18px
      &_strong
        font-weight: bold
</style>
