import { infoActions } from '../actions/info'
import { infoMutations } from '../mutations/info'


const info = {
	state : {
		infoData : "",
		commentData: "",
		noMoreFeed:false,
		feedbackData: "",
		isRepliesFetching:false,
		show:false
	},
	actions:infoActions,
	mutations:infoMutations
}

export default info