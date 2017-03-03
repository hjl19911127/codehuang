<template>
  <div class="app" :class="[skin]">
    <chat-header></chat-header>
    <div class="container">
      <a class="btn" href="javascript:;" @click="switchSkin('red')">红色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('green')">绿色</a>
      <a class="btn" href="javascript:;" @click="switchSkin('blue')">蓝色</a>
      <router-view></router-view>
    </div>
    <chat-navbar></chat-navbar>
  </div>
</template>
<script>
  import Cookie from '@/utils/cookie';
  import ChatHeader from '../components/header';
  import ChatNavbar from '../components/navbar';

  export default {
    components: { ChatHeader, ChatNavbar },
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
        this.$router.replace({ name: 'sign' });
      }
    }
  }
</script>
<style>
  .container {
    position: absolute;
    top: 60px;
    left: 10%;
  }
</style>
