<template>
  <div class="nav">
    <router-link class="icon-message" :to="{'name':'message'}">消息</router-link>
    <router-link class="icon-message" :to="{'name':'contact'}">联系人</router-link>
    <router-link class="icon-message" :to="{'name':'activity'}">动态</router-link>
  </div>
</template>
<script>
  export default {
    computed: {
      showMenu() {
        return this.$store.getters.getShowMenu;
      }
    },
    components: {
    }
  };
</script>

<style scoped>
  .nav {
    border-right: 1px solid;
    width: 10%;
    height: calc(100vh - 60px);
  }
</style>
