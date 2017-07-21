<template>
  <div>
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
          :node-collapse="handleNodeCollapse"
          node-key="id"
          :render-content="renderContent"
          :props="menuProps">
        </el-tree>
      </el-col>
      <el-col :span="16" v-show="isEdit">
        <el-form ref="form" :model="menu" label-width="120px">
          <el-form-item label="父节点名称">
            <span v-text="menu.parent_title"></span>
          </el-form-item>
          <el-form-item label="菜单名称">
            <el-input v-model="menu.title"></el-input>
          </el-form-item>
          <el-form-item label="菜单地址">
            <el-input v-model="menu.path"></el-input>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-switch on-text="" off-text="" v-model="menu.enabled"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Vue from 'vue';
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
          path: '',
          enabled: true,
        },
        isEdit: false
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
            v.parent_title = map[v.parent_id].title;
            map[v.parent_id].children.push(v);
          }
        });
        return [map[1]];
      },
      query() {
        api.query({'with_root': true}).then((res) => {
          this.menus = this.formatTree(res);
        })
      },
      onSubmit() {
        let body = Vue.util.extend({}, this.menu);
        body.parent_title = undefined;
        api.create(body).then(res => {
          this.cancel();
        })
      },
      handleNodeCollapse() {

      },
      onCancel() {
        this.isEdit = false;
      },
      refreshMenu() {

      },
      add(store, data) {
        console.log(store);
        this.menu.parent_id = data.id;
        this.menu.parent_title = data.title;
        this.isEdit = true;
      },
      edit(store, data) {
        console.log(store);
        Object.assign(this.menu, data);
        this.isEdit = true;
      },
      remove() {

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
              node.label
            )]
          ),
            h(
              "span",
              {style: "float: right; margin-right: 20px"},
              [h(
                "el-button",
                {
                  attrs: {
                    type: "success",
                    size: "mini",
                    icon: "plus"
                  },
                  on: {
                    "click": () => {
                      return this.add(store, data);
                    }
                  }
                },
                [""]
              ),
                h(
                  "el-button",
                  {
                    attrs: {
                      type: "info",
                      size: "mini",
                      icon: "edit"
                    },
                    on: {
                      "click": () => {
                        return this.edit(store, data);
                      }
                    }
                  },
                  [""]
                ),
                h(
                  "el-button",
                  {
                    attrs: {
                      type: "danger",
                      size: "mini",
                      icon: "delete"
                    },
                    on: {
                      "click": () => {
                        return this.remove(store, data);
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
