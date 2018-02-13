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
            <el-input v-model="menu.title" placeholder="请选择菜单名称"/>
          </el-form-item>
          <el-form-item label="菜单地址" prop="route">
            <el-input v-model="menu.route" placeholder="请选择菜单地址"/>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-switch v-model="menu.is_enabled"/>
          </el-form-item>
          <el-form-item label-width="120px">
            <el-button type="primary" @click="handleSubmit">{{menu.id ? '更新' : '新增'}}</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/jsx">
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
      refreshMenu() {

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
      handleSubmit() {
        this.$refs['menuForm'].validate((valid) => {
          if (valid) {
            let body = Object.assign({}, this.menu), id = body.id;
            body.id = undefined;
            body.parent_title = undefined;
            body.children = undefined;
            Promise.resolve(id ? api.update(id, body) : api.create(body)).then(res => {
              this.handleCancel();
              this.query();
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleCancel() {
        this.isEdit = false;
      },
      append(data) {
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
      edit(data) {
        Object.assign(this.menu, data);
        this.isEdit = true;
      },
      remove(data) {
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
        return (
          <span class="tree-content">
            <span>
              <span>{node.label}<span class="tree-label"
                                      style="">{data.route ? `路由：${data.route}` : ''}</span></span>
            </span>
            <span class="option-button-group">
              {node.level < 4 &&
              <el-button type="success" icon="el-icon-plus" size="mini" on-click={() => this.append(data)}/>}
              {!!data.parent_id &&
              <el-button type="primary" icon="el-icon-edit" size="mini" on-click={() => this.edit(data)}/>}
              {!!data.parent_id && !data.children.length &&
              <el-button type="danger" icon="el-icon-delete" size="mini" on-click={() => this.remove(data)}/>}
            </span>
          </span>);
      },
    },
    created() {
      this.init();
    }
  };
</script>
<style lang="stylus">
  .tree-content
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .tree-label
      font-size: 12px;
      font-weight: 700;
      color: #be9c3b;
      margin-left: 20px;
    .el-button--mini
      padding 4px 7px
</style>
