<template>
  <div class="full_gradient js-full-gradient" :class="{'state-full': isFullView, 'state-complete': isCompleted}" @click="closeFullView($event)" :style="style"></div>
</template>
<script lang="babel">
  import { mapState } from 'vuex'
  export default{
    data(){
      return {

      }
    },
    computed: mapState(['isFullView','isCompleted','style']),
    methods: {
      closeFullView(e){
        this.$store.commit('SET_FULL_VIEW', false)
        this.$store.commit('SET_COMPLETED', false)
        document.body.className = document.body.className.replace('state-fixed','').trim()
      }
    }
  }

</script>
<style lang="stylus">
  .full_gradient
    z-index 5000
    position fixed
    height: 3000px
    width: 3000px
    left: 0
    top: 0
    border-radius 50%
    transform scale(0)
    transform-origin center
    transition transform .7s cubic-bezier(.47, .04, .22, .92)
    background-color: #86939e
    cursor url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuOC4zICgyOTgwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+em9vbS1jdXJzb3I8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMjUsMTIgQzI1LDE4LjYzIDE5LjYyNywyNCAxMywyNCBDNi4zNzIsMjQgMSwxOC42MyAxLDEyIEMxLDUuMzcgNi4zNzIsMCAxMywwIEMxOS42MjcsMCAyNSw1LjM3IDI1LDEyIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii01MCUiIHk9Ii01MCUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIxIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMy41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEwOTYyOTc1NSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iem9vbS1jdXJzb3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iU3ZnanNTdmcxMDAwIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTdmdqc1BhdGgxMDA3Ij4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDAwMDAwLCAxMi41MDAwMDApIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0xMi41MDAwMDApIHRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApIiBzdHJva2U9IiMzMzM0MzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMTcgTDksOC44ODE3ODQyZS0xNSIgaWQ9IkxpbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC41LDguNSBMMTcuNSw4LjUiIGlkPSJMaW5lIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==') , crosshair

  .state-full
    transform scale(2)

  .state-complete
    transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92), height 0.2s ease, width 0.2s ease
    transform: none
    border-radius: 0
    height: 100vh !important
    width: 100vw !important
    left: 0 !important
    top: 0 !important
</style>
