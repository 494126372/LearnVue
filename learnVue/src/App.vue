<template>
  <div id="app">
    <img src="./assets/logo.png">
    
     <h2>根组件 是App.Vue </h2>
  <el-container>
      <el-header></el-header>
导航栏主要就是配置好路由，配合Element组件，el-menu标签中直接设置router，el-submenu 标签和el-menu-item 标签中设置好唯一标识index，index和path匹配，类似于我的pathname

就不用再使用router-link标签了，页面跳转渲染组件用router-view标签
      <el-container>
        <!-- <el-aside style="width: auto;">
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="this.$router.path"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleClose"
            router
            :collapse="isCollapse"
          >
            <template v-for="(item, index) in items">
              <el-submenu v-if="item.message" :index="item.pathname" v-bind:key="index">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  <span slot="title">{{ item.name + "标题1"}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="itemChild.pathname"
                    v-for="itemChild in item.message"
                    v-bind:key="itemChild.index"
                  >{{ itemChild.select }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item v-else :index="item.pathname" v-bind:key="index">
                <i class="el-icon-message"></i>
                <span slot="title" style="color: #777;">{{ item.name+ "标题2" }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside> -->
        <el-row>
        <el-col :span="12">
    <h5>自定义颜色</h5>
 <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
  </el-col>
</el-row>

     
        
        
      </el-container>
    </el-container>
      <router-view></router-view>
  </div>
  
</template>
<!-- 引入样式 -->

<!-- 引入组件库 -->

<script>
export default {
  name: 'App',
  data() {
    return {
      isindex: "true"
    };
  },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
