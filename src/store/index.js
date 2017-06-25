import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import login from './modules/login'
import common from './modules/common'
import topic from './modules/topic'
import info from './modules/info'

const store = new Vuex.Store({
	modules: {
		login,
		common,
		topic,
		info,
	}
})

export default store