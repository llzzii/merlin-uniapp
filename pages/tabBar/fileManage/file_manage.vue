<template>
	<view class="container">
		<view>
			<view class="top-view">
				<view class="uni-flex uni-row"
					style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="top-view-text">
						<text class="text-i">存储空间剩余</text>
						<text class="text-num">{{100*(avaStorage/totalStorage).toFixed(2)}}%</text>
					</view>
					<view class="open-directory">
						<text class="icon-icon" @tap="toPrePath()">&#xe61a;</text>
					</view>
				</view>

				<button type="primary" class="btn-center" :loading="loading" @tap="getStorage()">
					<text class="text-num">{{100*(avaStorage/totalStorage).toFixed(2)}}%</text>重新扫描</button>
				<view class="top-view-text bottom ">
					<text class="text-i">{{avaStorage}}GB/{{totalStorage}}GB</text>
					<text class="text-num">剩余/总量</text>
				</view>
				<view class="footer-view">
					当前目录：{{path}}
				</view>
			</view>
			<view class="center-view">
				<view class="" @click="loadDir()">
					<text class="ser-icon">&#xe6a7;</text>
					<text class="ser-text">存储文件分析</text>
				</view>
				<view class="uni-flex uni-column">
					<view class="flex-item">
						<view class="uni-flex uni-row" @tap="getMeminfo()">
							<view class="text   icon-view">
								<text class="icon-icon">&#xe608;</text>
							</view>
							<view class="text-right">
								<text class="text-cont">
									内存(剩余/全部)
								</text>
								<text class="text-cont">
									{{avaMemStr}}MB/{{totalMemStr}}MB
								</text>
							</view>
						</view>
					</view>
					<view class="flex-item">
						<view class="uni-flex uni-row">
							<view class="text   icon-view">
								<text class="icon-icon">&#xe61a;</text>
							</view>
							<view class="text-right">
								<text class="text-cont">
									文件夹
								</text>
								<text class="text-cont">
									{{dirsCount}}个
								</text>
							</view>
						</view>
					</view>
					<view class="flex-item">
						<view class="uni-flex uni-row">
							<view class="text   icon-view">
								<text class="icon-icon">&#xe65e;</text>
							</view>
							<view class="text-right">
								<text class="text-cont">
									文件
								</text>
								<text class="text-cont">
									{{filesCount}}个
								</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<file-list   ref="fileView" @updateCount="updateCount"></file-list>
	</view>
</template>

<script>
	var File = plus.android.importClass("java.io.File");
	plus.android.importClass('java.io.BufferedReader');
	const Environment = plus.android.importClass("android.os.Environment");
	const StatFs = plus.android.importClass("android.os.StatFs");
	export default {
		data() {
			return {
				fileList: [],
				path: '', // 当前文件夹路径
				rootPath: '', // 本机的根路径
				checkedAll: false, // 是否全选
				checkedFiles: [], // 已选中的文件
				title: 'button',
				totalMemStr: '',
				avaMemStr: "",
				totalStorage: 0,
				avaStorage: 0,
				loading: false,
				dirsCount: 0,
				filesCount: 0,
				dirs: [],
				files: []
			}
		},

		onLoad() {
			this.loadDir();
			this.getMeminfo();
			this.getStorage();
		},
		
		methods: {
			// 获取内存信息
			getMeminfo() {
				let localFileReader = plus.android.newObject('java.io.FileReader', '/proc/meminfo');
				let localBufferedReader = plus.android.newObject('java.io.BufferedReader', localFileReader, 8192);
				let str = localBufferedReader.readLine().toString();
				this.totalMemStr = str;
				this.avaMemStr = '';
				let i = 0;
				while (i < 2) {
					str = localBufferedReader.readLine().toString();
					this.avaMemStr = str;
					i++;
				}
				this.totalMemStr = (parseInt(this.totalMemStr.toUpperCase().replace(/(( )|(:)|[A-Z])/gi, '')) / 1024)
					.toFixed(0);
				this.avaMemStr = (parseInt(this.avaMemStr.toUpperCase().replace(/(( )|(:)|[A-Z])/gi, '')) / 1024).toFixed(
					0);
				// console.log(this.totalMemStr); //全部内存  
				// console.log(this.avaMemStr);//剩余内存
			},
			// 获取存储空间
			getStorage() {
				this.loading = true;
				let internalMemSize = 0;
				let FreeSize = 0;
				let Files = Environment.getDataDirectory();
				let StatFsInstence = new StatFs(Files.getPath());
				let blockAva = parseFloat(StatFsInstence.getAvailableBlocks());
				let blockSize = parseFloat(StatFsInstence.getBlockSize());
				let totalBlocks = parseFloat(StatFsInstence.getBlockCount());
				internalMemSize = blockSize * blockAva;
				FreeSize = internalMemSize / 1024 / 1024 / 1024;
				this.avaStorage = FreeSize.toFixed(2);
				this.totalStorage = (blockSize * totalBlocks / 1024 / 1024 / 1024).toFixed(2);
				this.loading = false;
				// return FreeSize.toFixed(2);
			},
			/**
			 * 加载文件总数据
			 */
			loadDir() {
				// 获取根目录
				let sdRoot = Environment.getExternalStorageDirectory();
				this.path = sdRoot;
				this.$refs.fileView && this.$refs.fileView.loadDir();
			},
			updateCount(e) {
				this.dirsCount = e["dirsCount"]
				this.filesCount = e["filesCount"]
			},
			toPrePath() {
				
				this.$refs.fileView && this.$refs.fileView.toPrePath();
			},
			
		},

	}
