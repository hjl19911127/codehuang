<template>
  <div>
    <el-row class="toolbar">
      <router-link :to="{ name: 'article'}">
        <el-button type="primary" class="pull-right">返回列表</el-button>
      </router-link>
    </el-row>
    <el-form ref="form" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.content"></el-input>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch on-text="" off-text="" v-model="article.is_top"></el-switch>
      </el-form-item>
      <el-form-item label="是否上线">
        <el-switch on-text="" off-text="" v-model="article.is_online"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import api from '@/sites/admin/api/article';

  export default {
    data() {
      return {
        flag: {
          showCreatePanel: false
        },
        article: {
          id: 0,
          title: "",
          content: "",
          is_top: false,
          is_online: false
        }
      }
    },

    methods: {
      init() {
        this.article.id = this.$route.params.id;
        if (this.article.id) this.get();
      },
      onSubmit() {
        api.create(this.article).then((data) => {
          this.flag.showCreatePanel = false;
          this.get();

        }).catch((err) => {
        });
      },
      get() {
        api.get(this.article.id).then((res) => {
          this.article = res;
        }).catch((err) => {
        });
      }
    },
    created() {
      this.init()
    }
  }
</script>
<style>

</style>
