import * as http from '@/utils/http'
import qs from 'qs'
// 登录
export const login = ({ userName, passWord }) => { return http.post('/token', qs.stringify({ UserName: userName, PassWord: passWord, grant_type: 'password' })) };


// //获取权限表
export const getUserRightList = params => { return http.get(`/Api/UserRight/GetUserRightList`, params).then(res => res); };
// //获取角色列表
// export const getRoleList = params => { return http.get(`/Api/UserRight/GetRoleList`, params).then(res => res); };
// //查询所有权限
// export const getRightList = params => { return http.get(`/Api/UserRight/GetRightList`, params).then(res => res); };
// //获取用户组
// export const getRoleRightList = params => { return http.get(`/Api/UserRight/GetRoleRightList`, params).then(res => res); };
// //插入角色
// export const insertRole = params => { return http.post(`/Api/UserRight/InsertRole`, params).then(res => res); };
// //修改角色
// export const updateRole = params => { return http.post(`/Api/UserRight/UpdateRole`, params).then(res => res); };
// //删除角色
// export const deleteRole = params => { return http.get(`/Api/UserRight/DeleteRole`, params).then(res => res); };
// //添加角色权限
// export const insertRoleRights = params => { return http.post(`/Api/UserRight/InsertRoleRights`, params).then(res => res); };
// //查询用户列表
// export const getUserList = params => { return http.get(`/Api/User/GetUserList`, params).then(res => res); };
// //修改用户
// export const updateUser = params => { return http.post(`/Api/User/UpdateUser`, params).then(res => res); };