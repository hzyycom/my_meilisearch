<template>
  <head>
    <title> 聚搜通义 </title>
  </head>

  <div>

    <!-- <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about"> about </RouterLink> -->
   
  <MeiliSearch host="https://weipaitang.online/search"></MeiliSearch>




  </div>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>


</template>

<script>
import MeiliSearch from "../components/MeiliSearch.vue";
// import Menu from "../components/Menu";

export default {
  name: "App",
  components: {
    MeiliSearch
  },
};
</script>


