<template>
	<div >
		<p class="Date-con">{{title}}</p> 
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			title: {
				type :String,
				default: "没有数据了"
			}
		}
	}
</script>
<style type="text/css">
	.Date-con{
		position: relative;

		text-align: center;
		color: #ccc;
		height: 35px;
		width: 100%;
		line-height: 35px;
	}
	.Date-con:before{
		display: block;
        content: '';
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 20%;
        height: 1px;
        left: 5%;
        background: #ccc;

	}
	.Date-con:after{
		display: block;
        content: '';
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 20%;
        height: 1px;
        right: 5%;
        background: #ccc;
		
	}
</style>