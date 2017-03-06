<template>
  <main class="page_wrapper">
    <Headers/>
    <Info/>
    <Sections/>
    <Footers/>
    <FullView />
  </main>
</template>
<style lang="stylus">
  *
    box-sizing border-box
    font-weight 400
    margin 0
    padding 0

  body
    padding-top 51px
    font-family Muli, Futura, Helvetica, Arial, sans-serif;
    font-size inherit
    color #6a6969

  button
  input
    border none
    background none
    &:focus
      outline none

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(../assets/fonts/IQHow_FEYlDC4Gzy_m8fcnbFhgvWbfSbdVg11QabG8w.woff) format('woff');
  }

  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 400;
    src: local('Muli Regular'), local('Muli-Regular'), url(../assets/fonts/minRpKQdEvXRRS8oAbAtWvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
  }

  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 700;
    src: local('Muli Bold'), local('Muli-Bold'), url(../assets/fonts/Rl-5CtBBvmtOyT-alcFUZgLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
  }
  .state-fixed
    overflow hidden
  .page_wrapper
    min-height 100vh
    padding-top 400px
  @media (max-width: 600px)
    .page_wrapper
      padding-top:350px

  @media (max-width: 500px)
    .page_wrapper
      padding-top:370px

</style>
<script lang="babel">
  import Headers from '../components/header';
  import Info from '../components/info';
  import Sections from '../components/section';
  import Footers from '../components/footer';
  import FullView from '../components/FullView';


  export default{
    components: {
      Headers: Headers,
      Info: Info,
      Sections: Sections,
      Footers: Footers,
      FullView: FullView
    },
    methods: {
      init() {
      }
    },
    created() {
      this.init()
    }
  }


</script>
