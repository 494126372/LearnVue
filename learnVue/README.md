# app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 
如果要使用axios直接进行跨域访问是不可以的，这是就需要配置代理了，为什么要配置代理呢？
原因就是因为客户端请求服务端的数据是存在跨域问题的，而服务器和服务器之间可以相互请求数据，是没有跨域的概念（如果服务器没有设置禁止跨域的权限问题），也就是说，我们可以配置一个代理的服务器可以请求另一个服务器中的数据，然后把请求出来的数据返回到我们的代理服务器中，代理服务器再返回数据给我们的客户端，这样我们就可以实现跨域访问数据啦

