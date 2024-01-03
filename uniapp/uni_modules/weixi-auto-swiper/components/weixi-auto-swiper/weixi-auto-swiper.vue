<template>
	<swiper
		style="height:320rpx;"
		:indicator-dots="indicatorDots"
		:indicator-color="indicatorColor"
		:indicator-active-color="indicatorActiveColor"
		:active-class="activeClass"
		:changing-class="changingClass"
		:autoplay="autoplay"
		:current="current"
		:interval="interval"
		:duration="duration"
		:circular="circular"
		:vertical="vertical"
		:previous-margin="previousMargin"
		:next-margin="nextMargin"
		:acceleration="acceleration"
		:disable-programmatic-animation="disableProgrammaticAnimation"
		:display-multiple-items="displayMultipleItems"
		:skip-hidden-item-layout="skipHiddenItemLayout"
		:disable-touch="disableTouch"
		:touchable="touchable"
		:easing-function="easingFunction"
		@change="onChange"
		@transition="onTransition"
		@animationfinish="onAnimationfinish"
	>
		<swiper-item v-for="(item, index) of items" :key="index" :id="'swiper-item-' + index">
			<image :src="imageKey ? item[imageKey] : item" :id="'img' + index" style="display: block;height: 320rpx;width: 100%;border-radius: 16rpx 16rpx 16rpx 16rpx;" mode="widthFix" @load="imageLoad(index)"></image>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		props: {
			items: {
				type: Array,
				default() {
					return []
				}
			},
			imageKey: {
				type: String,
				default: ''
			},
			indicatorDots: { type: Boolean, default: false },
			indicatorColor: { type: String, default: 'rgba(0,0,0,.3)' },
			indicatorActiveColor: { type: String, default: '#000000' },
			activeClass: { type: String, default: 'swiper-item' },
			changingClass: { type: String, default: 'acceleration' },
			autoplay: { type: Boolean, default: false },
			current: { type: Number, default: 0 },
			interval: { type: Number, default:5000 },
			duration: { type: Number, default:500 },
			circular: { type: Boolean, default:false },
			vertical: { type: Boolean, default:false },
			previousMargin: { type: String, default: '0px' },
			nextMargin: { type: String, default:'0px' },
			acceleration: { type: Boolean, default:false },
			disableProgrammaticAnimation: { type: Boolean, default:false },
			displayMultipleItems: { type: Number, default: 1 },
			skipHiddenItemLayout: { type: Boolean, default: false },
			disableTouch: { type: Boolean, default: false },
			touchable: { type: Boolean, default: true },
			easingFunction: { type: String, default: 'default' }
		},
		data() {
			return {
				_current: 0,
				height: 0,
				heights: [0]
			}
		},
		computed: {
			style() {
				return {
					height: this.heights[this._current],
					background: "red"
				}
			}
		},
		methods: {
			onChange(event) {
				this._current = event.current
				this.$emit("change", event)
				this.height = this.heights[this._current]
			},
			onTransition(event) {
				this.$emit("transition", event)
			},
			onAnimationfinish(event) {
				this.$emit('animationfinish', event)
			},
			imageLoad(index) {
				const query = uni.createSelectorQuery().in(this)
				query.select('#img' + index).boundingClientRect(data => {
					this.heights[index] = data.height  + 'px'
					if (index === 0) [
						this.height = this.heights[index]
					]
				}).exec()
			}
		}
	}
</script>
<style lang="scss">
</style>
