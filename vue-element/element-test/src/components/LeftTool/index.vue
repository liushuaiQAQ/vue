/*
 * @Author: liushuai 
 * @Date: 2019-11-21 14:36:39 
 * @Last Modified by: liushuai
 * @Last Modified time: 2019-11-22 20:22:44
 */
<template>
    <el-aside width="315px" class="app-left">
        <el-card class="box-card">
            <el-scrollbar style="height:100%">
                <div class="module-wrap">
                    <div class="module-gulp">
                        madongdong
                    </div>
                    <div class="module-item-wrap">
                        <draggable 
                            class="app-aside-drag" 
                            :options="dragOption" 
                            @end="onEnd"
                            :list="moduleData"
                            :clone="onClone"
                            :group="{ name: 'componentLibrary', pull: 'clone', put: false }"
                        >
                            <div 
                                class="module-item"
                                v-for="(item, index) in moduleData"
                                :key="item.title+index"
                            >
                                <div class="module-icon">
                                    <i :class="item.icon"></i>
                                </div>
                                <div class="module-name">{{item.title}}</div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </el-scrollbar>
        </el-card>
    </el-aside>
</template>
<script>
import Draggable from "vuedraggable";
export default {
    data(){
        return {
            dragOption: {
                fallbackOnBody: false,
	            sort: false//默然为true。这里我们只需要他拖拽，无需能拖动排序
          	},
            moduleData: [
                {
                    icon: 'el-icon-user',
                    title: '轮播图',
                    name: 'banner',
                    component: 'ModuleSwiper'
                },
                {
                    icon: 'el-icon-user',
                    title: '搜索框',
                    name: 'search',
                    component: 'ModuleSearch'
                },
                {
                    icon: 'el-icon-user',
                    title: '导航图标',
                    name: 'nav',
                    component: 'ModuleNav'
                },
                {
                    icon: 'el-icon-user',
                    title: '公告',
                    name: 'notice',
                    component: 'ModuleNotice'
                },
                {
                    icon: 'el-icon-user',
                    title: 'madongdong',
                    name: '1'
                }
            ]
        }
    },
    methods: {
        onEnd(res){
			// console.log(res)
        },
        
        onClone(item){
            const data = {
                name: item.name,
                component: item.component
            }
            console.log(item)
            return data
        }
    },
    components:{
        Draggable
    }
}
</script>
<style lang="scss" scope>
    $border: 1px solid #eaeaea;
    $dashed: 1px dashed #eaeaea;
    .app-left{
        height: calc(100vh - 50px);
        position: absolute;
        left: 0;
        top: 50px;
        width: 315px;
        z-index: 9999;
        box-shadow: 0 1px 4px rgba(0,21,41,0.08);
        .box-card{
            height: 100%;
            .el-card__body{
                padding: 0;
                height: 100%;
            }
        }

        .module-wrap{
            .module-gulp{
                height: 50px;
                line-height: 50px;
                border-bottom: $border;
                cursor: pointer;
                background: #fff;
                .text{
                    font-size: 13px;
                    color: #2e3c45;
                    text-indent: 20px;
                    margin-left: 20px;
                }
            }
            .module-item-wrap{
                border-bottom: $border;
                width: 312px;
                overflow: hidden;
                .module-item{
                    display: inline-block;
                    width: 105px;
                    height: 85px;
                    border-right: $dashed;
                    border-bottom: $dashed;
                    margin-bottom: -1px;
                    margin-right: -1px;
                    cursor: pointer;
                    .module-icon{
                        font-size: 27px;
                        height: 27px;
                        width: 37px;
                        margin: 16px auto 5px auto;
                        margin-bottom: 10px;
                        position: relative;
                        text-align: center;
                    }
                    .module-name{
                        font-size: 12px;
                        text-align: center;
                        cursor: pointer;
                        color: #798288;
                    }
                }
            }
        }
    }
    .el-scrollbar__wrap{
        overflow-x: hidden;
    }
</style>