<template>
  <div>
    <template v-for="item in data">
      <template v-if="item.children.length">
        <el-submenu index="1">
          <template slot="title">{{item.title}}</template>
          <menu-tree-item :data="item"></menu-tree-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item index="2"><i class="el-icon-menu"></i>{{item.title}}</el-menu-item>
      </template>
    </template>
  </div>
</template>
<script>
  import MenuTreeItem from './menu-tree-item';

  export default {
    components: {
      MenuTreeItem
    },
    props: {
      data: Array
    }
  };
</script>
