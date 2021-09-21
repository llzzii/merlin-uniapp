let needLoadingRequestCount=0;
let timer;

export function showLoading(title='加载中...',mask=false){
	console.log(needLoadingRequestCount,'show')
	if(needLoadingRequestCount==0){
		uni.showLoading({
			title:title,
			mask:mask
		})
		timer=setTimeout(()=>{
			if(needLoadingRequestCount>0){
				uni.hideLoading()
			}
		},10000)
	}
	needLoadingRequestCount++
}

export function hideLoading(){
	console.log(needLoadingRequestCount,'hide')
	if(needLoadingRequestCount<=0){
		return
	}
	needLoadingRequestCount--
	if(needLoadingRequestCount==0){
		timer&&clearTimeout(timer)
		uni.hideLoading()
	}
}