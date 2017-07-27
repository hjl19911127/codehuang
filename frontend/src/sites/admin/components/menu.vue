<template>
  <el-menu
    class="menu"
    :default-active="activeIndex"
    :default-openeds="defaultOpeneds"
    :router="true"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose">
    <menu-tree-item :data="menu"></menu-tree-item>
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
</style>
