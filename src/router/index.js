//*==路由文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const User = {
    template: '<div>User {{ $route.params.id }}</div>',
}


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
    },
    { 
        path: '/input',
        name: "input",
        component: () => import('@/views/input')
    },
    { 
        path: '/button',
        name: "button",
        component: () => import('@/views/button')
    },
]


let router = new VueRouter({
    routes: routerMap
});


export default router;