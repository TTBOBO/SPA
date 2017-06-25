import * as types from '../constants/type'

export const infoMutations = {	
	[types.FETCH_INFO_CON](state, action) {
		state.infoData = action.data
	},
	[types.FETCH_INFO_COMMENT_DATA](state,action) {
		state.commentData = action.data
		state.noMoreFeed = false
	},
	[types.NO_INFO_COMMENT_DATA](state,action) {
		state.commentData = action.data
		state.noMoreFeed = true
	},
	[types.FETCH_INFO_FEEDBACKDATA] (state,action) {
		state.feedbackData = action.data
	},
	[types.SHOW_COMMENT_BAR] (state) {
		state.show = true
	},
	[types.HIDE_COMMENT_BAR] (state) {
		state.show = false
	},
	[types.IS_SEND_FEEDBACK] (state) {
		state.isRepliesFetching = true
	},
	[types.NO_SEND_FEEDBACK] (state) {
		state.isRepliesFetching = false
	}
}