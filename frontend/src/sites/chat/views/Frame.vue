<template>
  <div class="app">
    <chat-side-menu
      ref="menu"
      :width="width"
      :action="sideMenuAction"
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
      <div slot="menu-content">

      </div>
      <transition :name="transitionName" slot="main-content">
        <router-view class="main-content"></router-view>
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
        width: Math.floor(document.body.clientWidth * 0.8),
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
        this.$store.dispatch('SWITCH_SIDE_MENU', false);
      },
      handleSlideStart(pos) {
        //console.log(pos)
      },
      handleSlideMove(pos) {
        //console.log(pos)
      },
      handleSlideEnd(pos, visible) {
//        this.$store.dispatch('SET_SIDE_MENU_VISIBLE_STATUS', visible);
      }
    },
    components: {
      ChatSideMenu
    },
    computed: {
      ...mapGetters(['sideMenuEnable', 'sideMenuAction']),
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
