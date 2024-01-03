<template>
	<view>
		<view class="tob">
			<view class="box">
				<view class="box1">
					<image src="/static/gbdx.png" mode=""></image>
				</view>
				<view class="box2">
					<view class="box2_1">
						<image src="/static/Chat.png" mode=""></image>
						<h5>约定</h5>
					</view>
					<view class="box2_1">
						<image src="/static/Chat.png" mode=""></image>
						<h5>12344444444</h5>
					</view>
					<view class="box2_1">
						<image src="/static/Chat.png" mode=""></image>
						<h5>会员卡号：123444</h5>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tob_w",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.tob{
		width: 100%;
		height: 200rpx;
		background-color: rgb(0,136,255);
		display: flex;
		.box{
			margin: auto;
			display: flex;
			    flex-direction: row;
			    align-items: center;
			.box1{
			image{
				width: 140rpx;
				height: 140rpx;
				border-radius: 30rpx;
			}
		}
		.box2{
			display: flex;
			flex-direction: column;
			    align-items: flex-start;
				margin-left: 10rpx;
				
				.box2_1{
					margin-top: 10rpx;
					    display: flex;
					    flex-direction: row;
					image{
						width: 40rpx;
						height:40rpx;
						border-radius: 30rpx;
					}
					h5{
						margin-left: 5rpx;
					}
				}
			
		}
		}
		
		
	}
</style>