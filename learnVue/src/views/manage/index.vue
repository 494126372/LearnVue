<template>
    <div class="manageindex"> 
         <button @click="add">新增</button>
         <button class="back" @click="back">backHome</button>
        <div  style="width:100%">
           <input type="text" v-model="txtname"  placeholder="请输入名称">
        </div>
        <table style="width:100%">
            <tr>
                <th>姓名</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item ,index) in peoples" 
            :key="item.name" 
            :value='item.name'>
                <td>{{ item.name }}</td>
                <td><span><button type='primary' >编辑</button>  <button :id='index' @click="deletes(index,event)">删除</button> </span></td>
            </tr>
        </table>
         <footernav></footernav>  
    </div>
</template>
<script>
import footernav from '../../components/footer'
export default {
    data(){
        return{

            peoples:[
                {name:"jack"},{name:"lisi"},{name:"wangwu"}
            ],
            txtname:"" //v-model指令是双向绑定，一般用于表单组件
        }
    },
    components:{ footernav },
    methods:{
        add(){
            var pop={name:this.txtname};
           this.peoples.push(pop);
        },
        deletes(index,e){
            this.peoples.splice(index,1);
        },
        back(){
            // this.$router.push('/') // push 后面可以是对象，也可以是字符串：
              this.$router.push({ path:'/'})
        }
    }
}
</script>
<style scoped>
 .manageindex{
     width: 30%;
     text-align: center;
     margin: 0 auto;
 }
</style>

