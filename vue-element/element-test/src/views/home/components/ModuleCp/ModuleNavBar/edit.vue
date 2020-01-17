<template>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
    >
        <span>我来啦!</span>
    </el-drawer>
</template>
<script>
    export default {
        data() {
            return {
                drawer: false,
                direction: 'rtl',
            };
        },
        methods: {
            
        }
    };
</script>