import { request, orientationRequest } from '../utils/request.js'
import { cloudRequest } from '../utils/config'

// 用户通过手机号登录 api/Login/getWxMobile
export function getWxMobile(data) {
	return request(`api/Login/getWxMobile`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 用户保存头像和昵称 api/Login/saveUserInfo
export function saveUserInfo(data) {
	return request(`api/Login/saveUserInfo`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取首页轮播图 api/Ad/getAdByTag
export function getAdByTag(data) {
	return request(`api/Ad/getAdByTag`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取首页热门活动 api/Activity/getHotActivity
export function getHotActivity(data) {
	return request(`api/Activity/getHotActivity`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取活动分类 api/Group/getGroups
export function getGroups(data) {
	return request(`api/Group/getGroups`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取活动列表 api/Activity/getActivityBySearch
export function getActivityBySearch(data) {
	return request(`api/Activity/getActivityBySearch`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取活动详情 api/Activity/getActivityInfo
export function getActivityInfo(data) {
	return request(`api/Activity/getActivityInfo`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取用户地址列表 api/Address/getAddressList
export function getAddressList(data) {
	return request(`api/Address/getAddressList`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 保存用户地址 api/Address/saveAddress
export function saveAddress(data) {
	return request(`api/Address/saveAddress`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 生成订单信息 api/Order/addOrder
export function addOrder(data) {
	return request(`api/Order/addOrder`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}

// 获取订单列表 api/Order/getOrderBySearch
export function getOrderBySearch(data) {
	return request(`api/Order/getOrderBySearch`, 'post', data, {
		// 'content-type': 'application/json'
	}).then(res => res)
}