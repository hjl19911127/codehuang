<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
    },
    components: {
    },
    computed: {
      ...mapGetters(['sideMenuEnable', 'sideMenuAction']),
    }
  }
</script>
<style lang="stylus" src="../assets/stylus/style/common"></style>
<style lang="stylus">
  html{
    background-color: grey
  }
</style>
