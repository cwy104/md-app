import { requestURL, SECRETKEY } from './config'
import md5Libs from "./md5";

const md5 = md5Libs.md5;

const baseAppoint = SECRETKEY;
let api_token = null;

function getType(data, method, header={}, url='') { // 获取请求方式
	let type = {}
	api_token = md5(
		`${url}${baseAppoint}`
	);
	let token = uni.getStorageSync('token')
	if (method == 'post') {
		method = 'post'
		type = {
			method,
			data: {
				...data,
				api_token,
				client_id: 1,
				token
			},
			header: {
				'content-type': 'application/json',
				...header
			}
		}
	} else {
		// method = 'get'
		type = {
			method,
			data: {
				...data,
				api_token,
				client_id: 1,
				token
			},
			header: {
				'content-type': 'application/json',
				...header
			}
		}
	}
	return type
}
function request(url, method, data, header) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: requestURL + url,
			...getType(data, method, header, url),
			success: res => {
				// console.log('我请求成功了1',res.data);
				//  if(res.data.msg=="token不能为空"){
				// 	console.log('我请求成功了2');
				// 	uni.showToast({
				// 		title: '您还未登录，请重新登录！',
				// 		icon: 'none',
				// 		duration: 2000
				// 	})
				// 	uni.clearStorage();
				// }else
				 if(res.data.msg=="token格式错误"){
					console.log('我请求成功了2');
					uni.showToast({
						title: '您登录已超时，请重新登录！',
						icon: 'none',
						duration: 2000
					})
					uni.clearStorage();
					setTimeout(() => {
									// 3秒后自动关闭
									uni.navigateTo({
										url: "/pagesA/pages/login/login"
									})
									//里面放需要执行的内容
								}, 500)
					
				}else if(res.statusCode == 200) {
					
					resolve(res.data)
				}else{
					if(res.statusCode == 502) {
						uni.showModal({
							title: '',
							content: '网络超时,请稍后打开!',
							showCancel:false
						})
					} else {
						uni.showModal({
							title: '',
							content: res.errMsg,
							showCancel:false
						})
					}
				}
			},
			fail: err => {
				uni.hideLoading()
				console.log('err')
				reject(err)
			},
			complete:function(){
				uni.hideLoading()
			}
		})
	}).catch(err => {
		console.log(err)
		uni.hideLoading()
	})
}







// 定向请求
function orientationRequest(domain, url, method, data, header = {'Content-Type': 'application/json'}) {
	let cookie = wx.getStorageSync('ecmToken');
	if (cookie) {
	     header.Cookie = cookie;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: domain + url,
			...getType(data, method),
			header,
			success: res => {
				
				if (res && res.header && res.header['Set-Cookie']) {
					wx.setStorageSync('ecmToken', res.header['Set-Cookie']);   //保存Cookie到Storage
				}
				if(res.statusCode == 200) {
					resolve(res.data)
					
				} else {
					// if(res.statusCode == 500) {
					// 	_showModal('温馨提示', '服务器端出错, 请稍后打开!')
					// } else if(res.statusCode == 502){
					// 	_showModal('温馨提示', '网络超时,请稍后打开!')
					// } else if(res.statusCode == 404){
					// 	_showModal('温馨提示', '请求错误, 未找到该资源!')
					// } else {
					// 	_showModal('温馨提示', res.errMsg)
					// }
				}
			},
			fail: err => {
				// uni.hideLoading()
				// _showModal('温馨提示', '网络超时,请稍后打开!')
				// reject(err)
			},
			complete:function(){
				// uni.hideLoading()
			}
		})
	}).catch(err => {
		// uni.hideLoading()
		// reject(err)
	})
}

export {
	request,
	orientationRequest
} 