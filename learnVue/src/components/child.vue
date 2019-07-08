<template>
    <div >
            {{ message }} (子组件child)        
              {{ msg }} (子组件child)     
    </div>
</template>

<script>
export default {
    // props:{
    //     message:String,  // 定义传值的类型 在父组件home 中，引入子组件，并传入子组件内需要的值

    // }
    props:['message','msg']  // 也可以
}
</script>