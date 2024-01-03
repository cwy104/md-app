const appid = ''
let imgURL = ''
let requestURL = ''
let cloudRequest = ''
const WX_APPID = ''
const ALI_APPID = ''
const SECRETKEY = 'mdmaker-cwy104';

// if (process.env.NODE_ENV === 'development') {
// 	// 开发环境
// 	// cloudRequest = 'https://sndcard.com'
// 	requestURL = 'https://beiji.gayscm.com/'
// 	imgURL = 'https://beiji.gayscm.com/'
// } else {
// 	// 生产环境
// 	requestURL = 'https://beiji.gayscm.com/'
// 	imgURL = 'https://beiji.gayscm.com/'
// }
requestURL = 'http://md.cwy104.cn/'
imgURL = 'http://md.cwy104.cn/'

export {
	appid,
	imgURL,
	cloudRequest,
	requestURL,
	WX_APPID,
	ALI_APPID,
	SECRETKEY
}
