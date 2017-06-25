import * as types from '../constants/type'

export const indexMutations = {
	//
	[types.FETCH_INDEX_REQ] (state) {
        state.isFetch = true
    },
    //加载数据成功
	[types.FETCH_INDEX_SUC](state, action) {
        state.data = action.data
        state.isFetch = false
    },
    //没有数据
    [types.TOGGLE_NO_MORE_DATA_STATE](state) {
    	state.isFetch = false
    	state.isNoMore = true
    }
}