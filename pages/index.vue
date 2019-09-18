<template>
  <div class="body">
    <p>首页</p>
  </div>
</template>

<script>
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

</style>


