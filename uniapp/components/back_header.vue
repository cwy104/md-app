<template>
	<view>
		<!-- <view class="height20"></view> -->
		<!-- <uni-nav-bar left-icon="left" :leftText="page_name" :statusBar="true"   @clickLeft="onClickBack" /> --><!-- //文字在左侧 -->
		<uni-nav-bar left-icon="left" :border="false"  :statusBar="true"  :title="page_name" @clickLeft="onClickBack" /><!-- //文字在中间 -->
		<!-- <u-navbar :left-text="page_name" @leftClick="onClickBack">
		</u-navbar> -->
		
		<!-- 1232 -->
	</view>
</template>

<script>
	export default {
		props: {
			page_name: String
		},
		name: "back_header",
		data() {
			return {

			};
		},

		methods: {
			onClickBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.height20 {
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
	}
</style>
