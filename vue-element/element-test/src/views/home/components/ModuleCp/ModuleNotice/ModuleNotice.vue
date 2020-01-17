<template>
    <div class="notice">
        <div 
            class="notice-wrap flex-content"
            :class="{background: noticeData.bg_color}"
        >   
            <div class="notice-left flex-content">
                <div class="notice-icon">
                    <img :src="noticeData.icon">
                </div>
                <div 
                    class="notice-name"
                    :class="{color: noticeData.color}"
                >
                    {{noticeData.name}}
                </div>
            </div>
            <div class="notice-box">
                <div class="notice-content">madongdong</div>
            </div>
            <i class="icon el-icon-arrow-right"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            noticeData: {
                "name": "公告名称",
                "bg_color": "#f67f79",
                "color": "#ffffff",
                "icon": ""
            }
        }
    }
}
</script>
<style lang="scss" scope>
    .notice{
        &-wrap{
            width: 100%;
            height: 36px;
            background-color: #f67f79;
            color: #fff;
            font-size: 14px;
        }
        &-left{
            padding: 0 10px;
            .notice-icon{
                position: relative;
                z-index: 10;
                padding: 0 10px;
                img{
                    width: 18px;
                    height: 18px;
                    margin-right: 6px;
                }
            }
            .notice-name{
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                white-space: nowrap;
                word-break: break-all;
                line-height: 36px;
            }
        }
        &-box{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            white-space: nowrap;
            word-break: break-all;
            line-height: 36px;
            .notice-content{
                z-index: 5;
                animation: 20s 0s run infinite linear;
                transform: translateX(0%);
                display: inline-block;
            }
        }
        .icon{
            padding-right: 10px;
        }
    }
    @keyframes run {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
            /* transform: translateX(calc(-50% - 70rpx));
            transform: translateX(-moz-calc(-50% - 70rpx));
            transform: translateX(-webkit-calc(-50% - 70rpx));  */
        }
    }
</style>