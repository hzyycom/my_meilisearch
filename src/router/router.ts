import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"), // 注意这里要带上 文件后缀.vue 
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/About.vue"), // 注意这里要带上 文件后缀.vue 
  }
  
]
// createRouter创建路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 最后导出。es6的模块化方式
export default router

