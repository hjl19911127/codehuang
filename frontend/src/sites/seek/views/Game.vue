<template>
  <div class="playground">
    <div class="map" :style="{transform:`translate3d(${map.x}px,${map.y}px,0)`}">

    </div>
    <div class="player" :style="{transform:`translate3d(${player.x}px,${player.y}px,0)`}">

    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  let dirKeyMap = [false, false, false, false];
  export default {
    data() {
      return {
        speed: 10,
        map: {
          x: 0,
          y: 0
        },
        player: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      moveByDirKey() {
        let {player, speed} = this;
        let [left, top, right, bottom] = dirKeyMap
        console.log(dirKeyMap)
        if (left) player.x -= speed;
        if (top) player.y -= speed;
        if (right) player.x += speed;
        if (bottom) player.y += speed;
      },
      handleKeyDown(keyCode) {
        if (keyCode >= 37 && keyCode <= 40) {
          dirKeyMap[keyCode - 37] = true;
        }
        this.moveByDirKey();
      },
      handleKeyUp(keyCode) {
        console.log(keyCode)
        if (keyCode >= 37 && keyCode <= 40) {
          dirKeyMap[keyCode - 37] = false;
        }
      }
    },
    components: {},
    computed: {},
    mounted() {
      document.addEventListener('keydown', (e) => {
        this.handleKeyDown(e.keyCode)
      }, false);
      document.addEventListener('keyup', (e) => {
        this.handleKeyUp(e.keyCode)
      }, false)
    }
  }
</script>
<style lang="stylus" scoped>
  .map {
    position: absolute
    background: linear-gradient(left, #ace, #f96 5%, #ace, #f96 95%, #ace)
    width: 1000px
    height: 1000px
  }

  .player {
    position: fixed
    width: 5vw
    height: 5vw
    background-color: lightyellow
    border-radius 50%
  }
</style>
