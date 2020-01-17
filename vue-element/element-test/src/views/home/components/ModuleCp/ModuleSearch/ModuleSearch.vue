<template>
    <div class="search_module">
        <div class="input_wrap">
            <i class="el-icon-search"></i>
            <span>搜索</span>
        </div>
    </div>
</template>
<style lang="scss" scope>
    .search_module{  
        padding: 8px 12px;
        display: block;
        .input_wrap{
            display: block;
            background: #fff;
            text-align: center;
            height: 34px;
            line-height: 31px;
            border: 1px solid #e3e3e3;
            border-radius: 5px;
            color: #b2b2b2;
            &>i, &>span{
                font-size: 12px;
                color: #999;
                vertical-align: middle;
                margin: 0 3px;
            }
        }
    }
</style>