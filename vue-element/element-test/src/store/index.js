import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import user from './modules/user'
import module from './modules/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    settings,
    tagsView,
    user,
    module
  },
  getters
})

export default store
