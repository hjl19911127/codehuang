<template>
  <div>
    <div class="sign-header">
      <h1>登录</h1>
    </div>
    <div class="sign-body">
    <div class="form-control"></div>
      <label for="">用户名<input type="text" v-model="userName"></label>
      <label for="">密码<input type="password" v-model="password"></label>
      <a href="javascript:;" @click="login">登录</a>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    computed: mapGetters(['authorized']),
    methods: {
      login() {
        if (!this.username.value || !this.password.value) {
          return;
        }
      }
    },
    created() {
      this.authorized && this.$router.replace('/')
    }
  }
</script>
<style>

</style>
