<template>
  <div class="container">
    <div class="menu-wrap">
      <admin-menu/>
    </div>
    <div class="main-wrap">
      <admin-header :data="session"/>
      <div class="content-wrap">
        <el-row class="breadcrumb-wrap">
          <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        <el-row class="page-wrap">
          <router-view/>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import AdminHeader from '@/sites/admin/components/header';
  import AdminMenu from '@/sites/admin/components/menu';

  export default {
    components: {
      AdminHeader,
      AdminMenu
    },
    computed: {
      ...mapGetters([
        'session'
      ])
    },
    methods: {
      init() {
      }
    },
    created() {
      this.init();
    }
  }
</script>
<style lang="stylus">
  .main-wrap
    position: absolute;
    top: 0;
    right: 0
    bottom: 0
    left: 240px

  .menu-wrap
    position: absolute;
    top: 0;
    left: 0
    bottom: 0
    width: 240px

  .content-wrap
    position: absolute;
    top: 70px;
    right: 0
    bottom: 0
    left: 0;

  .breadcrumb-wrap
    position: absolute;
    top: 0;
    right: 0
    left: 0
    height: 40px;
    background-color: #F9FAFC;
    padding 0 25px
    &:before
      content "";
      display: inline-block;
      height 100%;
      vertical-align middle;
    .breadcrumb
      display: inline-block;
      vertical-align middle;

  .page-wrap
    position: absolute;
    top: 40px;
    right: 0
    left: 0
    bottom: 0
    padding: 30px 30px 0;
    overflow: auto;
    min-width 1000px;

  .toolbar
    background-color: #f2f2f2;
    padding: 10px 20px;
    margin-bottom 20px;
    .el-form-item
      margin-bottom: 0;

  .contentBar
    margin-bottom 20px;

  .pull-right
    float right;
</style>
