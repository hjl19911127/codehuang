<template>
    <div class="content">
        <div class="tip">
            <h5>tip</h5>
            <ul>
                <li>transform: rotate(45deg)</li>
                <li>剪裁路径：clip-path(http://www.ido321.com/1593.html)</li>
            </ul>
        </div>
        <div class="option">
            <div v-bind:class="'picture'+count" v-show="count < 3"><img
                src="../assets/images/adamcatlace.jpg"></div>
            <div v-bind:class="'picture'+count" v-show="count >=3"><img width="400"
                                                                        src="../assets/images/adam-sleeping.jpg">
            </div>
            <a class="btn" href="#" @click="next">
                <div>NEXT</div>
            </a>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
  .content
    margin: 100px 0 0 0
    display: flex
    flex-flow: row wrap
    align-items: flex-start
    justify-content: space-around
    height: 600px
  .option
    display: flex
    flex-flow: column wrap
    align-items: center
    justify-content: space-between
    height: 600px
  .picture1
    width: 400px
    transform: rotate(45deg)
    img
      min-width: 100%
      transform: rotate(-45deg)
  .picture2, .picture3
    width: 400px
    transform: rotate(45deg)
    overflow: hidden
    img
      min-width: 100%
      transform: rotate(-45deg) scale(1.42)
  .picture0, .picture4
    img
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
      transition: 1s clip-path
      &:hover
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
  .btn
    display: block
    width: 100px
    height: 40px
    color: #ffffff
    font-size: 24px
    line-height: 40px
    font-weight: bold
    text-align: center
    background: #2baffb
    text-decoration: none
    transform: skewX(-15deg)
    > div
      margin: 0
      padding: 0
      transform: skewX(15deg)
</style>
<script>
    export default {
        data () {
            return {
                count: 0
            }
        },
        components: {},
        methods: {
            next: function () {
                this.count = this.count + 1 > 4 ? 0 : this.count + 1;
            }
        },
        watch: {}
    }
</script>
