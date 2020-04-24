import Vue from 'vue'
import VueRouter from 'vue-router'
const ChinaMap =()=> import('../views/chinaMap')
const ChinaCurrent =()=> import('../views/chinaCurrent')
const GlobalMap =()=> import('../views/globalMap')
const GlobalCurrent =() => import('../views/globalCurrent')

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/chinamap'
    },
    {
        path: '/chinamap',
        component:ChinaMap
    },
    {
        path:'/chinacurrent',
        component:ChinaCurrent
    },
    {
        path:'/globalmap',
        component:GlobalMap
    },
    {
        path:'/globalcurrent',
        component:GlobalCurrent
    }

]

const router =  new VueRouter({
    routes,
    mode:'history'
})

export default router
