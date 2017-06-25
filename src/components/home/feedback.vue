<template>
	<div>
		<mu-appbar :title="info.infoData.title">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>

        <mu-list>

        <div class="article_header">
			<div class="new_feed_back">最新评论<span class="feedback_num">({{info.commentData.length}})</span></div>
		</div>

		<mu-list-item  v-for="feed in info.commentData"   :title="feed.username" :key="feed.id">
                <mu-avatar :src="feed.face" slot="leftAvatar" />
                <span slot="describe">
                    {{new Date(parseInt(feed.dtime) * 1000) | filterTime}}
                </span>
                <div class="directoryContent">
                {{feed.msg}}
                </div>
                <!-- <mu-icon-menu slot="right" icon="thumb_up">
		      	</mu-icon-menu> -->
		      	<mu-icon value="thumb_up" slot="right" :data-id="feed.id" @click="clickUp($event)"></mu-icon>
		     	<div class="ups-count" v-show="feed.good>0" slot="right">{{feed.good}}</div>
		    </mu-list-item>
                
        </mu-list-item>
        </mu-list>

        <transition enter-active-class="animated flipInX"
                    leave-active-class="animated flipOutX">
            <div class="comment-bar-wrapper"
                 v-if="info.show">
                <!--close bg-->
                <div class="close-bg"
                     @click="hideCommentBar()"></div>
    			<transition enter-active-class="animated bounceIn"
                    leave-active-class="animated bounceOut">
                <!--main-->
                <mu-flexbox orient="vertical"
                            justify="center"
                            align="center"
                            class="comment-bar">
                    <textarea v-model="comment_val"></textarea>
                    <mu-flat-button :label="info.isRepliesFetching?'发送中...':'发送'"color="#41b883" @click="sendComment()"></mu-flat-button>
                </mu-flexbox>
                </transition>
            </div>
        </transition>

       

        <div class="tool">
            <div class="input" @click="showBar" >&nbsp;&nbsp;说点什么吧</div>
        </div>
         <toastbar v-show="common.toast.isShow"></toastbar>
	</div>
</template>
<script type="text/javascript">
    import toastbar from '@/components/toastbar/toastbar'
	import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	import { filterTime } from '../../assets/js/common/filter'
	export default {
		data() {
			return {
				comment_val: ''
			}
		},
		computed: {
			...mapState([
			    'info',
                'login',
                'common'
			])
		},
        components: {
            toastbar
        },
		filters: {
	        filterTime
	    },
		methods: {
            ...mapMutations([
                'SHOW_COMMENT_BAR',
                'HIDE_COMMENT_BAR'
            ]),
			onBackClick() {
		        this.$router.back()
		    },
		    showBar() {
		    	if(this.login.data.logMsg) {
                    this.SHOW_COMMENT_BAR()
                }else{
                    this.$store.dispatch('showToast',{
                      msg:'你还未登录'
                    })
                    this.$router.next({
                      name:'login',
                      query: {path:this.$route.name} 
                    })
                }
		    },
		    hideCommentBar() {
		    	this.HIDE_COMMENT_BAR()
		    },
		    sendComment() {
                let aid = this.info.infoData.id,
                    mid = this.login.userinfo.mid,
                    msg = this.comment_val

                if(!msg) {
                    this.$store.dispatch('showToast',{
                      msg:'评论不能为空'
                    })
                    return
                }

                this.$store.dispatch('fetchSetFeedback', {
                    aid, mid, msg
                })

                // 清空表单
                this.comment_val = ''
                
		    },
            clickUp(e) {
                let id = e.currentTarget.dataset.id,
                    aid = this.info.infoData.id
                if(this.login.data.logMsg) {
                    console.log(id)
                    this.$store.dispatch('fetchSetFeedbackGood', {
                    id, aid
                })
                }else{
                    this.$store.dispatch('showToast',{
                      msg:'你还未登录'
                    })
                    this.$router.next({
                      name:'login',
                      query: {path:this.$route.name} 
                    })
                }
            }
		}
	}
</script>
<style type="text/css">
	.article_header {
		height: 40px;
		border: 1px none #EFEFF4;
		border-bottom-style: solid;
	}
			
	.new_feed_back {
	    position: relative;
		float: left;
		height: 40px;
		color: #ccc;
		font-size: 15px;
		line-height: 40px;
		bottom: 0px;
	}
			
	.new_feed_back:after {
		position: absolute;
		content: "";
		width: 100%;
		height: 1px;
		bottom: 0px;
		left: 0px;
		background: #EB4F38;
	}
	.ups-count {
        font-size: 1.6rem;
        color: #000;
        margin-left: 5px
        
    }


    .icon{
    width: 100%;
    display: block;
    text-align: right;
    padding: 20px;
}
.tool{
    width: 100%;
    height: 56px;
    position: fixed;
    bottom: 0px;
    border-width: 1px;
    box-shadow: 0px -1px 2px #ccc;
    padding-top: 7px;
    background: #fff;
}
.input{
    width: 215px;
    height: 42px;
    margin: 0px 20px;
    background: #eff2f7;
    color: #b2c2d4;
    line-height: 42px;
    float: left;
}
.icon_box{
    float: left;
    margin-left: 20px;
    margin-top: 7px;
    margin-right: 10px
}
.mu-list{
    margin-bottom: 56px;
}
.comment-bar-wrapper{
	position: fixed;
	width: 100%;
	height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}
.close-bg{
	width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .54);
}
.comment-bar{
	position: absolute;
    top: 15%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 80% !important;
    height: 200px;
     background: #fff;
}
textarea{
	display: block;
                width: 92%;
                height: 70%;
                margin-bottom: .24rem;
                outline: none;
                resize: none;
                border: none;
                background: #f6f8fa;
}
			
</style>