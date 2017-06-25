import * as types from '../constants/type'

export const commonMutations = {
	[types.SHOW_TOAST](state) {
		state.toast.isShow = true
	},
	[types.HIDE_TOAST](state) {
		state.toast.isShow = false
	},
	[types.DEFINE_TOAST_MSG](state,action) {
		state.toast.msg = action.msg
	},
	[types.DEFINE_TOAST_POSITION](state,action) {
		state.toast.postion = action.postion
	}
}