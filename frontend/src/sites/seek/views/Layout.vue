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
      handleMaskClick() {
        this.$refs.drawerLayout.toggle(false);
      },
      handleSlideStart() {
      },
      handleSlideMove(pos) {
      },
      handleSlideEnd(visible) {
        this.$store.dispatch('UPDATE_SIDE_MENU_VISIBLE_STATUS', visible);
      }
    },
    components: {
      // ChatSideMenu
    },
    computed: {
      ...mapGetters(['sideMenuEnable', 'sideMenuAction']),
    }
  }
</script>
<style lang="stylus" src="../assets/stylus/style/common"></style>
<style lang="stylus"></style>
