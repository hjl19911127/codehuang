<template>
  <div class="header">
    <el-button icon="el-icon-d-arrow-left" size="mini" plain @click="toggleMenuCollapse"/>
    <div class="user">
      <el-dropdown>
        <span class="user-name el-dropdown-link">
          {{data.username}}<img class="user-avatar" :src="data.avatar">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toggleMenuCollapse() {
        this.$store.dispatch('TOGGLE_MENU_COLLAPSE')
      }
    },
    props: {
      data: Object
    }
  }
</script>
<style lang="stylus" scoped>
  .header
    position: absolute;
    top: 0;
    right: 0
    left: 0;
    height: 70px;
    line-height: 70px
    padding 0 20px
    background-color: #F2F6FC

  .logo
    width: 240px;
    text-align center;
    float: left;
    height: 100%;
    img
      vertical-align middle;
    &:before
      content: "";
      display: inline-block;
      vertical-align middle;
      height: 100%;

  .user
    float: right;
    padding-right 40px;
    .user-name
      display: inline-block;
      line-height: 70px;
      cursor: pointer;
    .user-avatar
      width: 40px
      height: 40px
      border-radius: 50%;
      vertical-align middle;
      margin-left: 10px;
</style>
