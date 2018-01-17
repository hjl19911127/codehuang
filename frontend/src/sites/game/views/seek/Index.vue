<template>
  <a class="btn-start" href="javascript:void(0)" @click="handleStartGame">
    开始
  </a>
</template>
<script>
  import {mapGetters} from 'vuex'
  import gameApi from '../../api/game'

  export default {
    data() {
      return {}
    },
    methods: {
      handleStartGame() {
        gameApi.create()
        this.$router.push('/seek/1')
      },
    },
    computed: {
      ...mapGetters(['sideMenuEnable', 'sideMenuAction']),
    }
  }
</script>
<style lang="stylus" scoped>
  .btn-start
    display: inline-block
    border 2px solid #F56C6C
    color: #F56C6C;
    width: 20vw
    height: 20vw
    font-size 2vw
</style>
