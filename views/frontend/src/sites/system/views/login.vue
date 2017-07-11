<template>
  <div>
    <div class="login-header">
      <h1>上天入地黄博士</h1>
    </div>
    <div class="login-body">
      <div class="tab-nav">
        <router-link class="icon-quanbu iconfont" :to="{'name':'article'}">注册</router-link>
        <router-link class="icon-quanbu iconfont" :to="{'name':'article'}">登录</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../api/session';

  export default {
    data() {
      return {
        flag: {
          showCreatePanel: false
        },
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
        }, (res) => {
          // error callback
        });
      },
      query() {
        api.query(this.filter).then((res) => {
          res.json().then((data) => {
            this.articles.items = data.items;
            this.articles.count = data.count;
          });
        }, (res) => {
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
