<template>
  <div class="map" :style="{left:`${player.x}px`,top:`${player.y}px`}">

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        player: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      handleMaskClick() {
        this.$refs.drawerLayout.toggle(false);
      },
      handleSlideStart() {
      },
      handleSlideMove(pos) {
      },
      handleSlideEnd(visible) {
        this.$store.dispatch('UPDATE_SIDE_MENU_VISIBLE_STATUS', visible);
      },
      dealDirection(keyCode) {
        switch (keyCode) {
          case 37:
            this.player.x--;
            return;
          case 38:
            this.player.y--;
            return;
          case 39:
            this.player.x++;
            return;
          case 40:
            this.player.y++;
            return;
        }
      }
    },
    components: {},
    computed: {},
    mounted() {
      document.addEventListener('keyup', (e) => {
        this.dealDirection(e.keyCode)
      }, false)
    }
  }
</script>
<style lang="stylus" scoped>
  .map {
    position: absolute
    background-color: saddlebrown
    width: 600px
    height: 600px
  }
</style>
