<template>
  <div>
    <mu-appbar title="注册">
      <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
    </mu-appbar>
    <div class="form">

      <mu-text-field label="手机号" labelFloat fullWidth hintText="请输入手机号" v-model="telphone" />

      <mu-text-field label="密码" labelFloat fullWidth hintText="请输入密码" type="password" v-model="password" />
      </br>
      </br>
      </br>
      <mu-raised-button label="注册" class="demo-raised-button" fullWidth primary @click='tapTORegist()' />
    </div>
    <mu-divider/>
     <toastbar v-show="common.toast.isShow"></toastbar>
    </br>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import toastbar from '@/components/toastbar/toastbar'
  export default {
    data() {
      return {
        telphone: '13870673385',
        password: 'tab520'
      }
    },
    computed: {
      ...mapState([
        'common',
        'login'
      ])
    },
    components: {
      toastbar
    },
    methods: {
      ...mapMutations([
        'REGIST_ERR'
      ]),
      tapTORegist() {
          if(this.telphone == ""){
              this.$store.dispatch('showToast',{
                    msg:'手机号码没有输入'
                })
                return
          }
          if(!(/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(this.telphone))){
            this.$store.dispatch('showToast',{
                    msg:'请输入正确的手机号码'
            })
            return
          }
          if(this.password.length == "" || this.password.length < 6) {
              this.$store.dispatch('showToast',{
                    msg:'请输入至少6位数的密码'
              })
              return
          }else{
            this.$store.dispatch('registUserAction',{
              name: this.telphone,
              pwd: this.password
            })
            //延迟判断是否登入成功  登入成功返回反之不返回
            setTimeout( () => {
              if(this.login.regMsg){
                this.$store.commit('REGIST_ERR')
                this.telphone = ""
                this.password = ""
                this.$router.back()
              }
            },500)
            
          }
           console.log(this.login.regMsg)
          
      },
      onBackClick() {
        this.$router.back()
      }
      // gotoLogin(){
      //     this.$router.next('login')
      // }
    }
  }

</script>

<style scoped>
  .form {
    width: 88%;
    margin: 2rem auto;
  }

  .footer {

    text-align: center;
  }

</style>
