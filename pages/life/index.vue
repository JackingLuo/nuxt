<template>
  <div class="body">
      <ul class="imgsBox">
        <li v-for="(img,index) in imageList" :key="index"><img v-lazy="img" @click="showImgs(index,$event)"></li>
      </ul>
  </div>
</template>

<script>
  import { ImagePreview } from 'vant';
    export default {
      middleware: 'auth',
      layout: 'myLayout',
      head() {
        return {
          title: "生活照片",
        };
      },
      data(){
        return{
          isPhone:false,
          imageList:[
            "/myWife/1.jpg",
            "/myWife/2.jpg",
            "/myWife/3.jpg",
            "/myWife/4.jpg",
            "/myWife/5.jpg",
            "/myWife/6.jpg",
          ]
        }
      },
      created(){
        //判定是否是手机
        if(document.documentElement.offsetWidth>992){
          this.isPhone = false;
        }else{
          this.isPhone = true;
        }
      },
      methods:{
        showImgs(index,e){
          if(this.isPhone){
            let arr = this.imageList;
            ImagePreview({
              images: arr,
              startPosition: index,
              onClose() {
                // do something
              }
            });
          }else{
            //是pc
          }
        }
      }
    }
</script>

<style scoped>
  .body{
    width: 700px;
  }
  .imgsBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .imgsBox li{
    width: 33.3%;
    padding: 10px;
  }
  .imgsBox li img{
    width: 100%;
    height: auto;
  }

  /*媒体查询显示隐藏*/
  /*如果是手机或者平板*/
  @media screen and (max-width:992px){
    .body{
      width: 100%;
    }
    .imgsBox{
      display: block;
    }
    .imgsBox li{
      width: 100%;
    }
  }
</style>
