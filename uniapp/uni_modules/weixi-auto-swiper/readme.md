# weixi-auto-swiper
## 使用方式1
```html
<template>
	<view class="app-page">
		<weixi-auto-swiper :items="imgs" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [ 'http://abc.com/1.png', 'http://abc.com/2.png']
			};
		},
	}
</script>
```

## 使用方式2
```html
<template>
	<view class="app-page">
		<weixi-auto-swiper :items="imgs" image-key="file" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [
					{file: 'http://abc.com/1.png'},
					{file: 'http://abc.com/2.png'},
				]
			};
		},
	}
</script>
```

## 属性说明
|属性|类型|说明|
|---|---|---|
|items|array|图片数据|
|image-key|string|图片字段，当items元素为图片时，本字段不要设置|

## 其他属性和swiper原始组件一致
文档链接 https://uniapp.dcloud.io/component/swiper.html
