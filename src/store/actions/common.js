import * as types from '../constants/type'

export const commonActions = {
	showToast({commit,state},params) {
		let postion = params.postion || '56px'

		commit(types.SHOW_TOAST);
		commit(types.DEFINE_TOAST_MSG,{
			msg: params.msg
		})
		commit(types.DEFINE_TOAST_POSITION,{
			postion
		})
		setTimeout(() =>{
			commit(types.HIDE_TOAST)
		},2000)
	}


}