<template>
  <div>
    <!-----错误显示页面--------当路由跳转错误没有页面对应页面显示时,出现这个错误页面来提示用户----->
    <h2 v-if="error.statusCode===404">404页面不存在</h2>
    <h2 v-else>500服务器错误</h2>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
    export default {
      props:['error'],
    }
</script>

<style scoped>

</style>
