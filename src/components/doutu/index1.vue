<template>
	<div class="infinite-container">
		<mu-appbar title="图片一" class="header">
		  <mu-icon-button icon="add" slot="right"/>
		</mu-appbar>
	  <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
		  	<mu-list>
		  		<template v-for=" i of list"  >
		  			<mu-list-item :title="i" class="list-item">
		  				 <mu-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497073743&di=206610ffb12481ce41c154fb2c9e27e0&imgtype=jpg&er=1&src=http%3A%2F%2Ff8.topitme.com%2F8%2F6d%2F6c%2F11321996724e06c6d8o.jpg" slot="leftAvatar"/>
		  				 <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
		  			</mu-list-item>
		  		</template>
		  	</mu-list>
	   <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
	</div>
</template>

<script>
	export default {
		data() {
			var list = [];
			for( let i = 0; i < 10; i++){
				list.push("好友"+ (i + 1))
			}
			return {
				list,
				num :10,
				//上拉加载
				loading: false,
      			scroller: null,
				//下拉刷新
				refreshing: false,
				trigger: null

			}
		},
		mounted() {
			this.trigger = this.$el
			this.scroller = this.$el
		},
		methods: {
			refresh() {
				this.refreshing = true;
				setTimeout(() => {
			        for (let i = this.num; i < this.num + 10; i++) {
			          this.list.unshift('好友' + (i + 1))
			        }
			        this.num += 10
			        this.refreshing = false
			    }, 1000)
			},
			loadMore() {
				this.loading = true;
				 setTimeout(() => {
			        for (let i = this.num; i < this.num + 10; i++) {
			          this.list.push('好友' + (i + 1))
			        }
			        this.num += 10
			        this.loading = false
			      }, 1000)
				}
		}
	}
</script>

<style type="text/css">
	.header{
		z-index: 999;
	}
	.infinite-container{
		width: 100%;
		height: calc(100% -60px);
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		position: relative;
		user-select:none;
	}
	.list-item{
		position: relative;
	}
	.list-item:after{
		position: absolute;
		content: "";
		width: 100%;
		height: 1px;
		transform: scaleY(.5);
		bottom: 0px;
		background: #ccc;
	}
</style>