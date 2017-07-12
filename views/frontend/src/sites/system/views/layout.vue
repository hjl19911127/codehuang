<template>
  <div class="container" :class="[skin]">
    <system-header v-if="session"></system-header>
    <system-menu v-if="session"></system-menu>
    <div class="main-wrap">
      <a class="btn" href="javascript:;" @click="switchSkin('red')">红色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('green')">绿色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('blue')">蓝色</a>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Cookie from 'utils/cookie';
  import SystemHeader from '../components/header';
  import SystemMenu from '../components/menu';

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
<style src="../assets/stylus/common/reset" lang="stylus"></style>
<style src="../assets/stylus/style/common" lang="stylus"></style>
<style lang="stylus">
  .main-wrap {
    position: absolute;
    top: 60px;
    left: 10%;

  }
</style>
