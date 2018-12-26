<template>
  <!--配合中间件的过渡页面-->
    <div class="body">
      <diaLog></diaLog>
    </div>
</template>

<script>
  import diaLog from "~/components/Dialog"
    export default {
      layout:"myLayout",
      name: "check",
      components:{diaLog},
    }
</script>

<style scoped>

</style>
