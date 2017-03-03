<template>
    <div class="nav" :class="{'show':showMenu}">
            <router-link class="icon-message" :to="{'name':'message'}">消息</router-link>
            <router-link class="icon-message" :to="{'name':'contact'}">通讯录</router-link>
            <router-link class="icon-message" :to="{'name':'mine'}">我</router-link>
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
    .navigation {
        border-right: 1px solid;
        width: 10%;
        height: calc(100vh - 60px);
    }
</style>
