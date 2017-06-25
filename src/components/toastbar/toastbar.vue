<template>
<div>
	<!-- <mu-snackbar :message="common.toast.msg" :style="{bottom: common.toast.postion}"   /> -->
	<div class="mui-toast-container mui-active">
		<div class="mui-toast-message">{{common.toast.msg}}</div>
	</div>
</div>
</template>

<script>
	import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

	export default {
		computed: {
			...mapState([
				'common'
			])
		}
	}
</script>
<style type="text/css">
	.mui-toast-container
		{
		    line-height:17px;position:fixed;z-index:9999;bottom:50px;left:50%;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);opacity:0
		}
		.mui-toast-container.mui-active
		{
		    opacity: 0.9;
		}

		.mui-toast-message
		{
		    font-size:14px;padding:10px 25px;text-align:center;color:#fff;border-radius:6px;background-color:#323232
		}
</style>