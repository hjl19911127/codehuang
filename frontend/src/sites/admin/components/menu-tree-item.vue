<template>
  <div>
    <template v-for="item in data">
      <template v-if="item.children.length">
        <el-submenu :index="`${item.id}`">
          <template slot="title"><i class="el-icon-menu"></i>{{item.title}}</template>
          <menu-tree-item :data="item.children"></menu-tree-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.route"><i class="el-icon-menu"></i>{{item.title}}</el-menu-item>
      </template>
    </template>
  </div>
</template>
<script>
  import MenuTreeItem from './menu-tree-item';

  export default {
    name: 'menu-tree-item',
    components: {
      MenuTreeItem
    },
    props: {
      data: Array
    }
  };
</script>
