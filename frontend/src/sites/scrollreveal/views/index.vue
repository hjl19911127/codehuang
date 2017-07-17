<template>
  <div>
    <Crown/>
    <Hero/>
    <Demo/>
    <Withlove/>
  </div>
</template>
<script lang="babel">
  import Crown from '../components/crown.vue'
  import Hero from '../components/hero.vue'
  import Demo from '../components/demo.vue'
  import Withlove from '../components/withlove.vue'
  import ScrollReveal from '../assets/js/scrollreveal.js'
  export default{
    data(){
      return {
        crown: null,
        demo: null
      }
    },
    components: {
      Crown,
      Hero,
      Demo,
      Withlove
    },
    methods: {
      init() {
        this.sr()
        window.addEventListener('scroll', this._throttle(this.scroll, 300), false)
      },
      sr(){
        let config = {
          viewFactor: 0.15,
          duration: 800,
          distance: '0px',
          scale: 0.8
        }
        window.sr = window.ScrollReveal(config)

        let hero = {
          origin: "top",
          distance: "24px",
          duration: 1500,
          scale: 1.05,
        }

        let intro = {
          origin: "bottom",
          distance: "64px",
          duration: 900,
          delay: 1500,
          scale: 1,
        }

        let block = {
          reset: true,
          viewOffset: {top: 64}
        }

        sr.reveal(".demo .block", block)
        sr.reveal(".hero", hero)
        sr.reveal(".intro", intro)
        sr.reveal(".seq-1", block, 200)
      },
      _throttle(fn, delay){
        let timer = null
        return function () {
          let context = this, args = arguments;
          clearTimeout(timer)
          timer = setTimeout(function () {
            fn.apply(context, args)
          }, delay)
        }
      },
      scroll(){
        if (window.pageYOffset >= this.demo.offsetTop + 64) {
          return this.crown.classList.add('visible')
        }
        if (this.crown.classList.contains('visible')) {
          return this.crown.classList.remove('visible')
        }
      }

    },
    mounted() {
      this.crown = document.querySelector('.crown')
      this.demo = document.querySelector('.demo')
      this.init()
    }
  }
</script>
<style src='../assets/stylus/font-face.css'></style>
<style lang="stylus">
  a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, img, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline
  }

  body
  html
    margin: 0
    padding: 0
    min-height 100%
    background #1a2434
    color #b0b6c1
    font-family soleil, sans-serif
    text-align center
    overflow-x hidden

  .title
    font-weight 700
    color #fff
</style>

