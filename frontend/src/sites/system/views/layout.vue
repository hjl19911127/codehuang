<template>
  <div class="container">
    <system-header></system-header>
    <div class="main-wrap">
      <div class="menu-wrap">
        <system-menu></system-menu>
      </div>
      <div class="content-wrap">
        <el-row class="breadcrumb-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        <el-row class="page-wrap">
          <router-view></router-view>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  import Cookie from '@/utils/cookie';
  import SystemHeader from '@/sites/system/components/header';
  import SystemMenu from '@/sites/system/components/menu';

  export default {
    components: {
      SystemHeader,
      SystemMenu
    },
    computed: {
      session(){
        return this.$store.state.session;
      }
    },
    methods: {},
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
<style lang="stylus">
  .main-wrap
    position: absolute;
    top: 70px;
    right: 0
    bottom: 0
    left: 0

  .menu-wrap
    height 100%;
    width: 240px

  .content-wrap
    position: absolute;
    top: 0;
    right: 0
    bottom: 0
    left: 240px;
    height 100%;

  .breadcrumb-wrap
    padding: 25px 20px;
    background-color: #F9FAFC;

  .page-wrap
    padding: 0 30px;

  .toolbar
    background-color: #f2f2f2;
    padding: 10px 20px;
    margin: 20px 0;
    .el-form-item
      margin-bottom: 0;

  .pull-right
    float right;
</style>
