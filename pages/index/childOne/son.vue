<template>
    <div>
      <h3>childOne中的嵌套子路由页面</h3>
      <nuxt-child/>
    </div>
</template>

<script>
    export default {
        name: "son",
        layout(content){
          console.log(content);
          return null
        }
    }
</script>

<style scoped>

</style>
