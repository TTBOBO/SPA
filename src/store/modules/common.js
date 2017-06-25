import { commonActions } from '../actions/common'
import { commonMutations } from '../mutations/common'


const common =  {
	state : {
		toast: {
			isShow :false,
			msg:'',
			postion:''
		}
	},
	actions: commonActions,
	mutations: commonMutations
}

export default common