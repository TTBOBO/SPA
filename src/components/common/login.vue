<template>
    <div>
        <mu-appbar title="登录">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <toastbar v-show="common.toast.isShow"></toastbar>
        <div class="form">
    
            <mu-text-field label="手机号" labelFloat fullWidth hintText="请输入手机号" v-model="telphone" />
    
            <mu-text-field label="密码" labelFloat fullWidth hintText="请输入密码" type="password" v-model="password" />
            </br>
            </br>
            </br>
            <mu-raised-button label="登录" class="demo-raised-button" fullWidth primary @click='TapToLogin()' />
        </div>
        <mu-divider/>
        </br>
        <mu-flexbox class="footer">
            <mu-flexbox-item>
               <mu-flat-button label="忘记密码" @click="fogPwd()" class="demo-flat-button" />
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-flat-button label="注册" class="demo-flat-button" primary @click='goRegister'/>
            </mu-flexbox-item>
        </mu-flexbox>
        
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import toastbar from '@/components/toastbar/toastbar'
export default {
    data(){
        return {
            telphone: 'tab520',
            password: 'tab520'
        }
    },
    computed: {
        ...mapState([
            'login',
            'common'
        ]),
    },
    components: {
        toastbar
    },
    methods: {
        ...mapMutations([
            'LOGOUT',
            'FETCH_USER_ERR'
        ]),
        TapToLogin(){
            if(this.telphone == ""){
                this.$store.dispatch('showToast',{
                    msg:'手机号码没有输入'
                })
                return
            }
            if(this.password == "") {
                this.$store.dispatch('showToast',{
                    msg:'密码没有输入'
                })
                return
            }
            this.$store.dispatch('fetchUserAction',{
                name : this.telphone,
                pwd : this.password
            })

            setTimeout( () => {
              if(this.login.data.logMsg){
                this.$store.commit('REGIST_ERR')
                this.telphone = ""
                this.password = ""
                let url = this.$route.query.path
                this.$router.replace(url)
              }
            },500)
            
        },
        onBackClick(){
            this.$router.back()
        },
        goRegister(){
            this.$router.next('register')
        },
        fogPwd() {
            
        }
    }
}
</script>

<style scoped>
.form {
    width: 88%;
    margin: 2rem auto;
}
.footer{
    
     text-align: center;
}
</style>
