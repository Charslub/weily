<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import  {request} from "./network";

export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted() {
    // request('/getArticles').then(res=>{
    //   console.log(res);
    // })
  }
}
</script>

<style>

</style>
