import * as types from '../constants/type'

import axios from 'axios'

import md5 from 'js-md5'

import jsonEncode from '../../assets/js/common/data'




export const loginActions = {
	/**
	 * 用户登录
	 * @type {get}
	 * @param {uname} [string] 用户名
	 * @param {pwd} [string] 密码
	 */
	
	fetchUserAction ({state,commit,dispatch}, params) {
		let pwd = md5(params.pwd)
		axios({
		  	headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'op_user_login',
			params: {
				uname: params.name,
				pwd: pwd
			}
		}).then(response => {
			console.log(params)
			switch (jsonEncode(response.data).data.result){
				case 'success': 
					dispatch('showToast',{
						msg:'登录成功'
					})
					commit(types.FETCH_USER_USERINFO,{
						data : jsonEncode(response.data).data.userData
					})
					commit(types.FETCH_USER_SUC)
					break;
				case 'error': 
					dispatch('showToast',{
						msg:'密码错误'
					})
					break;
				case 'notExitis':
					dispatch('showToast',{
						msg:'用户不存在'
					})
					break;
				default:
					dispatch('showToast',{
						msg:'网络异常'
					})
					break;
			}
		}).catch(error => {
			console.log(error);
		});
	},	


	registUserAction ({state, commit, dispatch}, params) {
		let pwd = md5(params.pwd)
		axios({
			headers: {'Content-Type': 'application/json;charset=UTF-8'},
			method: 'get',
			url: 'op_user_register',
			params: {
				shouji: params.name,
				pwd: pwd
			}
		}).then( res => {
			console.log(res.data)
			switch(jsonEncode(res.data).data.result) {
				case 'success':
					dispatch('showToast',{
						msg:'注册成功'
					})

					commit(types.REGIST_SUC)
					break
				case 'failed':
					dispatch('showToast',{
						msg:'注册失败'
					})
					break
				case 'isHad':
					dispatch('showToast',{
						msg:'手机号码已存在'
					})
					break
				case 'error':
					dispatch('showToast',{
						msg:'手机号或密码不符合规则'
					})
					break
				default:
					break
			}
		}).catch( err => {
			console.log(err)
		})
	}


			 
}