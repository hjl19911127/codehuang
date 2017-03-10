<template>
  <div class="main_wrapper">
    <Card/>
    <router-view></router-view>
  </div>
</template>
<style lang="stylus">
.main_wrapper
  padding-top: 30px

</style>
<script lang="babel">
  import Card from '../components/Card.vue'
  export default{
    data(){
      return {}
    },
    components: {
      Card: Card
    },
    methods: {
      init() {
      }
    },
    created() {

    }
  }
</script>
