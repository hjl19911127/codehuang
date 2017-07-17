<template>
<div>
    <div class="wrap">
        <div class="option">
            <div v-show="!isMore">
                宽：<input type="range" max="300" min="200" v-model="circle.width">
                高：<input type="range" max="300" min="200" v-model="circle.height">
            </div>
            <div class="b-option" v-show="isMore">
                <div class="group clearfix">
                    <div class="label"> </div>
                    <div class="item">水平</div>
                    <div class="item">垂直</div>
                </div>
                <div class="group clearfix">
                    <div class="label">border-top-left-radius</div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderTL1"></div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderTL2"></div>
                </div>
                <div class="group clearfix">
                    <div class="label">border-top-right-radius</div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderTR1"></div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderTR2"></div>
                </div>
                <div class="group clearfix">
                    <div class="label">border-bottom-right-radius</div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderBR1"></div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderBR2"></div>
                </div>
                <div class="group clearfix">
                    <div class="label">border-bottom-left-radius</div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderBL1"></div>
                    <div class="item"><input type="range" max="100" min="0" v-model="circle.borderBL2"></div>
                </div>
            </div>
        </div>
        <div class="circle" v-bind:style="{width: circle.width + 'px', height: circle.height + 'px', borderRadius: circle.borderRadius}" @click="more" v-show="!isMore"></div>
        <div class="circle" v-bind:style="{borderTopLeftRadius: circle.borderTL1 +'% '+ circle.borderTL2 +'%',
                                           borderTopRightRadius: circle.borderTR1 +'% '+ circle.borderTR2 + '%',
                                           borderBottomRightRadius: circle.borderBR1 +'% '+ circle.borderBR2 +'%',
                                           borderBottomLeftRadius: circle.borderBL1 +'% '+ circle.borderBL2 +'%'}"  v-show="isMore"></div>
        <div class="tip">
            <h5>border-radius</h5>
            <ul>
                <li>水平半径和垂直半径</li>
                <li>可以为元素的每个角指定不同的值</li>
            </ul>
        </div>
    </div>
    <div class="data" v-show="!isMore">
        <label>width:</label> <span>{{circle.width}}px;</span>
        <label>height:</label> <span>{{circle.height}}px;</span>
        <label>border-radius:</label> <input v-model="circle.borderRadius" />
    </div>
    <div class="data" v-show="isMore">
        <div class="vertical"><label>border-top-left-radius:</label> <span>{{circle.borderTL1}}% &nbsp;{{circle.borderTL2}}%</span></div>
        <div class="vertical"><label>border-top-right-radius:</label> <span>{{circle.borderTR1}}% &nbsp;{{circle.borderTR2}}%</span></div>
        <div class="vertical"><label>border-bottom-right-radius:</label> <span>{{circle.borderBR1}}% &nbsp;{{circle.borderBR2}}%</span></div>
        <div class="vertical"><label>border-bottom-left-radius:</label> <span>{{circle.borderBL1}}% &nbsp;{{circle.borderBL2}}%</span></div>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                circle: {
                    width: 200,
                    height: 200,
                    borderRadius: '100px',
                    borderTL1: 50,
                    borderTL2: 100,
                    borderTR1: 50,
                    borderTR2: 100,
                    borderBR1: 50,
                    borderBR2: 0,
                    borderBL1: 50,
                    borderBL2: 0
                },
                isMore: false
            }
        },
        components: {},
        methods: {
            more: function(){

                this.isMore = true;
            }
        },
        watch: {}
    }
</script>
<style lang="stylus" scoped>
   .wrap
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: space-between
  .circle
    background: #fb3
    margin-right: 10px
    width: 200px
    height: 200px
    border-radius: 100px
  .label, .item
    float: left
  .group
    width: 500px
  .label
    width: 220px
    height: 20px
  .item
    width: 140px
    text-align: center
</style>



