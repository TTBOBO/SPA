<template>
  <div>
  <toastbar v-show="common.toast.isShow"></toastbar>
    <!-- 未登录 -->
    <div v-if="!login.data.success">
      <mu-card>

        <mu-card-media :title="userInfo.userName">
          <img src="https://cdn.pixabay.com/photo/2017/04/13/17/48/floor-2228277__340.jpg" />
        </mu-card-media>

      </mu-card>
      <br/>
      <mu-list>
        <mu-list-item title="换肤" @click='onThemeClick'>
          <mu-icon slot="left" value="remove_red_eye" />
          <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
        </mu-list-item>
        <mu-list-item title="我的收藏">
          <mu-icon slot="left" value="grade" />
          <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
        </mu-list-item>
        <mu-list-item title="我的动态" @click="onMyRealase">
          <mu-icon slot="left" value="bubble_chart" style="color: #f86161"/>
          <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
         </mu-list-item>
        <mu-list-item title="邮箱">
          <mu-icon slot="left" value="send" />
          <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
        </mu-list-item>
        <mu-list-item title="设置" @click="setting()">
          <mu-icon slot="left" value="settings"  />
          <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
        </mu-list-item>
      </mu-list>
      <br/>
      <div class="logout">
        <mu-raised-button label="登录" fullWidth secondary @click='onLogin' />
      </div>
    </div>
    <!-- 登录成功 -->
    <div v-else>
        <mu-card>

        <mu-card-media :title="login.userinfo.uname" :subTitle="login.userinfo.shouji">
          <img :src="login.userinfo.face" style="height:219px;" class="img" />
        </mu-card-media>

      </mu-card>
      <br/>
      <mu-list>
        <mu-list-item title="换肤" @click='onThemeClick'>
          <mu-icon slot="left" value="remove_red_eye" />
        </mu-list-item>
        <mu-list-item title="我的收藏">
          <mu-icon slot="left" value="grade" />
         </mu-list-item>
         <mu-list-item title="我的动态" @click="onMyRealase">
          <mu-icon slot="left" value="bubble_chart" style="color: #f86161"/>
         </mu-list-item>
        <mu-list-item title="邮箱">
          <mu-icon slot="left" value="send" />
        </mu-list-item>
        <mu-list-item title="设置" @click="setting(login.data.success)">
          <mu-icon slot="left" value="settings"  />
        </mu-list-item>
      </mu-list>
      <br/>
      <div class="logout">
        <mu-raised-button label="注销" fullWidth secondary @click='onLogout' />
      </div>
      
    </div>
  </div>
</template>
<script>
  import theme from '@/assets/js/common/theme'

  import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import toastbar from '@/components/toastbar/toastbar'
  // 主题皮肤名称数组
  const themes = [
    'light',
    'dark',
    'carbon',
    'teal'
  ]

  export default {
    data() {
      return {
        // 用户信息
        userInfo: {
          userName: '未登录',
          telphone: ''
        },
        // 主题皮肤下标
        themeIndex: -1,
      }
    },
    mounted() {

    },
    components: {
      toastbar
    },
    computed: {
      // 隐藏真实手机号
      telPhone() {
       let tel = this.userInfo.telphone.toString().split("");
        tel.splice(3,4,'*','*','*','*')
        return tel.join("")
      },
      ...mapState([
          'login',
          'common'
      ])
    },
    methods: {
      ...mapMutations([
          'LOGOUT'
      ]),
      //我的动态
      onMyRealase() {
          if(!this.login.data.success){
            this.$store.dispatch('showToast',{
                msg:'你还未登录'
            })
            this.$router.next({
              name:'login',
              query: {path:this.$route.name} 
            })
          }else{
            console.log(1)
             // this.$router.next('mySet')
          } 
      },
      //登录
      onLogin() {
          this.$router.next({
            name: 'login',
            //页面传值
            query: {path:this.$route.name} 
          })
      },
      // 注销
      onLogout() {
        this.LOGOUT();
        this.$store.dispatch('showToast',{
          msg:'退出成功'
        })
        // console.log(this.login.)
        // this.$router.next({
        //   name: 'login',
        //   //页面传值
        //   query: {redirect: 132,name:this.userInfo.userName,path:this.$route.name} 
        // })
      },
      // 换肤按钮
      onThemeClick() {
        this.themeIndex++
      },
      setting(Sta) {
        if(!this.login.data.success){
            this.$router.next('login')
        }else{
           this.$router.next('mySet')
        } 
        
        
        // this.$router.replace('mySet')
      }
    },
    watch: {
      // 监听主题皮肤
      themeIndex(n, o) {
        if (n >= themes.length) {
          this.themeIndex = 0
        }

        theme.loadTheme(themes[this.themeIndex])
      }
    }


  }

</script>

<style scoped>
  .logout {
    width: 60%;
    margin: 0 auto;
  }
  .img{
    object-fit: cover;
  }
</style>
