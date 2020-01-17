/*
 * @Author: liushuai 
 * @Date: 2019-11-21 14:36:49 
 * @Last Modified by: liushuai
 * @Last Modified time: 2019-11-22 14:29:04
 */
<template>
	<div class="home-container">
		<module-sort></module-sort>
		<!-- <div 
			class="box" 
			@mouseover="handleMouseover($event)"
        	@mouseout="handleMouseout($event)"
		>
		</div> -->
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Draggable from "vuedraggable";
import ModuleSort from "./components/ModuleSort";

export default {
	name: "Home",
	data(){
		return {

		}
	},
	computed: {
		...mapGetters(["name"])
	},
	methods: {
		handleMouseover(event){
			console.log(event);
		},

		handleMouseover(event){
			event.target.style.border = '1px dashed #2b85e4';
			console.log(event)
		},

		handleMouseout(event){
			event.target.style.border = 'none';
		}
	},
	components: {
		Draggable,
		ModuleSort
	}
};
</script>

<style lang="scss" scoped>
.home {
	&-container {
		margin: 30px;
		.box{
			width: 100px;
			height: 100px;
			background: #f5f5f5;
		}
	}
	&-text {
		font-size: 30px;
		line-height: 46px;
	}
}
</style>
