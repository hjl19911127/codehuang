<template>
  <transition :name="transitionName">
    <router-view class="app"></router-view>
  </transition>
</template>
<script>
  export default {
    data() {
return {}
    },
    components: {},
    computed: {
      transitionName() {
        return this.$store.getters.getTransitionName;
      },
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
