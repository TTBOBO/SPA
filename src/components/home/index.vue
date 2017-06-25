
<template>
  <div class="infinite-container">
     <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <content-item v-for="list in topic.data" 
                    :key="list.id" 
                    :list="list"
                    @info="tapToInfo"
                    @userInfo="tapToUserinfo"
                    >
      </content-item>
    <mu-infinite-scroll loadingText="正在加载..." :scroller="scroller" :loading="topic.isFetch" @load="loadMore"/>
     
      <!-- 当没事数据时 -->
      <noMoreData v-if="this.topic.isNoMore"></noMoreData>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import contentItem from '../contentItem/contentItem'
import noMoreData from '../noMoreData/noMoreData'
export default {
  data() {
    return {
     
      //上拉加载
      loading: false,
      scroller: null,
      //下拉刷新
      refreshing: false,
      trigger: null,
      page: 0,
      loadingText: "正在加载...",
      show: false
    }
  },
  created() {
    //首次访问时加载数据 并且只有data数据的长度为空时才会加载
    if(this.topic.data.length === 0){
      this.http(10,1,3,false)
      this.page += 1
    }
  },
  computed: {
    ...mapState([
      'topic'
     ])
  },
  mounted() {
    this.scroller = this.$el
    this.trigger = this.$el
  },
  //
  
  components: {
    contentItem,
    noMoreData
  },
  methods: {
     ...mapMutations([
      
      ]),
    http(typeid,page,pageSize,isrefetch) {
        this.$store.dispatch('fetchIndexAction',{
          typeid, page, pageSize, isrefetch
        })
    },
    loadMore() {
      //只有在加载状态为false  并且没有数据的状态为false的时候才会加载
        if(!this.topic.isFetch && !this.topic.isNoMore) {
          this.page += 1
          this.http(10,this.page,3,false)
        }
    },
    refresh() {
      // this.refreshing = true
        this.page = 1
        this.http(10,this.page,3,true)
        // this.refreshing = false
    },

    tapToInfo(aid) {
      this.$store.dispatch("fatchInfo",{
        aid
      })
      this.$router.next('pageinfo')
    },
    tapToUserinfo(userid) {
      alert("用户id:"+userid)

    },
    test(i) {
      console.log(i)
    }
  }
}

</script>

<style scoped>

.infinite-container{
  /*width: 100%;
  height: calc(100% -56px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  user-select:none;*/
  width: 100%;
  height: calc(100% - 56px);
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  user-select: none;
}
</style>
