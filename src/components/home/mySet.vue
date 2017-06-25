<template>
    <div>
        <mu-appbar title="设置">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <mu-list>
            <template v-for="i , index of listName">
                <mu-list-item :title="i.name" @click="onTap(index)">
                    <mu-icon slot="right" value="keyboard_arrow_right"/>
                </mu-list-item>
            </template>
            <mu-list-item class="before"    title="退出">
          </mu-list-item>
        </mu-list>
        <mu-divider/>

       <!--  <mu-dialog :open="dialog" title="" @close="close">
           关闭后，手机将不再显示通知详情。
            <mu-flat-button slot="actions" @click="close"  primary label="取消"/>
            <mu-flat-button slot="actions"  @click="close1" primary  label="确定"/>
        </mu-dialog> -->
    </div>
</template>

<script>
export default {
    data () {
    return {
        listName:[{
            name:'新消息提醒',
            pageInfo:'news'
        },{
            name:'聊天',
            pageInfo:'char'
        },{
            name:'通用 ',
            pageInfo:'currency'
        },{
            name:'关于我们',
            pageInfo:'about'
        }]
    }
  },
    methods: {
        onBackClick() {
            this.$router.back()
        },
        onTap(index){
            console.log(this.listName[index].pageInfo)
            this.$router.next(this.listName[index].pageInfo)
        }
    }
}
</script>

<style scoped>
    .room{
        padding: 20px 10px;
    }
    .before{
        border-top: 1px solid #dddddf;
        border-bottom: 1px solid #fafafa;
    }
</style>
