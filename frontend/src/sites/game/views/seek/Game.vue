<template>
  <div class="arena">
    <div class="scene" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
      <div class="map" :style="{transform:`translate3d(${-map.x}px,${-map.y}px,0)`}">

      </div>
      <div class="player">

      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../api/seek'
  import throttle from 'lodash/throttle'

  const MAX_SPEED = 5;
  let mouseX = 0, mouseY = 0;
  let playerWidth = 0;
  let uploadData = [];
  export default {
    data() {
      return {
        speed: 1,
        map: {
          x: 0,
          y: 0
        },
        players: [],
        player: {
          x: 0,
          y: 0
        }
      }
    },
    computed: {},
    methods: {
      upload(position) {
        uploadData.push(position)
        this.uploader = this.uploader || throttle(() => {
          api.uploadData(uploadData).then(() => {
            uploadData = [];
          })
        }, 5000);
        return this.uploader();
      },
      startMoving() {
        let refresh = () => {
          let {player, map, speed} = this;
          let distanceX = mouseX - player.x,
            distanceY = mouseY - player.y,
            distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (distance < playerWidth / 2) {
            this.movement = null;
            this.speed = 1;
            return;
          }
          let dirX = distanceX && distanceX / Math.abs(distanceX),
            dirY = distanceY && distanceY / Math.abs(distanceY);
          distanceX = Math.abs(distanceX);
          distanceY = Math.abs(distanceY)
          let rate;
          if (distanceX === 0) {
            map.y += dirY * speed;
          } else if (distanceY === 0) {
            map.x += dirX * speed;
          } else {
            rate = Math.abs(distanceX / distanceY);
            let ySpeed = speed * Math.sin(Math.atan2(distanceY, distanceX));
            map.x += dirX * ySpeed * rate;
            map.y += dirY * ySpeed;
            this.upload({x: map.x, y: map.y})
          }
          this.movement = requestAnimationFrame(() => {
            if (speed < MAX_SPEED) this.speed += MAX_SPEED / (5 * 1000 / 60)
            refresh()
          })
        };
        this.movement = requestAnimationFrame(() => {
          refresh()
        })
      },
      handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (this.movement) return;
        this.startMoving()
      },
      handleMouseLeave(e) {
        this.movement && cancelAnimationFrame(this.movement)
        this.movement = null;
      }
    },
    components: {},
    mounted() {
      let playerDom = document.querySelector('.player');
      playerWidth = parseInt(window.getComputedStyle(playerDom).width)
      this.player.x = parseInt(window.getComputedStyle(playerDom).left) + playerWidth / 2
      this.player.y = parseInt(window.getComputedStyle(playerDom).top) + playerWidth / 2
    }
  }
</script>
<style lang="stylus" scoped>
  playerSize = 5vw;
  .arena {
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    background-color: #909399
  }

  .scene {
    position: absolute
    left: 15vw
    top: 0
    right: 15vw
    bottom: 10vh
    border 2px solid #fff
    overflow: hidden
  }

  .map {
    position: absolute
    background-image: linear-gradient(45deg, #555 25%, transparent 25%, transparent), linear-gradient(-45deg, #555 25%, transparent 25%, transparent), linear-gradient(45deg, transparent 75%, #555 75%), linear-gradient(-45deg, transparent 75%, #555 75%);
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
