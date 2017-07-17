<template>
  <div id="container">
    <h1 class="title">CSS3形变</h1>
    <ul class="clearfix">
      <li @click="changeChannel('1')" :class="{'active': channel == '1'}">
        <router-link :to="{'name':'borderRadius'}">自适应椭圆</router-link>
      </li>
      <li @click="changeChannel('2')" :class="{'active': channel == '2'}">
        <router-link :to="{'name':'parallelogram'}">平行四边形</router-link>
      </li>
      <li @click="changeChannel('3')" :class="{'active': channel == '3'}">
        <router-link :to="{'name':'rotate'}">菱形图片</router-link>
      </li>
      <li @click="changeChannel('5')" :class="{'active': channel == '5'}">
        <router-link :to="{'name':'perspective'}">梯形标签页</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import { active } from '../store/actions';
  import { getChannel } from '../store/getters';
  export default {
    methods: {
      changeChannel(channel) {
        this.$store.dispatch('TOGGLE_ACTIVE', { channel: channel })
      }
    },
    computed: {
      channel() {
        return this.$store.getters.getChannel;
      }
    }
  }

</script>
<style src="../assets/stylus/common" lang="stylus"></style>
<style src="../assets/stylus/index" lang="stylus" scoped></style>
