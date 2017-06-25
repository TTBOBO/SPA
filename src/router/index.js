import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'




// 登录页面
import Login from '@/components/common/login'
// 注册页面
import Register from '@/components/common/register'

// 个人中心 
import Person from '@/components/person/index'


// 主页
import Home from '@/components/home/index'



// 发布动态
import Release from '@/components/home/release'
// 新闻详情
import pageinfo from '@/components/home/pageinfo'

//详情1
import Detai from '@/components/home/detai'

// 斗图
import Doutu from '@/components/doutu/index'


//斗图1

import Doutu1 from '@/components/doutu/index1'

//评论
import Comment from '@/components/common/comment'

import Feedback from '@/components/home/feedback'

//设置
import mySet from '@/components/home/mySet'

//新消息页面
import News from '@/components/person/setting/news'

//聊天
import Char from '@/components/person/setting/char'

//通用
import Currency from '@/components/person/setting/currency'

//关于我们
import About from '@/components/person/setting/about'
//返回上一页
Router.prototype.back = function () {
  this.isBack = true
  this.go(-1)
}

//下一页
Router.prototype.next = function (...arg) {
  this.isBack = false
  this.push(...arg)
}
//跳转指定页面
Router.prototype.goto = function(rt, isBack = false){
  this.isBack = isBack
  this.push(rt)
}



Vue.use(Router)

export default new Router({
  history: true,
  saveScrollPosition: true,
  abstract: true,
  routes: [
    {
      path: '*', redirect: '/main'
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册页面
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 详情
    {
      path: '/pageinfo',
      name: 'pageinfo',
      component: pageinfo
    },
    //详情一
    {
      path: '/detai',
      name: 'detai',
      component: Detai
    },
    // 发布动态
    {
      path: '/release',
      name: 'release',
      component: Release
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    //设置
    {
      path: '/mySet',
      name: 'mySet',
      component: mySet
    },
    //新消息
    {
      path: '/news',
      name: 'news',
      component: News
    },
    //聊天
    {
      path: '/char',
      name: 'char',
      component: Char
    },
    //通用
    {
      path: '/currency',
      name: 'currency',
      component : Currency
    },
    //关于我们
    {
      path: '/about',
      name: '/about',
      component: About
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        // 默认进入 主页
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        // 主页
        path: '/home',
        name: 'home',
        component: Home,
      }, {
        // 个人中心 
        path: '/person',
        name: 'person',
        component: Person,
      },
     
      {
        // 斗图中心 
        path: '/doutu',
        name: 'doutu',
        component: Doutu,
      },
      {
        path: '/doutu1',
        name: 'doutu1',
        component: Doutu1
      },

      ]
    }
  ]
})
