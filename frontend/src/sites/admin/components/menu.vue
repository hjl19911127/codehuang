<template>
  <el-menu class="menu" :default-active="activeIndex" :router="true" @select="handleSelect" @open="handleOpen"
           @close="handleClose">
    <menu-tree-item :data="data"></menu-tree-item>
  </el-menu>
</template>
<script>
  import MenuTreeItem from './menu-tree-item';

  export default {
    props: {
      data: Array,
      activeIndex: String
    },
    components: {
      MenuTreeItem
    },
    methods: {
      handleSelect(obj, path) {
      },
      handleOpen() {

      },
      handleClose() {

      }
    }
  };
</script>

<style lang="stylus" scoped>
  .menu
    height 100%;
</style>
