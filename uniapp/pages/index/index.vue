<template>
	<view>
		<view class="header">
			<view class="header-list">
				<u-icon name="list" size="28" color="#fff" @click="openMenu"></u-icon>
			</view>
			<view class="header-title">
				<h1>{{title}}</h1>
			</view>
			<view class="header-search">
				<u-icon name="search" size="28" color="#fff"></u-icon>
			</view>
			<view class="header-order">
				<u-icon name="more-dot-fill" size="28" color="#fff"></u-icon>
			</view>
		</view>
		<view>
			<u-list @scrolltolower="scrolltolower">
				<u-list-item v-for="(item, index) in articleList" :key="index">
					<u-cell :title="item.name">
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		<u-popup :show="menuShow" @close="closeMenu" @open="loadMenu" mode="left">
			<view class="left">
				<view class="left-header">
					<u-icon name="file-text-fill" size="30"></u-icon>
					<h1>全部笔记</h1>
				</view>
				<u-line></u-line>
				<view class="left-content">
					<view class="left-content-header">
						<u-icon name="grid-fill" size="30"></u-icon>
						<h1>笔记本</h1>
					</view>
					<view class="left-content-center">
						<tree-node :dataList="menuList"></tree-node>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		imgURL
	} from "@/common/utils/config.js" //域名的
	// import {
	// 	getAdByTag,
	// 	getHotActivity
	// } from "@/common/request/index.js" //接口请求的
	export default {
		data() {
			return {
				title: '子目录1',
				menuShow: false,
				menuList: [{
						pid: 0,
						id: 1,
						name: '目录1',
						isShow: true,
						children: [{
								pid: 1,
								id: 11,
								name: '子目录11',
								children: []
							},
							{
								pid: 1,
								id: 12,
								name: '子目录12',
								children: []
							},
							{
								pid: 1,
								id: 13,
								name: '子目录13',
								children: []
							},
						]
					}, {
						pid: 0,
						id: 2,
						name: '目录2',
						isShow: true,
						children: []
					},
					{
						pid: 0,
						id: 3,
						name: '目录3',
						isShow: true,
						children: [{
								pid: 3,
								id: 31,
								name: '子目录31',
								children: []
							},
							{
								pid: 3,
								id: 32,
								name: '子目录32',
								children: []
							},
							{
								pid: 3,
								id: 33,
								name: '子目录33',
								children: []
							},
						]
					}
				],
				articleList: [{
						id: 1,
						name: '笔记1',
					}, {
						id: 2,
						name: '笔记2',
					},
					{
						id: 3,
						name: '笔记3',
					}
				]
			}
		},
		mounted() {},
		onLoad() {

		},
		onPullDownRefresh() {
			this.closeMenu()
		},
		methods: {
			openMenu() {
				this.menuShow = true
			},
			closeMenu() {
				this.menuShow = false
			},
			loadMenu() {

			},
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		line-height: 100rpx;
		height: 90rpx;
		background-color: #484848;

		&-list {
			line-height: 100rpx;
			margin: 20rpx;
		}

		&-title {
			line-height: 50rpx;
			margin: 20rpx;
			width: 60%;

			h1 {
				font-size: 40rpx;
				font-weight: 700;
				color: #fff;
			}
		}

		&-search {
			line-height: 100rpx;
			margin: 20rpx;
		}

		&-order {
			line-height: 100rpx;
			margin: 20rpx;
		}
	}

	.left {
		width: 600rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-start;
		margin: 20rpx;

		&-header {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			line-height: 80rpx;
			height: 80rpx;

			h1 {
				font-size: 34rpx;
			}
		}

		&-content {

			&-header {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				line-height: 80rpx;
				height: 80rpx;

				h1 {
					font-size: 34rpx;
				}
			}

			&-center {
				display: flex;
				flex-direction: column;
			}

		}
	}
</style>