// 创建自定义路由 配置 Router

// 1， 安装  cnpm i vue-router -D
// 安装完成后，在 src 文件夹下，创建一个 routers.js 文件，和 main.js 平级

// 然后在 router.js 中引入所需的组件，创建 routers 对象
// 在创建的 routers 对象中， path 配置了路由的路径，component 配置了映射的组件

// 需要注意的是，export default routers 必须写在文件底部，而且后面还需要接一空行，否则无法通过 ESlint 语法验证
import Home from './components/home'

const routers = [{
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
]

export default routers