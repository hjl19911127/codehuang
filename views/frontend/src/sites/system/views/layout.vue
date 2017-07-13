<template>
  <div class="container" :class="[skin,{'has-header':session,'has-menu':session}]">
    <system-header v-if="session"></system-header>
    <system-menu v-if="session"></system-menu>
    <div class="main-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Cookie from '@/utils/cookie';
  import SystemHeader from '@/sites/system/components/header';
  import SystemMenu from '@/sites/system/components/menu';

  export default {
    components: {SystemHeader, SystemMenu},
    computed: {
      skin() {
        return this.$store.getters.getSkin;
      },
      session(){
        return this.$store.state.session;
      }
    },
    methods: {
      switchSkin(skin) {
        this.$store.dispatch('SET_SKIN', {skin: skin})
      },
    },
    created() {
      console.log(new Cookie().get('auth'));
      this.$store.dispatch('GET_SKIN')
      if (new Cookie().get('auth')) {
        this.$store.dispatch('GET_SKIN')
      } else {
        console.log(1);
        // this.$router.go('login');
      }
    }
  }
</script>
<style lang="stylus">
  .main-wrap
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0
    right: 0;
    background-color: #1F2D3D

  .has-header
    .main-wrap
      top: 70px;

  .has-menu
    .main-wrap
      left: 250px;
</style>
