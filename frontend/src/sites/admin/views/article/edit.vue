<template>
  <div>
    <el-row class="toolbar">
      <router-link :to="{ name: 'article'}">
        <el-button type="primary" class="pull-right">返回列表</el-button>
      </router-link>
    </el-row>
    <el-form ref="form" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"/>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-row>
          <el-col :span="12">
            <el-input :rows="20" resize="none" type="textarea" v-model="article.content"/>
          </el-col>
          <el-col :span="12">
            <div class="markdown-result" v-html="article.content"></div>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch v-model="article.is_top"/>
      </el-form-item>
      <el-form-item label="是否上线">
        <el-switch v-model="article.is_online"/>
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
        contentMode: 'edit',
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
      handleTabClick(tab, event) {

      },
      onSubmit() {
        let request = this.article.id ? api.update(this.article.id, this.article) : api.create(this.article)
        request.then((res) => {
          this.get();
          this.$message({
            message: '文章保存成功',
            type: 'success'
          });
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
<style lang="stylus" scoped>
  .markdown-result
    padding: 5px 15px
    height: 420px
    box-sizing border-box
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    line-height: 1.5
</style>
