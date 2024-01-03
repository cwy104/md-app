import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
// 方法1（直接写）
const store = new Vuex.Store({
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		hasLogin: false, //用户是否登录
		userInfo: {},//用户数据
		token:'',
		user:'',
	},
	getters: {
		getToken(state){
			return state
		}
	},
	mutations: {
		// 登录
		login(state, user) {
			//登录状态为已登录
			state.hasLogin = true
			state.userInfo = user
			//储存用户数据到本地
			uni.setStorage({
				key: 'userInfo',
				data: user,
			});
			console.log('登陆成功')
			console.log(state.hasLogin, state.userInfo)
		},

		// 退出登录
		logout(state, user) {
			//登录状态为未登录
			state.hasLogin = false
			state.userInfo = {}
			//删除本地储存
			uni.removeSavedFile({
				key: 'userInfo',
			})
			console.log('退出登录')
			console.log(state.hasLogin, state.userInfo)
		}
	},
	actions: {

	}
})
export default store
