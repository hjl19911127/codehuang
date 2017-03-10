<template>
  <div class="index_page__content_section container">
    <a class="example" href="#" v-for="item in list.items">
      <router-link :to="{'name': item.name}">
        <div class="example__cover_box">
          <img class="example__cover" :src="item.cover" :alt="item.title">
        </div>
        <div class="example__info">
          <h1 class="example__info__title" :title="item.title">{{item.title}}</h1>
          <p class="example__info__description">{{item.description}}</p>
        </div>
      </router-link>
    </a>
  </div>
</template>
<style lang="stylus">
  a
    text-decoration none
    color #000
    &:link
    &:visit
    &:hover
    &:active
      color: #000
      text-decoration none

  *
    border-box
      box-sizing

  .index_page__content_section
    margin auto
    width 1200px
    justify-content space-around
    display flex

  .example
    width: 370px
    border 1px solid #cecece
    background-color: #fff
    border-radius 6px
    box-shadow 1px 1px 5px 1px #ccc
    &__cover_box
      width: 100%
      height 200px
      background-color: #000
    &__cover
      display: block
      width 100%
      height 100%
    &__info
      padding: 0 15px 10px
    &__info__title
      font-size 21px
      color #555
      width: 340px
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover
        color #4e9815
    &__info__description
      color #999
      font-size 15px


</style>
<script lang="babel">
  const exampleList = [
    {
      name: 'preloader',
      title: 'Circular Preloader Animation',
      description: 'This is the preloader we use during all AJAX calls on GreenSock.com.',
      cover: 'http://localhost:20081/static/images/example-preloader.jpg'
    },
    {
      name: 'castle',
      title: 'Howl’s Moving Castle',
      description: 'A magical wonder of animation grandeur by Nathan Gordon.',
      cover: 'http://localhost:20081/static/images/showcase-howls-moving-castle.jpg'
    },
    {
      name: 'kineticjs',
      title: 'Bezier Tweens with KineticJS (v5)',
      description: 'Random bezier tweens created with the canvas library KineticJS.',
      cover: 'http://localhost:20081/static/images/example_kineticBezier.png'
    }
  ];
  export default{
    data(){
      return {
        list: {
          items: exampleList,
          count: exampleList.length
        }
      }
    },
    components: {},
    methods: {
      init() {
      }
    },
    created() {
      this.init()
    }
  }
</script>
