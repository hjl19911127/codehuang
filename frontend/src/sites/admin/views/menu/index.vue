<template>
  <div>
    <el-row class="toolbar">
      <el-button type="primary" class="pull-right">刷新菜单</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-tree
          :data="data2"
          show-checkbox
          :highlight-current="true"
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
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
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      init(){
        this.query();
      },
      formatTree(){

      },
      query(){
        api.query().then((res) => {
          this.menu = res;
        })
      },
      handleNodeClick(data, node, component){
        if (!node.isLeaf) {
          node.expanded = !node.expanded;
        }
      }
    },
    created(){
      this.init();
    }
  };
</script>
