<template>
  <el-menu default-active="2" class="menu" @select="handleSelect" @open="handleOpen" @close="handleClose">
    <menu-tree-item :data="data"></menu-tree-item>
  </el-menu>
</template>
<script>
  import MenuTreeItem from './menu-tree-item';

  export default {
    props: {
      data: Array
    },
    components: {
      MenuTreeItem
    },
    methods: {
      handleSelect(obj, path) {
        console.log(path)
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
