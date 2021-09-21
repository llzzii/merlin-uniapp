<template>
	<view class="root">
		<view class="uni-padding-wrap">
			<view class="detail-title">{{title}}</view>
			<view class="detail-header">
				<text class="user">{{detailData.user}}</text>
				<text class="time">{{detailData.createTime}}</text>
			</view>
			<view class="">
				<u-parse :content="article"  ></u-parse>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		detailJueJinData
	} from "../../utils/loadNewsData.js"
	import marked from 'marked'
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		components: {
		    uParse
		  },
		data() {
			return {
				id: '',
				type:'',
				title:'',
				detailData:{},
				article: null
			}
		},
		onLoad(e) {
			this.id = e.id || '';
			this.type = e.type || '';
			this.title = e.title || '';
			this.getData();
			
		},
		methods:{
			getData(){
				detailJueJinData(this.id ).then(res=>{
					this.detailData=res
					this.article=marked(this.detailData.mark_content)
					console.log(this.article)
				})
			}
		}
	}
</script>
<style>
	@import "../u-parse/u-parse.css";
	.detail-title{
		font-size: 40rpx;
		text-align: center;
		padding: 10rpx 0;
	}
	.detail-header{text-align: center;}
	.user,.time{
		
		font-size: 26rpx;
		color: #666666;
		margin-right: 20rpx;
	}
</style>
