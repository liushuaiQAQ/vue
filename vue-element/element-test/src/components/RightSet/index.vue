<template>
    <el-drawer
        title="我是标题"
        width="405px" 
        class="app-right"
        :visible.sync="drawer"
        :direction="direction"
    >
        <span>我来啦!</span>
    </el-drawer>
</template>
<script>
export default {
    data(){
        return{
            drawer: false,
            direction: undefined
        }
    }
}
</script>
<style lang="scss" scope>
    .app-right{
        height: calc(100vh - 50px);
        position: absolute;
        right: 0;
        top: 50px;
        z-index: 99999;
        .box-card{
            height: 100%;
        }
    }
</style>