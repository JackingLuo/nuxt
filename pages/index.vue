<template>
  <div class="body">
    <p>首页</p>
    <input type="file" @change="changeImg" ref="inputer">
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    layout: 'myLayout',
    head() {
      return {
        title: "博客首页"
      };
    },
    data(){
      return{
        inputList:[{
          value:123
        }]
      }
    },
    methods:{
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      changeImg(){
        /*
        * 以下注释为上传图片
        * */
        let inputDOM = this.$refs.inputer;
        let file =inputDOM.files[0];//上传的文件
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }; //添加请求头
        axios.post('http://localhost:8099/upload/image',param,config)
          .then(response=>{
            console.log(response.data);
        })

      },
      addLi(value){
        this.inputList.push({
          value:''
        })
      },
      delLi(value){
        this.inputList.splice(this.inputList.length-1,1)
      },
    }
  }
</script>

<style scoped>
  .someStyle{
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
</style>


