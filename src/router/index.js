//路由文件
import Vue from "vue";

import VueRouter from "vue-router";


Vue.use(VueRouter);

export const routerMap = [
    {
        path:"./",
        redirect:() => {
            return{ path:'/index'}
        }
    },
    {
        path:"/index",
        name:"index",
        component: () => import("@/components/HelloWorld")
    },
    {
        path:'./button',
        name:"button",
        component:() => import("@/views/button")
    }

]

let router = new VueRouter({
    routes:routerMap
});

  export default router;