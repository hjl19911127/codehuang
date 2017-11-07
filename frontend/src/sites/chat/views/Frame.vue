<template>
  <div class="app">
    <chat-side-menu
      :visible="sideMenuVisible"
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
      <transition :name="transitionName">
        <router-view class="full-screen main-content"></router-view>
      </transition>
    </chat-side-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ChatSideMenu from '../components/SideMenu';

  export default {
    data() {
      return {}
    },
    methods: {
      handleMaskClick() {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', false);
      },
      handleSlideStart(pos) {
        console.log(pos)
      },
      handleSlideMove(pos) {
        console.log(pos)
      },
      handleSlideEnd(pos, visible) {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', visible);
      }
    },
    components: {
      ChatSideMenu
    },
    computed: {
      ...mapGetters(['transitionName', 'sideMenuVisible', 'sideMenuEnable']),
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
