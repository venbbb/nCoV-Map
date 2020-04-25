import Vue from 'vue'
import VueRouter from 'vue-router'
const ChinaMap =()=> import('../views/chinaMap')
const ChinaMap1 =()=> import('../views/chinaMap1')
const GlobalMap =()=> import('../views/globalMap')
const GlobalMap1 =() => import('../views/globalMap1')

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/chinamap1'
    },
    {
        path: '/chinamap',
        component:ChinaMap
    },
    {
        path:'/chinamap1',
        component:ChinaMap1
    },
    {
        path:'/globalmap',
        component:GlobalMap
    },
    {
        path:'/globalmap1',
        component:GlobalMap1
    }

]

const router =  new VueRouter({
    routes,
    mode:'history'
})

export default router
