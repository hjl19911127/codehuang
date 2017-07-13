<template>
  <div>
    <div class="login-header">
      <h1>上天入地黄博士</h1>
    </div>
    <div class="login-body">
      <form action="">
        <div>
          <input type="text" class="input">
        </div>
        <div>
          <input type="text" class="input">
        </div>
      </form>
      <div class="tab-nav">
        <a class="btn">注册</a>
        <a class="btn">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/sites/system/api/session';

  export default {
    data() {
      return {
        userName: '',
        password: ''
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
