<template>
	<div>
		 <mu-appbar title="新消息通知">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <mu-list>

			<template v-for=' item,index of firstList'>
				<mu-list-item :title="item.title"  :describeText="item.des" @click="onTap(index,'firstList',item.statu)">
				    <mu-switch  v-model="item.statu" slot="right"/>
				</mu-list-item>
		    </template>
		    <mu-divider/>

		    <template v-for=' item,index of secondList'>
				<mu-list-item :title="item.title"  :describeText="item.des" @click="onTap(index,'secondList',item.statu)" label="dialog">
				    <mu-switch v-model="item.statu" slot="right"/>
				</mu-list-item>
		    </template>
		     <mu-divider/>

		    <template v-for=' item,index of third'>
				<mu-list-item :title="item.title"  :describeText="item.des" @click="onTap(index,'third',item.statu)">
				    <mu-switch v-model="item.statu" slot="right"/>
				</mu-list-item>
		    </template>
		</mu-list>
		<mu-divider />
		
	    <!-- 弹框模块 -->
		<mu-dialog :open="dialog" title="" @close="close">
		   关闭后，手机将不再显示通知详情。
		    <mu-flat-button slot="actions" @click="close"  primary label="取消"/>
		    <mu-flat-button slot="actions"  @click="close1" primary  label="确定"/>
		</mu-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				dialog: false,
				firstList: [{
					title:'新收新消息通知',
					des: '',
					statu: true
				},{
					title:'接受语音和视频聊天邀请通知',
					des: '',
					statu: false
				}],
				secondList: [{
					title: '通知显示消息详情',
					des: '关闭后，当收到微信消息时，通知提示将不显示发信人和内容摘要',
					statu: false
				}],
				third: [{
					title: '声音',
					statu: false
				},{
					title: '新消息提示音',
					statu: true
				},{
					title: '振动',
					statu: false
				}],
				events:true
			}
		},
		methods: {
			onBackClick() {
				this.$router.back()
			},
			onTap(index,type,statu){
				switch(type){
					case 'firstList':
						console.log(this.firstList[index].title)
						swichSattu(this.firstList[index])
						break;
					case 'secondList':
						swichSattu(this.secondList[index])
						let statu = this.secondList[index].statu
						this.dialog = openDialog(statu,this.dialog)
						break;
					case 'third':
						swichSattu(this.third[index])
						break;
					default:
						break;
				}
			},
		    close () {
		      this.dialog = false
		     	this.secondList[0].statu = true
		    },
		    close1 () {
		    	this.dialog = false
		    }
		}

		
	}
	//设置列表的打开状态
	function swichSattu(listName){
		listName.statu = !listName.statu
	}
	//打开弹窗
	function openDialog(statu,dialog){
		console.log("statu: "+statu)
		if(!statu){
			dialog = true
		}else{
			dialog = false
		}
		return dialog
	}
</script>