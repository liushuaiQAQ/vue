import { get, post, del } from '@/utils/request';

//首页登录
export function userLogin(data) { return post('api/v1/site/login', data); }

//退出登录
export function userLogout(data) { return post('api/v1/site/logout', data); }

//加载菜单列表
export function getCurrent(data) { return get('/api/v1/sys/menu/get-current-menu', data); }