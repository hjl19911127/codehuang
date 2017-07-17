<template>
  <div>
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
          <el-button type="primary" @click="onSubmit" icon="search">查询</el-button>
        </el-form-item>
        <router-link :to="{ name: 'articleCreate'}">
          <el-button type="primary" class="pull-right" icon="plus">添加文章</el-button>
        </router-link>
      </el-form>
    </el-row>
    <el-row>
      <el-table
        :data="articles.items"
        tooltip-effect="dark"
        v-loading.body="loading"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
      </el-table>
    </el-row>
    <el-row class="toolbar">
      <el-button
        :plain="true"
        type="danger"
        icon="delete"
        @click="batchDelete()"
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
  import api from '@/sites/system/api/article';

  export default {
    data() {
      return {
        multipleSelection: [],
        loading: false,
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
          this.flag.showCreatePanel = false;
          this.query();
        }).catch((err) => {
          // error callback
        });
      },
      query() {
        this.loading = true;
        api.query(this.filter).then((data) => {
          this.articles.items = data.items;
          this.articles.count = data.count;
          this.loading = false;
        }).catch((err) => {
          // error callback
        });
      },
      showCreatePanel() {
        this.flag.showCreatePanel = true;
      },
      handleSizeChange(val) {
        this.filter.size = val;
        this.filter.page = 1;
        this.query();
      },
      handleCurrentChange(val){
        this.filter.page = val;
        this.query();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      batchDelete(){

      }
    },
    created() {
      this.init()
    }
  }
</script>
<style>

</style>
