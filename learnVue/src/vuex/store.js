import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex({

    // 定义状态
    state: {
        author: "baidu"
    }
})

//1 .构建核心仓库 store.js
export default store