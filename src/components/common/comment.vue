<template>
	<div>
		<mu-appbar title="评论">
		  <mu-icon-button icon="arrow_back" slot="left" @click="goBack()"/>
		   <mu-flat-button color="white" label="评论" slot="right" @click="do_comment()"/>
		</mu-appbar>
		<div class="room">
        <mu-text-field hintText="最多输入100个字符" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="5" :rowsMax="8" fullWidth :maxLength="100" />
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
    data () {
    return {
      input: '',
      inputErrorText: '',
      multiLineInput: '',
      multiLineInputErrorText: ''
    }
  },
    methods: {
        onBackClick() {
            this.$router.back()
        },
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '超过字符限制啦！！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '超过字符限制啦！！' : ''
        },
        goBack() {
        	this.$router.back()
        },
        do_comment() {
        	console.log(1)
        }
    }
}
	
</script>
<style type="text/css">

</style>