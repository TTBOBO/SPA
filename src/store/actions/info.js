import * as types from '../constants/type'

import axios from 'axios'

import jsonEncode from '../../assets/js/common/data'

export const infoActions = {
	/**
	 * 获取文章详情
	 * @params {aid} [number] 文章id
	 */
	
	fatchInfo ({state, commit,dispatch},params) {
		axios({
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'get_release_con',
			params: {
				aid: params.aid
			}
		}).then(res => {
			let data = jsonEncode(res.data).data
			commit(types.FETCH_INFO_CON,{
				data: data
			})
		}).catch( err => {
			console.log(err)
		})
		//获取评论列表
		/**
		 * 获取文章详情
		 * @params {aid} [number] 文章id
		 */
		axios({
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'get_article_feedback_list',
			params: {
				aid: params.aid
			}
		}).then(res => {
			let data = jsonEncode(res.data).data
			if(data.length > 0) {
				commit(types.FETCH_INFO_COMMENT_DATA,{
					data: data
				})
			}else{
				commit(types.NO_INFO_COMMENT_DATA,{
					data: ""
				})
			}
			
		}).catch( err => {
			console.log(err)
		})
	},


	fetchSetFeedback ({state, commit,dispatch} , params) {
		commit(types.IS_SEND_FEEDBACK)
		console.log(params)
		axios({
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'set_article_feedback_save',
			params: {
				aid: params.aid,
				mid: params.mid,
				goodbad: 2,
				msg: params.msg
			}
		}).then(res => {
			commit(types.NO_SEND_FEEDBACK)
			//隐藏遮罩
			commit(types.HIDE_COMMENT_BAR)
			//重新查询下数据
			dispatch('fatchInfo', {
				aid: params.aid
			})

		}).catch( err => {
			console.log(err)
		})
	},

	fetchSetFeedbackGood({state, commit, dispatch}, params) {
		console.log(params)

		axios({
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'set_feedback_isgood',
			params: {
				id: params.id
			}
		}).then(res => {
			let data = jsonEncode(res.data)
			console.log(data)
			//重新查询下数据
			dispatch('fatchInfo', {
				aid: params.aid
			})

		}).catch( err => {
			console.log(err)
		})
	}
}
