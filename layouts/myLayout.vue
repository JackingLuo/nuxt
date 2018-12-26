<template>
  <div class="layout">
    <!--左定位-->
    <div class="left">
      <div class="header">
        <img src="../static/me.png"  width="100">
      </div>
      <ul>
        <li><nuxt-link :to="{path:'/'}"><img src="../static/home.png" width="18">博客首页</nuxt-link></li>
        <li><nuxt-link :to="{path:'/life'}"><img src="../static/life.png" width="18">生活照片</nuxt-link></li>
        <li><nuxt-link :to="{path:'/article'}"><img src="../static/word.png" width="18">一些文章</nuxt-link></li>
        <li><nuxt-link :to="{path:'/about'}"><img src="../static/me.png" width="18">关于博主</nuxt-link></li>
      </ul>
    </div>
    <!--上定位-->
    <div class="title" ref="title">
      <span>欢迎来到我的博客!</span>
      <div class="titLeft" @click="showLeft">
        <img src="../static/more.png" v-show="isShow">
        <van-icon name="cross" size="25px"  v-show="!isShow"/>
      </div>
      <div class="titRight"></div>
    </div>
    <!--右边内容-->
    <div class="right" ref="right">
      <div class="pages">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myLayout",
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      showLeft(){
        if(this.isShow){
          this.$refs.right.style.transform = "translateX(300px)";
          this.$refs.title.style.transform = "translateX(300px)";
          this.isShow = false;
        }else{
          this.$refs.right.style.transform = "translateX(0)";
          this.$refs.title.style.transform = "translateX(0)";
          this.isShow = true;
        }

      }
    }
  }
</script>

<style scoped>
  body,html{
    width: 100%;
    height: 100%;
  }
  .layout{
    width:100% ;
    overflow: hidden;
    height: 100%;
  }
  .left{
    width: 300px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    background-image: url("../static/6559253e7c4e2fd.jpg");
    background-size: cover;
    padding-top: 12%;
    text-align: center;
  }
  .left .header{
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .left a{
    color: #fff;
  }
  .left ul li{
    margin-bottom: 25px;
  }
  .left ul li img{
    margin-right: 10px;
  }
  .right{
    width: 100%;
    transform: translateX(300px);
    background-color: #fff;
    transition: all 0.3s ease 0s ;
  }
  .title{
    width: 100%;
    height: 50px;
    display: none;
    text-align: center;
    background-color: #000;
    color: #fff;
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease 0s ;
    z-index: 1;
  }
  .titLeft{
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-35%);
  }
  .titLeft img{
    width: 25px;
  }
  .titRight{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 18px;
  }
  .titRight img{
    width:40px;
  }
  .pages{
    box-sizing: border-box;
    padding:0 10px;
  }
  /*媒体查询显示隐藏*/
  /*如果是手机或者平板*/
  @media screen and (max-width:992px){
    .right{
      transform: translateX(0);
      min-height: 750px;
      margin-top: 50px;
    }
    .title{
      display: block;
    }
  }

</style>


