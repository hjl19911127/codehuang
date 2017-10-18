<template>
  <div class="header" v-if="session">
    <div class="user-name">姓名：{{session.userName}}</div>
    <div class="user-avatar">头像：{{session.userAvatar}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      session() {
        return this.$store.getters.session;
      }
    },
    components: {}
  }
</script>
<style scoped>
    .header {
        height: 60px;
        width: 100%;
    }

</style>
