
<template>
  <!-- 搜索框 -->

  <MeiliSearch host="https://weipaitang.online/search"></MeiliSearch>
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
