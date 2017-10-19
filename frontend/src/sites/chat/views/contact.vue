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
  import api from '../api/message';

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
      },
      create() {
        api.create(this.article).then((res) => {
          this.flag.showCreatePanel = false;
          this.query();
        }).catch((res) => {
          // error callback
        });
      },
      query() {
        api.query(this.filter).then((res) => {
          console.log(res)
          this.articles.items = res.data.items;
          this.articles.count = res.data.count;
        }).catch((res) => {
          // error callback
        });
      },
      showCreatePanel() {
        this.flag.showCreatePanel = true;
      }
    },
    created() {
      this.init()
    }
  }
</script>
<style>

</style>
