<template>
  <head>
    <title> 财经速递 </title>
  </head>
  <meta name="baidu-site-verification" content="codeva-Dcf8ciG6SC" />
  <div>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->


    

    <RouterLink to="/">首页</RouterLink>
    <!-- <RouterLink to="/finance"> 财经</RouterLink> -->
    <RouterLink to="/about"> about </RouterLink>
  </div>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>


</template>

<script>

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8f5031152a68024ef140e21769b9f523";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>


