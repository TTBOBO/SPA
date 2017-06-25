<template>
    <div>
        <mu-appbar :title="info.infoData.title">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <mu-card class="mu_card_con">
            
            <mu-card-header :title="info.infoData.uname" :subTitle="new Date(parseInt(info.infoData.pubdate) * 1000) |filterTime ">
                <mu-avatar :src="info.infoData.face" slot="avatar" />
            </mu-card-header>
            <div class="info_con">
                {{info.infoData.title}}
            </div>
            <div class="img_box">
                <img v-for="(img,index) in info.infoData.imgurls" v-show="index<info.infoData.imgurls.length-1" class="pic_box" :src="img" />
            </div>
        </mu-card>
        
         
        <mu-list>
            
            <div class="comment_title">
                <mu-flat-button label="评论列表" disabled slot="right"/>
            </div>
            <!-- <mu-sub-header>今天</mu-sub-header> -->
            <mu-list-item v-for="(feed,index) in info.commentData" v-show="index<3"  :title="feed.username" :key="feed.id">
                <mu-avatar :src="feed.face" slot="leftAvatar" />
                <span slot="describe">
                    {{new Date(parseInt(feed.dtime) * 1000) | filterTime}}
                </span>
                <div class="directoryContent">
                {{feed.msg}}
                </div>
                <!-- 评论点赞-数量 -->
                <mu-icon value="thumb_up" slot="right"></mu-icon>
                <div class="ups-count" v-show="feed.good>0" slot="right">{{feed.good}}</div>
            </mu-list-item>
            <div class="test" v-show="info.commentData.length>=3" @click="tapToCommentList()">查看更多</div>
            <div class="test" v-show="info.noMoreFeed">---   没有评论   ---</div>
        </mu-list>
        <!-- 底部工具栏 -->
        <div class="tool">
            <!-- 评论 -->
            <div class="input" @click="tapToCommentList()">&nbsp;&nbsp;说点什么吧</div>
            <div class="icon_box" @click="tapToCommentList()">
              </mu-badge>
              <span v-show="info.commentData.length>0"   class="mu-badge mu-badge-circle badge">{{info.commentData.length}}</span>
              <mu-icon value="comment"/>

          </div>
          <!-- 文章点赞 -->
          <div class="icon_box">
                <mu-icon :value="star" @click="tapToZan()" :color="zanColor"/>
            </div>
        </div>
        <toastbar v-show="common.toast.isShow"></toastbar>
    </div>
</template>

<script>
import toastbar from '@/components/toastbar/toastbar'
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { filterTime } from '../../assets/js/common/filter'
export default {
    data(){
        return {
            zanColor: "black",
            star:"star_border"
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
      onBackClick() {
        this.$router.back()
      },
      tapToZan() {
        console.log(this.login.data.logMsg)
        if(this.login.data.logMsg){
            if(this.zanColor == "black"){
                this.zanColor = "red"
                this.star = "star"
            }else{
                this.zanColor = "black"
                this.star = "star_border"
            }
           
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
      // 评论列表
      tapToCommentList() {
        this.$router.next('feedback')
      },
      test() {
        console.log(0)
      }
    }
}


</script>

<style scoped>
.mu-list{
    margin-bottom: 56px;
}
.img_box{
    display: block;
    width:100%;
    height: auto;
    padding: 10px auto;
}
.comment_title{
    position: relative;
}
.info_con{
    padding-left: 20px;
    letter-spacing: 1px;
    font-size: 14px;
    word-break: break-word;
    color: #000 !important;
    margin-bottom: 10px;
}
.comment_title:after{
    content: "";
    width: 100%;
    position: absolute;
    height: 1px;
    left: 0px;
    bottom: 0px;
    background: #ccc;
}
.mu_card_con:after{
    height: 0px;
}
.directoryContent {
    width: 80%;
    letter-spacing: 1px;
    font-size: 14px;
    word-break: break-word;
    color: #000 !important;
}
.test{
    width: 100%;
    height: 100px;
    /*background: red;*/
    line-height: 100px;
    text-align: center;
    color: #ccc;
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
    position: relative;
    float: left;
    margin-left: 20px;
    margin-top: 7px;
    margin-right: 10px
}
.badge{
    font-size: 10px;
    line-height: 1.4;
    position: absolute;
    top: -35%;
    left: 100%;
    margin-left: -10px;
    padding: 1px 5px;
    color: #fff;
    /*background: red;*/
    border-radius: 15px;
    background: orange;
}
</style>
