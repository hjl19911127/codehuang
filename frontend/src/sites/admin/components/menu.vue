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
<script type="text/jsx">
  import {mapGetters} from 'vuex';

  const MenuTreeItem = {
    name: 'menu-tree-item',
    functional: true,
    render(h, context) {
      return (
        context.props.data.map(item => {
          if (item.children.length)
            return <el-submenu index={`${item.id}`}>
              <template slot="title">
                <i class="el-icon-menu"/>
                <span slot="title">{item.title}</span>
              </template>
              <menu-tree-item data={item.children}/>
            </el-submenu>
          else
            return <el-menu-item index={item.route}>
              <i class="el-icon-menu"/>
              <span slot="title">{item.title}</span>
            </el-menu-item>
        })
      )
    }
  };

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
