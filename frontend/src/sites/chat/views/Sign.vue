<template>
  <div>
    <div class="sign-header">
      <h1>Log in</h1>
    </div>
    <div class="sign-body">
    <div class="form-control"></div>
      <label for="">Username<input type="text" v-model="userName"></label>
      <label for="">Password<input type="password" v-model="password"></label>
      <a href="javascript:;" @click="login">Login</a>
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
