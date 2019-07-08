<template>
  <div class="index">
    <p>欢迎来到人员管理系统  views/index/index index.Vue首页组件 中引入了子组件 footer组件导航栏 </p>
     <b>router-view 在根组件中定义的就是路由配置默认的组件内容</b>
   <footer-nav :class="{'isindex':isindex}"></footer-nav>
    <span>
      可以看到footer.vue使用了router-link标签，该标签主要实现跳转链接功能，
      属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由）
      在 style标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。
    


    </span>
    <ul>
        <li> 使用组件步骤：
         （1）引入组件     import FooterNav from '../../components/footer.vue'</li>
        <li>（2）局部注册     注意写在export default内部，components:{FooterNav}</li>
        <li> （3）使用组件     footer-nav  footer-nav 注意命名，驼峰法定义的组件FooterNav需在使用时用短横线连接  footer-nav</li>
    </ul>
    
  </div>
</template>
<script>
import FooterNav from "../../components/footer";
export default {
  name: "index",
  data() {
    return {
      isindex: "true"
    };
  },
  components: { FooterNav }
};
</script>
<style scoped>
  .index{
      color: blueviolet
  }
</style>

