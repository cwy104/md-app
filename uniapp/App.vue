<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		methods: {
			...mapMutations(['login'])
		},
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			// this.$store.state.user= JSON.parse(localStorage.getItem('user'))
			// const token = uni.getStorageSync('userInfo'); //同步获取本地数据
			// //判断本地缓存是否存在数据
			// if (userInfo !== "") {
			// 	//传到vuex里面储存起来,并改变登录状态
			// 	this.login(userInfo)
			// }
		},
		onShow: function() {
			console.log('App Show')
			console.log('看看版本', uni.$u.config.v);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// @import '@/uni_modules/uni-scss/index.scss';
	// /* #ifndef APP-NVUE */
	// @import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #efefef;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>