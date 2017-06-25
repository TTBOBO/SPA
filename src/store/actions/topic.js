import * as types from '../constants/type'

import jsonEncode from '../../assets/js/common/data'

import axios from 'axios'

export const indexActions = {
	/**
	 * 获取文章列表
	 * @type {get}
	 * @param {typeid} [number] 栏目id
	 * @param {page} [number] 当前页码
	 * @param {pageSize} [number] 每页页数
	 */

	fetchIndexAction ({state,commit,dispatch},params) {
		let isrefetch = params.isrefetch || false
		//当时上拉刷新开启加载
		if(!isrefetch) {
			commit(types.FETCH_INDEX_REQ)
		}
		axios({
			methos:'get',
			url:'get_release_list',
			params:{
				typeid: params.typeid,
				page: params.page,
				pageSize: params.pageSize
			}
		}).then( res => {
			let data = jsonEncode(res.data).data,
				origin = state.data,
				arr = []
			console.log(data)
			//判断是否是下拉刷新
			if(isrefetch){
				arr = data
			}else{
				arr = origin.concat(data)
			}
			if(data.length > 0) {
			    commit(types.FETCH_INDEX_SUC, {
					data: arr
				})
			}else{
				commit(types.TOGGLE_NO_MORE_DATA_STATE)
				dispatch('showToast',{
					msg:'没有数据了'
				})
			}
		}).catch( err => {
			console.log(err)
		})
	}


}