<template>
	<div>
	 	<mu-card class="mu-card1" >
            <mu-card-header :title="list.writer" subTitle="">
              <div class="mu-avatar" 
              	:data-mid="list.mid"
              	@click="tapToUserInfo($event)" 
              	slot="avatar">
              	<img :src="list.face[0]">
              </div>
            </mu-card-header>
            <div :data-id="list.id" :data-li="list" @click="tapToInfo($event)">
            <mu-card-text class="title">
              {{list.title}}
              <!-- </div> -->
            </mu-card-text>
            <div class="img_con"  >
				<img v-for="(img,index) in list.imgurls" v-show="index<3" class="pic_box" :src="img" />
				<span class="num" v-show="list.imgurls.length>3">+{{list.imgurls.length-3}}</span>
            </div>
            </div>
             <div class="bottom_box">
	           <div class="leftInfo">
	           		<span>{{new Date(parseInt(list.pubdate) * 1000) | filterTime}}</span>
	           </div>
	           	<div class="rightInfo">
	           		<div class="item">
	                    <mu-icon value="visibility" :size="14"
	                                 color="#D3DCE6"></mu-icon>
	                    <div class="text">{{list.click}}</div> 
	                     
	                </div>
	                <div class="item">
	                    <mu-icon value="textsms"
	                                 :size="14"
	                                 color="#D3DCE6"></mu-icon>
	                    <div class="text">{{list.reply_count}}</div>
	                </div>
	           	</div>
           </div>
          </mu-card>
          <toastbar v-show="common.toast.isShow"></toastbar>
	</div>
</template>

<script type="text/javascript">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { filterTime } from '../../assets/js/common/filter'
import toastbar from '@/components/toastbar/toastbar'
export default {
	props: {
		list :Object
	},
	computed: {
        ...mapState([
            'common'
        ]),
    },
    //toast组件
    components: {
    	toastbar
    },
	filters: {
		filterTime
	},
	methods: {
		tapToInfo (e) {
			let info_id = e.currentTarget.dataset.id
			this.$emit('info',info_id)
		},
		tapToUserInfo(e) {

			let user_id = e.currentTarget.dataset.mid
			this.$emit('userInfo',user_id)
		}
	}
}
</script>
<style type="text/css">
	.mu-card1{
		height: 265px;
	}
	.mu-card:after{
		left: 0 !important;
	}
	.img_con{
		width: 100%;
		height: 120px;
		display: block;
		position: relative;
	}
	.pic_box{
		width: 32.73%;
		height: 120px;
				/*max-height: 80px;*/
		object-fit: cover !important;
		overflow: hidden;
		float: left;
		max-width: intrinsic;
				/*max-height: 50%;*/
		margin-right: 1px;
		/*margin-top: 6px;*/
	}
	.mu-card-text{
		padding: 0px 16px !important;
	}
	.bottom_box{
		margin-top: 10px;
		padding: 2px 5px;
	}
	.leftInfo{
		width: 70%;
		float: left;
		color: #ccc;
	}
	.rightInfo{
		
		width: 30%;
		float: right;
		padding: 0px;
		line-height: 30px;
	}
	.rightInfo .item {
		float: left;
		color: #ccc;
		line-height: 20px;
		margin-right: 10px;
	}
	
	.text{
		display: inline-block;
		font-size: 16px;
		height:16px;
   		 margin-left: .08rem;
	}
	.num {
		position: absolute;
		background: rgba(0, 0, 0, .3);
		width: 32.73%;
		height: 120px;
		color: #fff;
		font-size: 24px;
		text-align: center;
		line-height: 120px;
		top: 0px;
		bottom: 0px;
		right: 4px;
	}
	.title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>