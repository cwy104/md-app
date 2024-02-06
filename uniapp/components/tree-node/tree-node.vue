<template>
	<view class="node-ul-parent">
		<view class="node-li" v-for="(item,index) in arrayList" :key="index">
			<view class="node-border"></view>
			<view class="node-Name" @click="handClick(item)">
				<view class="node-item" v-if="item.pid==0 && item.children.length == 0">
					<text class="txt" @d>{{item.name}}</text>
				</view>
				<view class="node-item" v-if="item.pid==0 && item.children.length > 0">
					<text class="txt">{{item.name}}</text>
					<view class="right-icon">
						<u-icon name="arrow-down" size="28" color="#000" v-if="item.isShow == true"></u-icon>
						<u-icon name="arrow-up" size="28" color="#000" v-if="item.isShow == false"></u-icon>
					</view>
				</view>
				<view class="node-item" v-if="item.pid!=0">
					<text class="txt1">{{item.name}}</text>
					<text class="txt2">{{item.date}}</text>
				</view>
			</view>
			<view class="node-ul">
				<tree-node :dataList="item.children" v-if="item.children.length > 0 && item.isShow"></tree-node>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'treeNode',
		componentName: 'treeNode',
		props: {
			dataList: {
				type: Array,
				default: [],
				lastTapDiffTime: null,
				lastTapTimeoutFunc: null
			}
		},
		mounted() {
			this.arrayList = this.dataList
		},
		data() {
			return {
				arrayList: []
			}
		},
		methods: {
			// 单击或双击
			handClick(e) {
				let _this = this;
				let curTime = new Date().getTime();
				let lastTime = _this.lastTapDiffTime;
				_this.lastTapDiffTime = curTime;
				//两次点击间隔小于300ms, 认为是双击
				let diff = curTime - lastTime;
				if (diff < 300) {
					console.log("双击")
					//_this.handleVideo('screen',index)自定义事件
					clearTimeout(_this.lastTapTimeoutFunc); // 成功触发双击事件时，取消单击事件的执行
				} else {
					// 单击事件延时300毫秒执行
					_this.lastTapTimeoutFunc = setTimeout(function() {
						console.log("单击")
						let isShow = !e.isShow
						_this.$set(e, 'isShow', isShow)
						//_this.handleVideo('playOrStop',index)自定义事件
					}, 300);
				}
			}
		}
	}
</script>

<style lang="scss">
	.node-ul-parent {
		margin: 0;
		padding: 0 0 0 20rpx;
	}

	.node-ul {
		margin: 0;
		padding: 0 0 0 10rpx;
	}

	.node-ul .node-li,
	.node-ul-parent .node-li {
		list-style: none;
		position: relative;
	}

	/* #ifdef MP */
	.node-ul:first-child>.node-li::before {
		border: 1rpx solid #007AFF;
	}

	/* #endif */

	/* #ifndef MP */
	.node-ul:first-child>.node-li::before {
		border: none;
	}

	/* #endif */

	.node-ul .node-li:before {
		position: absolute;
		content: '';
		top: 24rpx;
		left: -20rpx;
		width: 20rpx;
		height: 1rpx;
		// border-bottom: 1rpx solid #707070;
	}

	.node-ul .node-li:not(:last-child)::after {
		position: absolute;
		content: '';
		top: -18rpx;
		left: -20rpx;
		bottom: -50rpx;
		// border-left: 1rpx solid #707070;
	}

	.node-ul .node-li:first-child .node-border {
		position: relative;
	}

	.node-ul .node-li:first-child .node-border::after {
		position: absolute;
		content: '';
		height: 50rpx;
		top: -18rpx;
		left: -20rpx;
		bottom: 0rpx;
		// border-left: 1rpx solid #707070;
	}

	.node-Name {
		width: 560rpx;
		height: 60rpx;
		line-height: 60rpx;
		// padding-left: 25rpx;
		display: flex;
		// border: 1rpx solid #000;
		margin: 10rpx 0;
		border-radius: 15rpx;

		// .icon {

		// 	padding: 0 10rpx 0 0;
		// }

		.left-icon {
			width: 40rpx;
			height: 40rpx;
			margin-bottom: 10rpx;
			margin-right: 20rpx;
		}

		.node-item {
			display: flex;
			width: 100%;
		}

		.right-icon {
			width: 40rpx;
			height: 40rpx;
			margin-bottom: 10rpx;
			margin-right: 20rpx;
		}

		.left-icon1 {
			width: 40rpx;
			height: 40rpx;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
			margin-right: 20rpx;
		}

		.txt1 {
			line-height: 60rpx;
			font-size: 34rpx;
			color: #222;
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			/* 这里是超出几行省略 */
			overflow: hidden;
		}

		.txt2 {
			font-size: 24rpx;
			color: #999;
			position: absolute;
			right: 30upx;
		}

	}

	.txt {
		line-height: 50rpx;
		font-size: 34rpx;
		color: #222;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/* 这里是超出几行省略 */
		overflow: hidden;
		width: 87%;
	}
</style>