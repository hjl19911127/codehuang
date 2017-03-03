<template>
  <div class="app" :class="[skin]">
    <main-header></main-header>
    <system-menu></system-menu>
    <div class="container">
      <a class="btn" href="javascript:;" @click="switchSkin('red')">红色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('green')">绿色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('blue')">蓝色</a>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Cookie from 'utils/cookie';
  import mainHeader from '../components/header';
  import SystemMenu from '../components/menu';

  export default {
    components: { mainHeader, SystemMenu },
    computed: {
      skin() {
        return this.$store.getters.getSkin;
      }
    },
    methods: {
      switchSkin(skin) {
        this.$store.dispatch('SET_SKIN', { skin: skin })
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
<style>
  .container {
    position: absolute;
    top: 60px;
    left: 10%;
  }
</style>
