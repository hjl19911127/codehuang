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
  import GSPreloader from '../assets/js/preloader'
  export default{
    data(){
      return {
        preloader: null
      }
    },
    methods: {
      init() {
        this.preloader = new GSPreloader({
          radius: 42,
          dotSize: 15,
          dotCount: 10,
          colors: ["#61AC27", "#555", "purple", "#FF6600"],
          boxOpacity: 0.2,
          boxBorder: "1px solid #AAA",
          animationOffset: 1.8
        })
        this.preloader.active(true)
        document.onclick = document.ontouchstart = () => {
          this.preloader.active(!this.preloader.active());
        };
      }
    },
    mounted(){
      this.init()
    }
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
