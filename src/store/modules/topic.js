import {indexActions} from '../actions/topic'
import {indexMutations} from '../mutations/topic'

const topic = {
	state: {
		data: [],
		isNoMore: false,
		isFetch: false
	},
	actions: indexActions,
	mutations: indexMutations
}

export default topic