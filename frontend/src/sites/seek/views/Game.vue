<template>
  <div class="scene">
    <div class="map" :style="{transform:`translate3d(${-map.x}px,${-map.y}px,0)`}">

    </div>
    <div class="player">

    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  const MAX_SPEED = 20;
  let mouseX = 0, mouseY = 0;
  export default {
    data() {
      return {
        speed: 1,
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
    computed: {},
    methods: {
      startMoving() {
        let refresh = () => {
          let {player, map} = this;
          let distanceX = mouseX - player.x,
            distanceY = mouseY - player.y,
            distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (distance < 50) {
            this.movement = null;
            return;
          }
          let rate = distanceY && Math.abs(distanceX / distanceY),
            dirX = distanceX && distanceX / Math.abs(distanceX),
            dirY = distanceY && distanceY / Math.abs(distanceY),
            xm = 10 * Math.cos(Math.atan2(distanceX, distanceY));
          if (distanceY) map.x += dirX * xm * rate;
          if (rate) map.y += dirY * xm;
          console.log(map.x)
          this.movement = requestAnimationFrame(() => {
            refresh()
          })
        };
        this.movement = requestAnimationFrame(() => {
          refresh()
        })
      },
      handleMouseMove(x, y) {
        mouseX = x;
        mouseY = y;
        if (this.movement) return;
        this.startMoving()
      }
    },
    components: {},
    mounted() {
      let playerDom = document.querySelector('.player')
      this.player.x = parseInt(window.getComputedStyle(playerDom).left)
      this.player.y = parseInt(window.getComputedStyle(playerDom).top)
      document.addEventListener('mousemove', (e) => {
        this.handleMouseMove(e.clientX, e.clientY)
      }, false);
    }
  }
</script>
<style lang="stylus" scoped>
  playerSize = 5vw;
  .scene {
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    border 1px solid red
  }

  .map {
    position: absolute
    background: -webkit-linear-gradient(left, #ace, #f96 5%, #ace, #f96 95%, #ace);
    width: 200vw
    height: 200vw
  }

  .player {
    position: fixed
    top: 50%
    left: 50%
    margin-left - playerSize / 2
    margin-top - playerSize / 2
    width: playerSize
    height: playerSize
    background-color: lightyellow
    border-radius 50%
  }
</style>
