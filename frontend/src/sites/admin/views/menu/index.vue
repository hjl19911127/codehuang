<template>
  <div>
    <el-row class="toolbar">
      <el-button type="primary" class="pull-right">刷新菜单</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-tree
          :data="menu"
          show-checkbox
          :highlight-current="true"
          :default-expand-all="true"
          node-key="id"
          :default-expanded-keys="[2, 3]"
          @node-click="handleNodeClick"
          :props="defaultProps">
        </el-tree>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import api from '@/sites/admin/api/menu';

  export default {
    data() {
      return {
        menu: [],
        defaultProps: {
          children: 'children',
          label: 'title'
        }
      };
    },
    methods: {
      init() {
        this.query();
      },
      formatTree(flatData) {
        let map = {};
        flatData.forEach((v) => {
          v.children = [];
          map[v.id] = v;
        });
        flatData.forEach((v) => {
          if (map[v.parent_id]) {
            map[v.parent_id].children.push(v);
          }
        });
        return [map[1]];
      },
      query() {
        api.query({'with_root': true}).then((res) => {
          this.menu = this.formatTree(res);
        })
      },
      handleNodeClick(data, node, component) {
        if (!node.isLeaf) {
          node.expanded = !node.expanded;
        }
      }
    },
    created() {
      this.init();
    }
  };
</script>
