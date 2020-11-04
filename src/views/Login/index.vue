<template>
  <div class="page-login">
      <h1>我是登录页面</h1>
      <button @click = "handleLogin">点击登录</button>
  </div>
</template>

<script>
export default {
    name:"Login",
    methods:{
      handleLogin(){
        window.isLogined = true;
        
      let redirect = this.$route.query.redirect || "/";
      this.$router.replace(redirect)
      }
    }
}
</script>

<style>

</style>