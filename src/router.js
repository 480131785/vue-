import Vue from "vue";
import VueRouter from "vue-router"
import Home from "./views/Home";
import Films from "./views/Home/Films";
import Cinemas from "./views/Home/Cinemas";
import My from "./views/Home/My";
import City from "./views/City";
import Information from "./views/Information";
import Login from "./views/Login";
import Search from "./views/Search";

// 引入nprogress插件及css
import nprogress from "nprogress";
import "nprogress/nprogress.css"
nprogress.configure({ showSpinner: false }); 

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            children:[
                {
                    path:'films',
                    component:Films
                },
                {
                    path:'cinemas',
                    component:Cinemas,
                    beforeEnter:(to,from,next) => {
                        console.log("beforeEnter")
                        next();
                    },
                    meta:{
                        needLogin:true
                    }
                },
                {
                    path:'my',
                    component:My,
                    meta:{
                        needLogin:true
                    }
                },
                {
                    path:"",
                    redirect:"/films"
                }
            ]
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/information',
            component:Information
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/search',
            component:Search
        }
    ]
});

// 这三个路由守卫在每个路由触发的时候调用
// 全局前置
router.beforeEach((to,from,next) => {
    let path = to.fullPath;
    console.log("beforEach")
    nprogress.start();
    // if(to.meta.needLogin){
    //     if(window.isLogined){
    //         next()
    //     }else{
    //         next({
    //             path:"/login",
    //             query:{
    //                 redirect:to.fullPath
    //             }
    //         })
    //     }
    // }else{
    //     next();
    // }

    if(to.meta.needLogin && !window.isLogined){
        next({
            path:"/login",
            query:{
                redirect:to.fullPath
            }
        })
    }else{
        next();
    }
})
// 全局解析
router.beforeResolve((to,from,next) => {
    console.log("beforeResolve")
    next();
})
// 全局后置
router.afterEach((to,from) => {
    console.log("afterEach")
    nprogress.done();
})

export default router;