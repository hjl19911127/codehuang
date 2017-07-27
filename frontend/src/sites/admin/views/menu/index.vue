<template>
  <div v-loading="isLoading">
    <el-row class="toolbar">
      <div class="pull-right">
        <el-button type="danger" @click="refreshMenu">批量删除</el-button>
        <el-button type="primary" @click="refreshMenu" :loading="true">刷新菜单</el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-tree
          :data="menus"
          show-checkbox
          :default-expand-all="true"
          :expand-on-click-node="false"
          node-key="id"
          @node-click="handleNodeClick"
          :render-content="renderContent"
          :props="menuProps">
        </el-tree>
      </el-col>
      <el-col :span="16" v-show="isEdit">
        <el-form ref="menuForm" :model="menu" :rules="rules" label-width="120px">
          <el-form-item label="父节点名称">
            <span>{{menu.parent_title}}</span>
          </el-form-item>
          <el-form-item label="菜单名称" prop="title">
            <el-input v-model="menu.title" placeholder="请选择菜单名称"></el-input>
          </el-form-item>
          <el-form-item label="菜单地址" prop="route">
            <el-input v-model="menu.route" placeholder="请选择菜单地址"></el-input>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-switch on-text="" off-text="" v-model="menu.is_enabled"></el-switch>
          </el-form-item>
          <el-form-item label-width="120px">
            <el-button type="primary" @click="onSubmit">{{menu.id ? '更新' : '新增'}}</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Vue from 'vue';
  import asyncTree from '@/utils/async-tree';
  import api from '@/sites/admin/api/menu';

  export default {
    data() {
      return {
        menus: [],
        menuProps: {
          children: 'children',
          label: 'title'
        },
        menu: {
          id: 0,
          title: '',
          parent_id: 0,
          parent_title: '',
          route: '',
          is_enabled: true,
          children: []
        },
        rules: {
          title: [
            {required: true, message: '请输入菜单名称', trigger: 'blur'},
            {max: 10, message: '长度在10个字符以内', trigger: 'blur'}
          ],
          route: [
            {required: true, message: '请输入菜单地址', trigger: 'blur'}
          ]
        },
        isEdit: false,
        isLoading: false
      };
    },
    methods: {
      init() {
        this.query();
      },
      query() {
        this.isLoading = true;
        api.query().then((res) => {
          asyncTree.arrayToTree(res).then((tree) => {
            this.menus = tree;
            this.isLoading = false;
          });
        })
      },
      resetForm() {
        this.$refs['menuForm'].resetFields();
      },
      onSubmit() {
        this.$refs['menuForm'].validate((valid) => {
          if (valid) {
            let body = Object.assign({}, this.menu), id = body.id;
            body.id = undefined;
            body.parent_title = undefined;
            body.children = undefined;
            Promise.resolve(id ? api.update(id, body) : api.create(body)).then(res => {
              this.onCancel();
              this.query();
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      onCancel() {
        this.isEdit = false;
      },
      refreshMenu() {

      },
      handleNodeClick(data) {
//        this.onEdit(data);
      },
      onAdd(data) {
        Object.assign(this.menu, {
          id: 0,
          title: '',
          parent_id: data.id,
          parent_title: data.title,
          route: '',
          is_enabled: true,
        });
        this.isEdit = true;
      },
      onEdit(data) {
        Object.assign(this.menu, data);
        this.isEdit = true;
      },
      onRemove(data) {
        this.$confirm('此操作将永久删除该菜单及其子菜单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          api.remove(data.id).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.query();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      renderContent(h, {node, data, store}) {
        return h(
          "span",
          null,
          [h(
            "span",
            {"class": "el-tree-node__label"},
            [h(
              "span",
              null,
              `${node.label}${data.route ? ` ---- ${data.route}` : ''}`
            )]
          ),
            h(
              "span",
              {"class": "option-button-group"},
              [h(
                "el-button",
                {
                  style: node.level < 3 ? "" : "display:none;",
                  attrs: {
                    type: "success",
                    size: "mini",
                    icon: "plus"
                  },
                  on: {
                    "click": () => {
                      return this.onAdd(data);
                    }
                  }
                },
                [""]
              ),
                h(
                  "el-button",
                  {
                    style: data.parent_id ? "" : "display:none;",
                    attrs: {
                      type: "info",
                      size: "mini",
                      icon: "edit"
                    },
                    on: {
                      "click": () => {
                        return this.onEdit(data);
                      }
                    }
                  },
                  [""]
                ),
                h(
                  "el-button",
                  {
                    style: data.parent_id && !data.children.length ? "" : "display:none;",
                    attrs: {
                      type: "danger",
                      size: "mini",
                      icon: "delete",
                      "v-popover": "popover5"
                    },
                    on: {
                      "click": () => {
                        return this.onRemove(data);
                      }
                    }
                  },
                  [""]
                )]
            )]
        )
      },
    },
    created() {
      this.init();
    }
  };
</script>
<style lang="stylus">
  .option-button-group
    float: right;
    margin-right: 20px;

  /*display: none;*/

  .el-tree-node__content:hover
    .option-button-group
      display: block;
</style>
