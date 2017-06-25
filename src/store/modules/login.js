import { loginActions } from '../actions/login'
import { loginMutations } from '../mutations/login'


const login = {
	state: {
		data: {
            success: false,
            logMsg: false
        },
        userinfo: {
            face: '',
            shouji: ''
        },
        regMsg:false
	},
    actions : loginActions,
    mutations : loginMutations
}

export default login
