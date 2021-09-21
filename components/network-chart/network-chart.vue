<template>
	<view>
		<view class="charts-box">
			<qiun-data-charts type="line" :chartData="chartsDataTLine"
				:opts="{extra:{line:{type:'curve'}},update:true,enableScroll:true,xAxis:{itemCount:5,disableGrid:true},yAxis:{data:[{format:'yAxisNetwork'}]}}"  :ontouch="true" />
		</view>
	</view>
</template>

<script>
	import {
		timestampToTime
	} from '../../utils/utils.js'
	var TrafficStats = plus.android.importClass("android.net.TrafficStats");
	export default {
		name: "network-chart",
		props: {
			pageScrollTop: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				chartsDataTLine: {
					"categories": [],
					"series": []
				},
				total_data: 0, //总共接收到的流量  
				traffic_data: 0, //一定时间内接收到的流量  
				intervalId: null, //定时器的返回值，用于控制计时器的停止  
			};
		},
		//新手注意了，组件里没有onLoad事件！！！
		mounted() {
			this.getServerData()
		},
		destroyed() {
			clearInterval(this.intervalId)
		},
		onHide() {
			clearInterval(this.intervalId)
		},
		methods: {
			getServerData() {
				let data = [];
				let categories = [];
				//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"  
				this.total_data = TrafficStats.getTotalRxBytes();
				let count = -1;
				this.intervalId = setInterval(() => {
					this.traffic_data = TrafficStats.getTotalRxBytes() - this.total_data;
					this.total_data = TrafficStats.getTotalRxBytes();
					count++
					if (count % 2 === 0) {
						categories.push(timestampToTime(new Date().getTime(), 'h:m:s'))
						data.push(this.traffic_data)
						this.chartsDataTLine = {
							"categories": categories,
							"series": [{
								"name": "网速",
								"format":"yAxisNetwork",
								"data": data
							}]
						}


					}
					console.log(this.chartsDataTLine)
				}, 1000);
			},
			//将byte自动转换为其他单位  
			bytesToSize(bytes) {
				if (bytes === 0) return '0 B/s';
				var k = 1000, // or 1024  
					sizes = ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s', 'PB/s', 'EB/s', 'ZB/s', 'YB/s'],
					i = Math.floor(Math.log(bytes) / Math.log(k)); // log 是对数  
				return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
			}
		}
	}
</script>

<style>
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>
