<template>
	<view class="row-uni">
		<uni-row :gutter="20" >
			<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="button-container">
				<button type="primary" size="mini" @click="goToNetworkChart">网络图表</button>
			</uni-col>
			<uni-col :xs="8" :sm="6" :md="8" :lg="9" :xl="11" class="button-container">
				<button type="default" size="mini">文件内容</button>
			</uni-col>			
		</uni-row>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			goToNetworkChart(){
				uni.navigateTo({
					url:"../../../components/network-chart/network-chart"
				})
			}
		}
	}
</script>

<style lang="scss">
	.row-uni{
		padding: 10rpx 20rpx;
	}
	.button-container{
		display: flex;
		justify-items: center;
		align-items: center;
	}
</style>
