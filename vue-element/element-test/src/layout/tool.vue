<template>
    <div class="mainWrap">
        <div class="left">
            <left-tool/>
        </div>
        <div class="right">
            <right-set />
        </div>
		<div class="main-container center">
			<div class="fixed-header">
				<tool-navbar />
			</div>
			<app-main />
		</div>
    </div>
</template>
<script>
import LeftTool from '@/components/LeftTool';
import RightSet from '@/components/RightSet';
import { ToolNavbar, AppMain } from './components';

export default {
    nmae:'Toll',
    components: {
        LeftTool,
        RightSet,
		ToolNavbar,
        AppMain
    }
}
</script>
<style lang="scss" scope>
	.mainWrap{
		position: relative;
        background: #efeff4;
        width: 100%;
        min-width: 1155px;
        height: 100%;
        overflow: hidden;
	}
	.fixed-header {
        z-index: 9;
        // width: calc(100% - 315px);
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        transition: width 0.28s;
    }
    .left{
        float: left;
        width: 315px;
        height: 100%;
    }
    .right{
        float: right;
        width: 405px;
        height: 100%;
    }
    .center{
        margin-left: 315px;
        margin-right: 405px;
    }
</style>