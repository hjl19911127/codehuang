<template>
  <el-menu
    class="menu"
    :default-active="activeIndex"
    :default-openeds="defaultOpeneds"
    :router="true"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    :collapse="menu.isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <menu-tree-item :data="menu.tree"/>
  </el-menu>
</template>
<script>
  import {mapGetters} from 'vuex';
  import MenuTreeItem from './menu-tree-item';

  export default {
    components: {
      MenuTreeItem
    },
    computed: {
      ...mapGetters([
        'menu',
        'activeIndex',
        'defaultOpeneds'
      ]),
    },
    methods: {
      handleSelect(obj, path) {
      },
      handleOpen() {

      },
      handleClose() {

      }
    },
    created() {
      this.$store.dispatch('GET_MENU', {route: this.$route.path});
    }
  };
</script>

<style lang="stylus" scoped>
  .menu
    height 100%;
    &:not(.el-menu--collapse)
      width: 100%
</style>
