<template>
	<div>
		 <mu-appbar title="通用">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				data: ''
			}
		},
		methods: {
			onBackClick() {
				this.$router.back()
			}
		}
	}
</script>