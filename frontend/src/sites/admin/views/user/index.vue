<template>
  <div v-loading.body="isLoading">
    <el-row class="toolbar">
      <el-form :inline="true" :model="filter" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="filter.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="filter.type" placeholder="文章类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
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
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
        <el-table-column prop="is_top" label="标题" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <router-link :to="`/article/${scope.row.id}`">
              <el-button :plain="true" type="primary" size="small">编辑</el-button>
            </router-link>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="toolbar">
      <el-button
        :plain="true"
        type="danger"
        icon="delete"
        @click="batchDelete"
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
      create() {
        api.create(this.article).then((data) => {
          this.query();
        }).catch((err) => {
          // error callback
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
      batchDelete() {

      }
    },
    created() {
      this.init()
    }
  }
</script>
<style>

</style>
