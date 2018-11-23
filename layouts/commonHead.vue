<template>
    <div class="layout">
      <!--自定义的布局-->
      <nuxt/>
      <!--<h1>这是一个公共的头,每个号添加了layouts的页面都会有这段文字!</h1>-->
      <!--<div>-->
        <!--<ul>-->
          <!--<li v-for="(item,index) in list" :key="index" v-text="item" @click="changeNum(index)"></li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
      name: "commonHead",
      data(){
          return{
            list: this.$store.state.list
          }
      },
      methods:{
        changeNum(index){
          this.$store.commit('change',index);
        }
      }
    }
</script>

<style scoped>
.layout{
  padding: 50px;
}
</style>