</script>

<style lang="scss">
	@font-face {
	  font-family: 'iconfont';  /* Project id 2809767 */
	  src: url('http://at.alicdn.com/t/font_2809767_pffxmckbg4b.woff2?t=1631838708484') format('woff2'),
	       url('http://at.alicdn.com/t/font_2809767_pffxmckbg4b.woff?t=1631838708484') format('woff'),
	       url('http://at.alicdn.com/t/font_2809767_pffxmckbg4b.ttf?t=1631838708484') format('truetype');
	}
	
	.icon-icon {
		font-family: iconfont;
	}

	.footer-view {
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.open-directory {
		padding: 40rpx;

		.icon-icon {
			font-size: 50rpx;
			color: #FFFFFF;
		}
	}

	.uni-row {
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
	}

	.uni-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
	}



	.flex-item {
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
	}

	.center-view {
		padding: 20 0rpx;
		text-align: center;

		.ser-icon {
			font-family: iconfont;
			font-size: 100rpx;
			color: #00ade3;
			display: block;
		}

		.ser-text {
			font-size: 30rpx;
			color: #00ade3;
		}

		.icon-view {
			width: 100rpx;
			height: 100rpx;
			line-height: 100rpx;

			.icon-icon {
				font-size: 50rpx;
				color: #00ade3;
			}
		}

		.text-right {
			padding-top: 10rpx;
		}

		.text-cont {
			font-size: 20rpx;
			line-height: 40rpx;
			display: block;
			color: #848181;
		}
	}


	.top-view {
		height: 500rpx;
		background: #00ade3;
		padding: 0 10rpx;

		.top-view-text {
			width: 240rpx;
			padding: 20rpx 0;
			text-align: center;

			.text-i {
				font-size: 30rpx;
				color: #EDF5F7;
				display: block;
			}

			.text-num {
				font-size: 50rpx;
				color: #ACDAF3;
			}
		}

		.bottom {
			text-align: left;
			-webkit-justify-content: flex-end;
			justify-content: flex-end;

			.text-num {
				font-size: 20rpx;
				color: #FFFFFF;

			}
		}

		.btn-center {
			width: 200rpx;
			height: 200rpx;
			position: relative;
			margin-top: -50rpx;
			font-size: 25rpx;
			color: #ffffff;
			border-radius: 50%;
			background-color: #00ade3;
			border: 20rpx solid #6CBEED;

			.text-num {
				line-height: 40rpx;
				padding-top: 50rpx;
				font-size: 30rpx;
				color: #ffffff;
				display: block;
			}

			&::before,
				{
				content: "";
				position: absolute;
				width: 400rpx;
				height: 400rpx;
				top: 0;
				left: 50%;
				background-color: rgba(255, 255, 255, .7);
				border-radius: 45%;
				transform: translate(-50%, -70%) rotate(0);
				animation: rotate 6s linear infinite;
				z-index: 10;
			}


		}

		@keyframes rotate {
			50% {
				transform: translate(-50%, -73%) rotate(180deg);
			}

			100% {
				transform: translate(-50%, -70%) rotate(360deg);
			}
		}
	}
</style>
