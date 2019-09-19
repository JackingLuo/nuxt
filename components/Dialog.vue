<template>
    <div>
      <h3 class="textH3">私人照片,需要验证密码!</h3>
      <van-cell-group>
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div class="btnBox">
        <van-button type="default" @click="goBack">返回</van-button>
        <van-button type="primary" @click="goIn">确认</van-button>
      </div>
    </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        password:"",
      };
    },

    methods: {
      goBack(){
        this.$router.push({path:"/"})
      },
      goIn(){
        axios.post('http://127.0.0.1:8099/checkPsd',{password:this.password}).then(res=>{
          if(res.data.succ){
            sessionStorage.setItem('hasLogin',"true")
            this.$router.push({path:'/life'})
          }else{
            this.$toast.fail(res.data.msg);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .textH3{
    margin-bottom: 15px;
  }
  .van-button--normal{
    padding: 0 40px;
    margin: 15px;
  }
</style>
