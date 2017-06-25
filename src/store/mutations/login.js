import * as types from '../constants/type'

export const loginMutations = {
	[types.FETCH_USER_USERINFO](state, action) {
		console.log(action.data)
        state.userinfo = action.data
        state.data.success = true
        console.log(state.userinfo)
    },
    [types.FETCH_USER_SUC](state) {
        state.data.logMsg = true
    },
    [types.FETCH_USER_ERR](state) {
        state.data.logMsg = false
    },
    //退出登录
    [types.LOGOUT](state) {
    	state.userinfo = {
    		face: '',
            shouji: ''
    	}
        state.data.success = false
        state.data.logMsg = false
    },

    //注册
    [types.REGIST_SUC](state,action){
        state.regMsg = true
    },
    [types.REGIST_ERR](state,action){
        state.regMsg = false
    }
}