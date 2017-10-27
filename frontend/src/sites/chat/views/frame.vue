<template>
  <div class="app" :class="[skin]">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    components: {
    },
    computed: {
      skin() {
        return this.$store.getters.getSkin;
      }
    },
    methods: {
      switchSkin(skin) {
        this.$store.dispatch('SET_SKIN', {skin: skin})
      },
    },
    created() {
    }
  }
</script>
<style lang="stylus" src="@/sites/chat/assets/stylus/style/common"></style>
