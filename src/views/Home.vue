
<template>
  <!-- 搜索框 -->

  <MeiliSearch host="http://liuriji.cn/search"></MeiliSearch>
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
