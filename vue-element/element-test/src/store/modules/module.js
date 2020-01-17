
const state = {
	currentIndex: 1,
	currentModule: {},         //当前模块
	moduleData: [
		{
			label: 'search',
			component: 'ModuleSearch'       //搜索
		},
		{
			label: '"banner"',
			component: 'ModuleSwiper'		//轮播图
		},
		{
			label: 'nav',
			component: 'ModuleNav'          //导航
		},
		{
			label: 'notice',
			component: 'ModuleNotice'		//通知
		}
	]
}

const mutations = {
	//当前的模块数据
	ADD_MODULE_VIEW(state, view) {
		state.currentModule = view;
	},

	//设置当前模块的下标
	SET_MODULE_INDEX(state, view) {
		state.currentIndex = view;
	},

	//删除模块
	DELETE_MODULE(state, view){
		state.moduleData = view;
	}

}

const actions = {
	//   {dispatch, commit, state}
	addModule({ commit }, view) {
		commit('ADD_MODULE_VIEW', view)
		commit('SET_MODULE_INDEX', view.index);
	},

	//删除模块
	deleteModule({ commit, state }, index) {
		let data = JSON.parse(JSON.stringify(state.moduleData));
		data.splice(index, 1);
		commit('DELETE_MODULE', data);
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
