<template>
    <div id="app">
         npm install vue-schart -S
         <el-button type="primary" icon="el-icon-edit"  @click="()=>{ this.$router.push('/') }"  >返回</el-button>
        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
        ></schart>
       
         <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :data="data" type="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :data="data" type="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Vue from 'vue'
import Schart from 'vue-schart';
// Vue.use(Schart);

export default {
    data() {
        return {
            canvasId: 'myCanvas',
            type: 'line',
            width: 400,
            height: 500,
            data: [
                {name: '2014', value: 842},
                {name: '2015', value: 2123},
                {name: '2016', value: 1654},
                {name: '2017', value: 1795},
                {name: '2017', value: 1795},
                {name: '2017', value: 1795},
            ],
            options: {
               
                 title: '最近七天出货量',
                    fillColor: '#FC6FA1',
                    axisColor: '#008ACD',
                    contentColor: '#EEEEEE',
                    bgColor: '#F5F8FD',
                    bottomPadding: 30,
                    topPadding: 30
            },
            options2: {
                    title: '最近七天出货量',
                    fillColor: '#FC6FA1',
                    axisColor: '#008ACD',
                    contentColor: '#EEEEEE',
                    bgColor: '#F5F8FD',
                    bottomPadding: 30,
                    topPadding: 30
                }
        }
    },
    components:{
        Schart  // 这种注册相当于Vue.use(Schart)
    }
}
</script>