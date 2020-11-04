<template>
  <div class="page-cinemas">
      <h1>我是影院页面</h1>
  </div>
</template>

<script>
export default {
    name:"Cinemas",
    // 路由钩子函数
    beforeRouteLeave(to,from,next){
      console.log("beforeRouteLeave");
      next();
    },
    beforeRouteUpdate(to,from,next){
      // 两次路由都一样，但是url发生变化时触发
      console.log("beforeRouteUpdate");
      next();
    },
    beforeRouteEnter(to,from,next){
      console.log("beforeRouteEnter");
      next();
    }
}
</script>

<style>

</style>