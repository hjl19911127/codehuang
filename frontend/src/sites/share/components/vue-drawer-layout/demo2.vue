<template>
  <vue-drawer-layout :reverse="true">
    <div class="drawer" slot="drawer">
      This is drawer
    </div>
    <div class="content" slot="content">
      This is content.
    </div>
  </vue-drawer-layout>
</template>
<style lang="stylus" scoped>
  .drawer
    position: absolute
    background-color: lightgoldenrodyellow
    top: 0
    right: 0
    bottom: 0
    left: 0

  .content
    width 100%
    height 100%
    overflow: auto
</style>
