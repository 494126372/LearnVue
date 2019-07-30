import axios from 'axios'
import qs from 'qs'
import storage from '@/utils/storage'
import { Message } from 'element-ui'

axios.defaults.timeout = 15000
axios.defaults.baseURL = process.env.BASE_API // 'http://118.213.240.4:8003/'
axios.defaults.paramsSerializer = params =>
  qs.stringify(params, { skipNulls: true, arrayFormat: 'repeat' }) // 参数序列化

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.data = qs.stringify(config.data, { arrayFormat: 'repeat' })
    config.headers = {
      'Content-Type': 'application/json; charset=UTF-8'
    }

    let token = storage.localGet('token')
    if (token) {
      token = 'Bearer ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中
      config.headers['Authorization'] = token
    }
    let lastTime=storage.localGet('timeOut');
    if(lastTime&&new Date().getTime()-lastTime>=30*60*1000)
    {
        storage.localRemove('user')
        storage.localRemove('timeOut')
        storage.localRemove('token')
        storage.localRemove('refresh_token')
        storage.localRemove('loginTime');
     
      var that=this;
      Message({
        message: '操作超时,请重新登录!',
        type: 'error',
        center: true,
        duration: 3 * 1000,
        onClose:function () {
          window.location.reload()
        }
      });
    }else
    {
      //大于25分钟 刷新token
      let loginTime=storage.localGet('loginTime');
      if(loginTime&&(new Date().getTime()-loginTime>25*60*1000))
      {
        storage.localSet("loginTime", new Date().getTime());
        axios.post('/token', qs.stringify({refresh_token: storage.localGet('refresh_token'),grant_type: 'refresh_token'}))
      }

    storage.localSet('timeOut', new Date().getTime()) 
    }

    return config
  },
  error => {
    return Promise.reject(error)
  } 
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // if (response.data.errCode === 2) {
    //   this.$router.push({
    //     path: '/login',
    //     querry: { redirect: this.$router.currentRoute.fullPath } // 从哪个页面跳转
    //   })
    // }
    // if (response.data.access_token==null) {
    //   storage.localRemove('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
    //   this.$router.replace({
    //     path: '/login' // 到登录页重新获取token
    //   })
    // }
    if (response.data.access_token) {
      // 判断token是否存在，如果存在说明需要更新token
      storage.localSet('token', response.data.access_token) // 覆盖原来的token(默认一天刷新一次)
      storage.localSet('refresh_token', response.data.refresh_token)
    }
    return response
  },
  error => {
    if(error.message === 'Network Error')
    {
      Message({
        message: "未连接服务！",
        type: 'error',
        duration: 3 * 1000
      });
    }
    else
    {
    switch (error.response.status) {
      case 400:
        error.message = error.response.data.error_description
        break
        case 401:
        error.message = "登陆超时！";

        storage.localRemove('user')
        storage.localRemove('timeOut')
        storage.localRemove('token')
        storage.localRemove('refresh_token')
        storage.localRemove('loginTime');
        window.location.reload()
        
        break
      default:
        error.message = error.response.data.Message
        break
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    }
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装deltete方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function deltete(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .deltete(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}



/**
 * 封装postForParams方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function postForParams(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url,data )
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
