import {timestampToTime} from "./utils.js"


const JUEJINURL = "https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7000937956589372963"
const JUEJINDETAILURL = "https://api.juejin.cn/content_api/v1/article/detail?aid=2608&uuid=7000937956589372963"
const ZHIHUURL =
	"https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true"
let JUEJINCURSOR="0"	
export async function listJueJinData(page) {
	if(page==1){
		JUEJINCURSOR="0"	
	}
	let body = {
		"id_type": 2,
		"client_type": 2608,
		"sort_type": 200,
		"cursor":JUEJINCURSOR,
		"limit": 20
	}
	let [error, res] = await uni.request({
		url: JUEJINURL,
		data: body,
		method: 'POST',
		header: {
			"X-Agent": "Juejin/Web",
			"content-type": "application/json",
		}
	})
	let newsList = [];
	if (res.statusCode == 200) {
		let data = res.data;
		let list = data.data || []
		JUEJINCURSOR=data["cursor"]
		list.forEach(e => {
			if (e.item_type == 2) {
				let info=e.item_info
				let obj = {
					"id":info.article_id,
					"datetime": timestampToTime(info.article_info.ctime,'Y-M-D h:m'),
					"tags": [],
					"title": info.article_info.title,
					"author":info.author_user_info.user_name,
					"comment_count": info.article_info.comment_count,
					"view_count":info.article_info.view_count,
					"digg_count":info.article_info.digg_count,
					"brief_content": info.article_info.brief_content,
					"cover_image": info.article_info.cover_image,
					"answer_count": null,
					"detail_text": null,
				}
				if(info.tags){
					info.tags.forEach(f=>{
						obj["tags"].push(f.tag_name);
					})
				}
				newsList.push(obj)
			}
		})
		
	}
	return  newsList ;
}

export async function detailJueJinData(id){
	let body = {
		"article_id": id,		
	}
	let [error, res] = await uni.request({
		url: JUEJINDETAILURL,
		data: body,
		method: 'POST',
		header: {
			"X-Agent": "Juejin/Web",
			"content-type": "application/json",
		}
	})
	let newsDetail = {};
	if (res.statusCode == 200) {
		let data = res.data.data;
		newsDetail={
			"id":data.article_id,
			"title":data.article_info.title,
			"mark_content":data.article_info.mark_content,
			"createTime":timestampToTime(data.article_info.ctime,'Y-M-D h:m'),
			"user":data.author_user_info.user_name
		}
	}
	return newsDetail
}

export async function listZhiHuData(page) {
	if(page>1){
		return []
	}
	let [error, res] = await uni.request({
		url: ZHIHUURL,
		method: 'GET',
		header: {
			'Accept': '*/*',
		}
	})
	let newsList = [];
	if (res.statusCode == 200) {
		let data = res.data;
		let list = data.data || []
		
		list.forEach(e => {
				let info=e.target
				let obj = {
					"id":info.id,
					"datetime": timestampToTime(info.created,'Y-M-D h:m'),
					"tags": [],
					"title": info.title,
					"author":null,
					"comment_count": info.comment_count,
					"view_count":null,
					"digg_count":null,
					"brief_content": e["excerpt"],
					"answer_count": info.answer_count,
					"detail_text": info.detail_text,
					"cover_image": e.children[0].thumbnail
				}
				 
				newsList.push(obj)
		})
		
	}
	console.log(res);
	console.log(error);
	return  newsList ;
}
