<template>
	<!-- remove list-cell layer fix android 4.x overflow limit error: 28 layers! -->
	<!-- <view class="list-cell view" @click="click"></view> -->
	<view class="media-item view" hover-class="media-item-hover" v-if="options.title" @click="click">
		<!-- <view class="view" :style="options.article_type === 2 ? 'flex-direction: row';" :class="{'media-image-right': options.article_type === 2, 'media-image-left': options.article_type === 1}"> -->
		<!-- TODO 在支付宝小程序下 需要用 style 覆盖标签的默认样式 -->
		<view style="flexDirection: row" class="view media-image-right">
			<text class="media-title media-title2">{{options.title}}</text>
			<view v-if="options.cover_image" class="image-section flex-row image-section-right"
				:style="{flexDirection: 'row' }">
				<image class="image-list1 image-list2" :src="options.cover_image" @error="imageError"></image>
			</view>
		</view>
		<view class="media-foot flex-row" style="flex-direction: row;">
			<view class="media-info flex-row" style="flex-direction: row;">
				<view class="info-text" v-if="options.view_count"><text
						class="icon-icon">&#xe6e5;</text><text class="text">{{options.view_count}}</text></view>
				<view class="info-text" v-if="options.detail_text"><text
						class="icon-icon">&#xe842;</text><text  class="text">{{options.detail_text}}</text></view>
				<view class="info-text" v-if="options.digg_count"><text
						class="icon-icon">&#xe71b;</text><text  class="text">{{options.digg_count}}</text></view>
				<view class="info-text" v-if="options.comment_count"><text
						class="icon-icon">&#xe70c;</text><text  class="text">{{options.comment_count}}</text></view>
				<view class="info-text" v-if="options.answer_count"><text
						class="icon-icon">&#xe61b;</text><text  class="text">{{options.answer_count}}</text></view>
				<view class="info-text"><text  class="text">{{options.datetime}}</text></view>
			</view>
		</view>
		<view class="media-item-line" style="position: absolute;"></view>
	</view>
</template>

<script>
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		created() {
			// #ifdef APP-PLUS
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('http://at.alicdn.com/t/font_2809767_pffxmckbg4b.ttf?t=1631838708484')"
			});
			// #endif
		},
		methods: {
			click() {
				this.$emit('click');
			},
			close(e) {
				this.$emit('close');
			},
			imageError(e) {
				this.options.cover_image = null
			}
		}
	}
</script>

<style lang="scss">

	.icon-icon {
		font-family: iconfont;
	}

	.view {
		flex-direction: column;
	}

	.flex-row {
		flex-direction: row;
	}

	.flex-col {
		flex-direction: column;
	}

	.list-cell {
		width: 750rpx;
		padding: 0 30rpx;
	}

	.uni-list-cell-hover {
		background-color: #eeeeee;
	}

	.media-item {
		position: relative;
		flex: 1;
		flex-direction: column;
		/* border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #ebebeb; */
		padding: 20rpx 30rpx 21rpx 30rpx;
	}

	.media-item-hover {
		background-color: #eee;
	}

	.media-item-line {
		position: absolute;
		left: 30rpx;
		right: 30rpx;
		bottom: 0;
		height: 1rpx;
		background-color: #ebebeb;
	}

	.media-image-right {
		flex-direction: row;
	}

	.media-image-left {
		flex-direction: row-reverse;
	}

	.media-title {
		flex: 1;
	}

	.media-title {
		lines: 3;
		text-overflow: ellipsis;
		font-size: 30rpx;
		color: #555555;
	}

	.media-title2 {
		flex: 1;
		margin-top: 6rpx;
		line-height: 40rpx;
	}

	.image-section {
		margin-top: 20rpx;
		flex-direction: row;
		justify-content: space-between;
	}

	.image-section-right {
		margin-top: 0rpx;
		margin-left: 10rpx;
		width: 225rpx;
		height: 146rpx;
	}

	.image-section-left {
		margin-top: 0rpx;
		margin-right: 10rpx;
		width: 225rpx;
		height: 146rpx;
	}

	.image-list1 {
		width: 690rpx;
		height: 481rpx;
	}

	.image-list2 {
		width: 225rpx;
		height: 146rpx;
	}

	.image-list3 {
		width: 225rpx;
		/* #ifdef H5 */
		width: 30%;
		/* #endif */
		height: 146rpx;
		/* #ifdef H5 */
		height: 146px;
		/* #endif */
	}

	.media-info {
		flex-direction: row;
		align-items: center;
	}

	.media-foot .media-info .info-text {
		margin-right: 20rpx;
		color: #999999;
		font-size: 24rpx;	
		flex-direction: row;
		.icon-icon {
			padding-right: 10rpx;
			font-size: 34rpx;
			/* #ifdef APP-PLUS */
			font-size: 26rpx;
			/* #endif */
		}
	}
	.media-foot .media-info .text{
		/* #ifdef APP-PLUS */
		font-size:  24rpx;
		/* #endif */
	}

	.media-foot {
		margin-top: 25rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.max-close-view {
		position: relative;
		align-items: center;
		flex-direction: row;
		width: 40rpx;
		height: 30rpx;
		line-height: 30rpx;
		border-width: 1rpx;
		border-style: solid;
		border-color: #aaaaaa;
		border-radius: 4px;
		justify-content: center;
		text-align: center;
	}

	.close-l {
		position: absolute;
		width: 18rpx;
		height: 1rpx;
		background-color: #aaaaaa;
	}

	.close-h {
		transform: rotate(45deg);
	}

	.close-v {
		transform: rotate(-45deg);
	}
</style>
