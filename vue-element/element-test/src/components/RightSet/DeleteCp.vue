<template>
    <div class="delete-compontent-box">
        <div class="remove-component" @click.stop="dailogStatu">
            <i class="icon el-icon-close"></i>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :append-to-body="appendToBody"
            width="430px">
            <div class="el-message-box__content">
                <div class="el-message-box__status el-icon-warning"></div>
                <div class="el-message-box__message dialog-message">此操作将删除该模块, 是否继续?</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="onRemove(index)" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            index: Number
        },
        data(){
            return{
                //这两个参数是弹框的参数
                dialogVisible: false,
                appendToBody: true 
            }
        },
        methods:{
            dailogStatu(){
                let index = !this.index && typeof(this.index)!='undefined' && this.index!=0 ? this.$store.state.module.currentIndex : this.index;
                this.$store.dispatch('module/deleteModule', index);
            },
        }
    }
</script>
<style lang="scss" scope>
    .delete-compontent-box{
        width: 20px;
        height: 20px;
        line-height: 20px;
        background: #2e3842;
        position: absolute;
        top: 0;
        right: -20px;
        cursor: pointer;
        text-align: center;
        &:hover{
            background: #000;
        }
        .icon{
            color: #fff;
        }
    }
</style>