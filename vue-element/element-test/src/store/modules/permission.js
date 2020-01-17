import { asyncRoutes, constantRoutes } from '@/router'
import { getCurrent } from '@/api/user'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
	if (route.meta && route.meta.roles) {
		return roles.some(role => route.meta.roles.includes(role))
	} else {
		return true
	}
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
	const res = []

	routes.forEach(route => {
		const tmp = { ...route }
		// if (hasPermission(roles, tmp)) {
		if (tmp.children) {
		tmp.children = filterAsyncRoutes(tmp.children, roles)
		// }
		res.push(tmp)
		}
	})

	return res
}

const state = {
	routes: [],
	addRoutes: []
}

const mutations = {
	SET_ROUTES: (state, routes) => {
		state.addRoutes = routes
		state.routes = constantRoutes.concat(routes)
	}
}

const actions = {
	generateRoutes({ commit }, roles = '') {
		return new Promise(resolve => {
		let accessedRoutes
		// if (roles.includes('admin')) {
			accessedRoutes = asyncRoutes || []
		// } else {
		// accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
		// }

		/* 接口 返回动态菜单 */
		// getCurrent().then(response => {
		// 	response.forEach((val, index) => {
		// 	if (val.children != undefined) {
		// 		var len = val.children.length;
		// 		for (var i = 0; i < len; i++) {
		// 		try {
		// 			if (val.children[i].children != undefined) {
		// 			val.children[i].children = [];
		// 			}
		// 		} catch (error) {

		// 		}
		// 		}
		// 	}
		// 	});
		// 	accessedRoutes = filterAsyncRoutes(response)
		// 	commit('SET_ROUTES', accessedRoutes)
		// 	resolve(accessedRoutes)
		// 	resolve(response)
		// }).catch(error => {
		// 	reject(error)
		// })
		commit('SET_ROUTES', accessedRoutes)
		resolve(accessedRoutes)
		})
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
