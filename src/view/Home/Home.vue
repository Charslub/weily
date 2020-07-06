<template>
  <div class="home">
    我是首页
    <button @click="isShow=!isShow">登录</button>
    <Login :is-show="isShow"></Login>

  </div>
</template>

<script>

  import Login from "../../components/Login";
  export default {
    name: "Home",
    data() {
      return {
        isShow: false
      }
    },
    components:{
      Login
    }
  }
</script>

<style scoped>

</style>