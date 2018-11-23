<template>
 <div class="body">
   <div> <span><Button type="primary">Primary</Button></span><span>这是首页</span></div>
   <div>
     <p><nuxt-link :to="{path:'/'}">首页</nuxt-link></p>
     <p><nuxt-link :to="{path:'/Login'}">登录</nuxt-link></p>
     <p><nuxt-link :to="{path:'/childOne'}">childOne的index</nuxt-link></p>
     <p><nuxt-link :to="{path:'/childOne/son'}">childOne的son文件夹下面的index</nuxt-link></p>
     <p><nuxt-link :to="{path:'/childOne/son/other'}">childOne的son文件夹下面的other</nuxt-link></p>
     <p><nuxt-link :to="{path:'/childTwo'}">childTwo</nuxt-link></p>
   </div>
   <!--<p><nuxt-link :to="{path:'/use'}">use</nuxt-link></p>-->
   <nuxt-child/>
 </div>
</template>

<script>
export default {
  components: {
  },
layout:"commonHead"
}
</script>

<style>

</style>

