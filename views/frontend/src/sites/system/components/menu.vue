<template>
    <div class="left" :class="{'show':showMenu}">
        <!--<user-info></user-info>-->
        <ul class="nav">
            <router-link class="icon-quanbu iconfont" :to="{'name':'article'}">全部</router-link>
            <router-link class="icon-quanbu iconfont" :to="{'name':'about'}">关于</router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        computed: {
            showMenu (){
                return this.$store.getters.getShowMenu;
            }
        },
        components: {
//        'userInfo':require('./user-info.vue')
        }
    };
</script>

<style scoped>
    .nav {
        border-right: 1px solid;
        width: 10%;
        height: calc(100vh - 60px);
    }
</style>
