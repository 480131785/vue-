<template>
  <div class="page-my">
      <h1>我是个人页面</h1>
  </div>
</template>

<script>
export default {
    name:"My",
    beforeRouteLeave(to,from,next){
      if(window.confirm("你确定离开吗？")){
        next();
      }
    }
}
</script>

<style>

</style>