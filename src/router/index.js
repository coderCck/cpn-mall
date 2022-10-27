//路由文件
import Vue from "vue";

import VueRouter from "vue-router";


Vue.use(VueRouter);

export const routerMap = [
    {
        path:"/index",
        components: () => import("@/components/HelloWorld")
    }

]
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//   ]

//   const approuter = router.createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: router.createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
//   })
let router = new VueRouter({
    routes:routerMap
});

  export default router;