<template>
  <div>
    <div class="head">{{articles.count}}</div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>标题</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in articles.items">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <a class="btn" href="javascript:;" @click="showCreatePanel">添加</a>
    <div class="edit" v-show=flag.showCreatePanel>
      <form id="articleForm">
        <div class="control-group">
          <label class="control-label" for="title">标题</label>
          <div class="control-input">
            <input id="title" v-model="article.title" />
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="content">内容</label>
          <div class="control-input">
            <textarea id="content" v-model="article.content"></textarea>
          </div>
        </div>
        <div class="control-group">

        </div>
        <div class="control-group">
          <a href="javascript:;" class="btn" @click="create">提交</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import api from 'sites/system/api/article';

  export default {
    data() {
      return {
        flag: {
          showCreatePanel: false
        },
        article: {
          title: "",
          content: ""
        },
        filter: {
          page: 0,
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
        this.getList();
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
        api.query(this.filter).then((data) => {
          this.articles.items = data.items;
          this.articles.count = data.count;
        }).catch((err) => {
          // error callback
        });
      },
      showCreatePanel() {
        this.flag.showCreatePanel = true;
      },
      getList() {
        api.getList(this.filter).then((data) => {
        }).catch((err) => {
          // error callback
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
