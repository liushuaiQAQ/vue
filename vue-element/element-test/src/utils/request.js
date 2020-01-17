import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import md5 from 'js-md5';
import qs from 'qs';

// create an axios instance
const ajaxUrl = process.env.NODE_ENV === 'development'
	? 'http://mjb.cn/' : `${document.location.origin}/`;   
axios.defaults.timeout = 60000;   
axios.defaults.baseURL = ajaxUrl;    //设置请求域名 

// request interceptor
axios.interceptors.request.use(
	(config) => {
		// do something before request is sent

		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded' //设置跨域头部
		};

		let time = parseInt(new Date().getTime() / 1000);
		let secret = 'hbFLnwg5BysAvQ4esITxlMFCn4YWBbJs';
		let appId = 'meiJieBao';
		let sign = md5(`appId=${appId}&time=${time}${secret}`);
		let access_token = store.getters.token;

		if (config.url.indexOf('?') > -1) {
			config.url = `${config.url}&time=${time}&sign=${sign}&appId=${appId}`;
		} else {
			config.url = `${config.url}?time=${time}&sign=${sign}&appId=${appId}`;
		}
		if (access_token) {
			config.url = `${config.url}&access-token=${access_token}`;
		}
		return config;
	},
	(error) => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
axios.interceptors.response.use(
	/**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

	/**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
	(response) => {
		const res = response.data;

		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 200) {
			Message({
				message: res.message || 'Error',
				type: 'error',
				duration: 5 * 1000
			});

			if (res.code == 401) {
				// 登录过期
				MessageBox.confirm(
					'You have been logged out, you can cancel to stay on this page, or log in again',
					'Confirm logout',
					{
						confirmButtonText: 'Re-Login',
						cancelButtonText: 'Cancel',
						type: 'warning'
					}
				).then(() => {
					store.dispatch('user/resetToken').then(() => {
						location.reload();
					});
				});
			}
			return Promise.reject(new Error(res.message || 'Error'));
		} else {
			return res;
		}
	},
	(error) => {
		console.log(error)
		console.log('err' + error); // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		});
		return Promise.reject(error);
	}
);

/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
		.then(response => {
			resolve(response.data);
		})
		.catch(err => {
			reject(err)
		})
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * delete 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {data:qs.stringify(data)})
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}
