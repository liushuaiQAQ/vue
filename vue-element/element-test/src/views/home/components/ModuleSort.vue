/*
 * @Author: liushuai 
 * @Date: 2019-11-21 14:36:33 
 * @Last Modified by: liushuai
 * @Last Modified time: 2019-11-22 20:39:26
 */
<template>
    <div class="app-sort">
        <div class="app">
            <div class="app-content">
                <el-scrollbar style="height:100%">
                    <draggable 
                        class="draggable"
                        :options="sortOption" 
                        @sort="onSort" 
                        @add="onAdd" 
                        :list="resData"
                        group="componentLibrary"
                    >
                        <div 
                                class="module-item"
                            v-for="(item, index) in resData"
                            :is="item.component"
                            :class="{ current: index == currentIndex || index == hoverIndex}"
                            :current=index
                            :key="index"
                            @click.native="setModuleIndex(index)"
                            @mouseover.native="handleMouseover($event, index)"
                            @mouseout.native="handleMouseout"
                        ></div>
                    </draggable>
                </el-scrollbar>
                <delete-cp 
                    :index="hoverIndex"
                    @mouseover.native="handleMouseover(index)"
                    @mouseout.native="handleMouseout"
                >
                </delete-cp>
                <module-nav-bar></module-nav-bar>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { ModuleSearch, ModuleSwiper, ModuleNav, ModuleNotice, ModuleNavBar } from './index';
import Draggable from 'vuedraggable';
import DeleteCp from '@/components/RightSet/DeleteCp';

export default {
    computed: {
        ...mapState({
            currentIndex: state => state.module.currentIndex,
            resData: state => state.module.moduleData
        })
    },
    data(){
        return{
            hoverIndex: null,
            sortOption: {
                fallbackOnBody: false,
                sort: true,
                animation: 300              
            },  
            dwellTime: 300,             //鼠标离开组件时间超过 300毫秒时  隐藏删除组件
            timer: undefined,       
        }
    },
    methods: {
        onSort(data){
            // console.log(data)
        },

        onAdd(data){
            this.setModuleIndex(data.newIndex);
        },

        //设置当前选中模块
        setModuleIndex(index){
            const moduleData = {
                index: index
            } 
            Object.assign(moduleData, this.resData[index]);
            this.$store.dispatch("module/addModule", moduleData);
        },

        handleMouseover(e, index){
            console.log(e)
            this.hoverIndex = index;
            clearInterval(this.timer);
        },
        handleMouseout(){
            this.timer = setTimeout(() => {
                this.hoverIndex = null;
            }, this.dwellTime);
        }
    },
    components: {
        Draggable,
        DeleteCp,
        ModuleSearch,
        ModuleSwiper,
        ModuleNav,
        ModuleNotice,
        ModuleNavBar
    }
}
</script>

<style lang="scss">
    .app-sort{
        width: 375px;
        height: 667px;
        margin: 0 auto;
        background: #f5f5f5;
        box-shadow: 0 1px 4px rgba(0,21,41,0.08);
        position: relative;
        .app{
            width: 375px;
            height: 100%;
            .app-content{
                position: relative;
                height: 100%;
                padding-bottom: 58px;
                .draggable{
                    height: 100%;
                }
                .current{
                    border: 1px dashed #2b85e4;
                }
                .module-item{
                    position: relative;
                }
            }
        }
    }
    @media screen and (max-height: 630px){
        .app-sort {
            height: 520px;
        }
    }
    @media screen and (max-height: 768px){
        .app-sort {
            height: 560px;
        }
    }
    .el-scrollbar__wrap{
        overflow-x: hidden;
    }
    .el-scrollbar__view{
        height: 100%;
    }
</style>