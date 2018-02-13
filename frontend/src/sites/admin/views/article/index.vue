<template>
  <div v-loading="isLoading">
    <el-row class="toolbar">
      <el-form :inline="true" :model="filter" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="filter.title" placeholder="标题"/>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="filter.type" placeholder="文章类型">
            <el-option label="区域一" value="shanghai"/>
            <el-option label="区域二" value="beijing"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search" icon="search">查询</el-button>
        </el-form-item>
        <div class="pull-right">
          <router-link :to="{ name: 'articleCreate'}">
            <el-button type="primary" icon="plus">添加文章</el-button>
          </router-link>
        </div>
      </el-form>
    </el-row>
    <el-row class="contentBar">
      <el-table
        :data="articles.items"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="title" label="标题" show-overflow-tooltip/>
        <el-table-column prop="created_at" label="创建时间"/>
        <el-table-column prop="updated_at" label="更新时间"/>
        <el-table-column prop="is_online" label="状态">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.is_top">置顶</el-tag>
            <el-tag v-show="scope.row.is_online" type="success">上线</el-tag>
            <el-tag v-show="!scope.row.is_online" type="danger">下线</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link :to="`/article/${scope.row.id}`">
              <el-button type="primary" size="small" plain>编辑</el-button>
            </router-link>
            <el-button type="danger" size="small" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="toolbar">
      <el-button
        :plain="true"
        type="danger"
        icon="delete"
        @click="batchRemove"
        :disabled="!multipleSelection.length">
        批量删除
      </el-button>
      <el-pagination
        class="pull-right"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="filter.page"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="filter.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="articles.count">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
  import api from '@/sites/admin/api/article';

  export default {
    data() {
      return {
        multipleSelection: [],
        isLoading: false,
        filter: {
          title: '',
          type: 0,
          page: 1,
          size: 10
        },
        articles: {
          items: [],
          count: 0
        }
      }
    },

    methods: {
      init() {
        this.query();
      },
      remove(id) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          api.remove(id).then((data) => {
            this.filter.page = 0;
            this.query();
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch((err) => {
          });
        }).catch(() => {
        });
      },
      query() {
        this.isLoading = true;
        api.query(this.filter).then((data) => {
          this.articles.items = data.items;
          this.articles.count = data.count;
          this.isLoading = false;
        }).catch((err) => {
          // error callback
        });
      },
      search() {
        this.filter.page = 1;
        this.query();
      },
      handleSizeChange(val) {
        this.filter.size = val;
        this.search();
      },
      handleCurrentChange(val) {
        this.filter.page = val;
        this.query();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      batchRemove() {

      }
    },
    created() {
      this.init()
    }
  }
</script>
<style>

</style>
