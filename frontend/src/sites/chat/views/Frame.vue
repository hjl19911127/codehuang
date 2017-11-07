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

  let historyState = history.state, lastDirection = 'forward';

  export default {
    data() {
      return {
        transitionName: 'slide-forward'
      }
    },
    watch: {
      '$route'(to, from) {
        let direction = ''
        if (!historyState && !history.state) {
          direction = 'forward'
        } else if (history.state && !historyState) {
          direction = 'forward'
        } else if (historyState && !history.state) {
          direction = 'back'
        } else if (historyState && +historyState.key > +history.state.key) {
          direction = 'back'
        } else if (historyState && +historyState.key === +history.state.key) {
          if (lastDirection === 'back') {
            direction = 'forward'
          } else {
            direction = 'back'
          }
        } else {
          direction = 'forward'
        }
        this.transitionName = `slide-${direction}`
        historyState = history.state || historyState;
        lastDirection = direction;
      }
    },
    methods: {
      handleMaskClick() {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', false);
      },
      handleSlideStart(pos) {
        //console.log(pos)
      },
      handleSlideMove(pos) {
        //console.log(pos)
      },
      handleSlideEnd(pos, visible) {
        this.$store.dispatch('SET_SIDE_MENU_VISIBLE', visible);
      }
    },
    components: {
      ChatSideMenu
    },
    computed: {
      ...mapGetters(['sideMenuVisible', 'sideMenuEnable']),
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
