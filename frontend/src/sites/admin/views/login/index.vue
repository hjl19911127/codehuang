<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-header">
        <div class="h1">Codehuang 后台管理系统</div>
      </div>
      <div class="login-body">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="user.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/sites/admin/api/session';

  export default {
    data() {
      return {
        user: {
          userName: '',
          password: ''
        }
      }
    },

    methods: {
      init() {
        this.query();
      },
      login(){
        api.login(this.user).then(() => {

        })

      }
    },
    created() {
      this.init()
    }
  }
</script>
<style lang="stylus" scoped>
  .login-container
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #1F2D3D;
    text-align center;
    &:before
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -.25em;

  .login-wrap
    width: 300px;
    display: inline-block;
    vertical-align: middle;
    background-color: #D3DCE6;
    border-radius: 10px;
    padding: 10px 20px;

  .login-header
    padding: 25px 0;

  .login-body
    padding-right: 30px;
</style>
