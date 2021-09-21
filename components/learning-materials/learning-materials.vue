<template>
	<view class="directory-body">
		<uni-list>
			<uni-list-item v-for="item in fileList" :key="item.fullPath" :title="item.name"
				:clickable="true" :thumb="item.isFile?'/static/svg/file.svg':'/static/svg/folder.svg'"
				@click="getNextFile(item)">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import{showLoading,hideLoading} from '../../utils/loading.js'
	var File = plus.android.importClass("java.io.File");
	plus.android.importClass('java.io.BufferedReader');
	const Environment = plus.android.importClass("android.os.Environment");
	const StatFs = plus.android.importClass("android.os.StatFs");
	export default {
		props: {
			path: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				fileList: [],
				dirsCount: 0,
				filesCount: 0,
				currentPath:"",
				loadingCount:0,
				dirs: [],
				files: []
			}
		},
		onLoad() {
			this.loadDir();
		},
		methods: {
			/**
			 * 加载文件总数据
			 */
			loadDir() {
				// // 获取根目录
				let sdRoot = Environment.getExternalStorageDirectory();
				this.path=sdRoot;
				// 遍历sd卡根目录下的所有文件和文件夹  
				showLoading()
				this.filesCount=this.dirsCount=0;
				this.fileList=[];
				let files = plus.android.invoke(this.path, "listFiles");
				let len = files.length;
				for (let i = 0; i < len; i++) {
					let file = files[i];

					//非隐藏文件执行操作  
					// if (!plus.android.invoke(file, "isHidden")) {

					// 判断是文件还是文件夹  
					if (plus.android.invoke(file, "isDirectory")) {
						this.dirs.push({
							name: plus.android.invoke(file, "getName"),
							fullPath: plus.android.invoke(file, "getPath"),
							isFile: false,
						})
						this.dirsCount++
						this.getFiles({
							name: plus.android.invoke(file, "getName"),
							fullPath: plus.android.invoke(file, "getPath"),
							isFile: false,
						})
					} else {
						// 文件
						this.files.push({
							name: plus.android.invoke(file, "getName"),
							fullPath: plus.android.invoke(file, "getPath"),
							isFile: true, // 是否是文件
						})
						this.filesCount++
					}
					// }
				}
				this.fileList = [...this.dirs, ...this.files]
				this.$emit("updateCount", {
					"dirsCount": this.dirsCount,
					"filesCount": this.filesCount
				})
				hideLoading()
			},

			/**
			 * 获取文件夹内容
			 * @param {Object} file
			 */
			getFiles(file) {
				if (!file.isFile) {

					let directory = new File(file.fullPath);
					let arr = directory.listFiles();
					// let arr = plus.android.invoke(file.fullPath, "listFiles");
					// this.path = file.fullPath;
					const that = this;
					// console.log(arr)
					arr && arr.forEach(item => {
						// console.log(item)
						//非隐藏文件执行操作
						// if (!plus.android.invoke(item, "isHidden")) {

						// 判断是文件还是文件夹  
						if (plus.android.invoke(item, "isDirectory")) {
							// that.dirs.push({
							// 	name: plus.android.invoke(item, "getName"),
							// 	fullPath: plus.android.invoke(item, "getPath"),
							// 	isFile: false,
							// })
							that.dirsCount++
							that.getFiles({
								name: plus.android.invoke(item, "getName"),
								fullPath: plus.android.invoke(item, "getPath"),
								isFile: false,
							})
						} else {
							// 文件
							// that.files.push({
							// 	name: plus.android.invoke(item, "getName"),
							// 	fullPath: plus.android.invoke(item, "getPath"),
							// 	isFile: true, // 是否是文件
							// })
							that.filesCount++
						}
						// }

					})
					// this.fileList = [...dirs, ...files]
				}
			},
			/**
			 * 获取下一级目录文件
			 * @param {Object} e
			 * @param {Object} file
			 */
			getNextFile(file) {
				showLoading();
				if (!file.isFile) {
					hideLoading()
					let directory = new File(file.fullPath);
					let arr = directory.listFiles();
					this.currentPath=file.fullPath;
					let dirs=[];
					let files=[]
					arr && arr.forEach(item => {
						// console.log(item)
						//非隐藏文件执行操作
						// if (!plus.android.invoke(item, "isHidden")) {
					
						// 判断是文件还是文件夹  
						if (plus.android.invoke(item, "isDirectory")) {
							 dirs.push({
								name: plus.android.invoke(item, "getName"),
								fullPath: plus.android.invoke(item, "getPath"),
								isFile: false,
							})
							 
						} else {
							// 文件
							 files.push({
								name: plus.android.invoke(item, "getName"),
								fullPath: plus.android.invoke(item, "getPath"),
								isFile: true, // 是否是文件
							})
						}
						// }
					
					})
					this.fileList = [...dirs, ...files]
				} else {
					uni.showToast({
						title:"已经到最下层目录了"
					})
				}
			},/**
			 * 跳转到上一级目录
			 */
			toPrePath() {
				showLoading();
				if (this.currentPath&&this.path.getAbsolutePath() !== this.currentPath&&this.currentPath!="") {
					let index = this.currentPath.lastIndexOf('/')
					this.currentPath = this.currentPath.substr(0, index);
					this.getNextFile({
						fullPath: this.currentPath,
						isFile: false
					})
				}else{
					uni.showToast({
						title:"已经到根目录了"
					})
				}
				hideLoading()
			},
			 
		}
	}
</script>

<style>
</style>
