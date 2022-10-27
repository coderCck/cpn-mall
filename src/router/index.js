//*==路由文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


export const routerMap = [
    {
        path: "./",
        redirect: () => {
            // 方法接收目标路由作为参数
            // return 重定向的字符串路径/路径对象
            return { path: '/index' }
        },
    },
    {
        path: "/index",
        name: "index",
        component: () => import('@/components/HelloWorld')
    }
]


let router = new VueRouter({
    routes: routerMap
});


export default router;