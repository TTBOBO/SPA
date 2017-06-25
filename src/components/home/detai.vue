
<template>
	<div>
	 <mu-toast class="toast" v-if="toast" :message="message" @close="hideToast"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<mu-appbar title="文章详情">
		  <mu-icon-button icon="arrow_back" slot="left" @click="goBack()"/>
		</mu-appbar>
		<mu-card>
		  <mu-card-header title="Tab" subTitle="三天前">
		    <mu-avatar src="https://sf-sponsor.b0.upaiyun.com/4ea23eebe5bf3d21b6a8cfe99591a734.gif" slot="avatar"/>
		  </mu-card-header>
		  <mu-card-text>
		    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
		    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
		    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
		    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
		  </mu-card-text>
		  <mu-card-actions>
		    <mu-flat-button :label="state" :icon="icon" :color="color" @click="dianzan()"/>
		    <mu-flat-button label="评论" icon="chat_bubble" @click="comment()"/>
		  </mu-card-actions>
		</mu-card>

		 <mu-flat-button label="评论列表" class="demo-flat-button"/>

		  <mu-list>
		    <mu-sub-header>今天</mu-sub-header>
		    <mu-list-item title="这个周末一起吃饭么?">
		      <mu-avatar src="https://sf-sponsor.b0.upaiyun.com/4ea23eebe5bf3d21b6a8cfe99591a734.gif" slot="leftAvatar"/>
		      <span slot="describe">
		        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
		      </span>
		      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
		        <mu-menu-item title="回复" />
		        <mu-menu-item title="标记" />
		        <mu-menu-item title="删除" />
		      </mu-icon-menu>
		    </mu-list-item>
		    <mu-divider inset/>
		    <mu-list-item title="Alex Qin">
		      <mu-avatar src="https://sf-sponsor.b0.upaiyun.com/4ea23eebe5bf3d21b6a8cfe99591a734.gif" slot="leftAvatar"/>
		      <span slot="describe">
		        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
		        我们去看电影，最近有部烂片上映，又有吐槽的了
		      </span>
		      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
		        <mu-menu-item title="回复" />
		        <mu-menu-item title="标记" />
		        <mu-menu-item title="删除" />
		      </mu-icon-menu>
		    </mu-list-item>
		    <mu-divider inset/>
		    
		  </mu-list>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color:"black",
				state:"点赞",
				icon:"favorite_border",
				toast: false,
				message: "点赞成功"
			}
		},
		methods: {
			goBack() {
				this.$router.back()
			},
			dianzan() {
				if(this.color == "black"){
					this.color = "red"
					this.state = "已赞",
					this.icon = "favorite"
					this.message = "点赞成功"
					this.toast = true
				      if (this.toastTimer) clearTimeout(this.toastTimer)
				      this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}else{
					this.color = "black"
					this.state = "点赞",
					this.icon = "favorite_border"
					this.message = "取消点赞"
					this.toast = true
				    if (this.toastTimer) clearTimeout(this.toastTimer)
				      this.toastTimer = setTimeout(() => {
				       this.toast = false 
				   	}, 1000)
				}
			},
			comment () {
				this.$router.next("comment")
			},
			hideToast () {
		      this.toast = false
		      if (this.toastTimer) clearTimeout(this.toastTimer)
		    }

		}
	}
</script>


<style type="text/css">
	.mu-card{
		box-shadow: none !important;
		position: relative;
	}
	.mu-card::after{
		content: "";
		width: 100% !important;
		height: 1px;
		transform: scaleY(0.5);
		
		background: #ccc;
		position: absolute;
		bottom: 0px
	}
	.toast{
		width: 200px !important;
		padding: 2px 5px;
		margin: auto;
		left: 0 !important;
		right: 0 !important;
		bottom:50px !important;
		text-align: center;

	}
</style>