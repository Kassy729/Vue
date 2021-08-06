import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Menus from '@/components/Menus.vue'
import Events from '@/components/Events.vue'
import Reviews from '@/components/Reviews.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/', component:Home},
        {path:'/menus', component:Menus},
        {path:'/events', component:Events},
        {path:'/reviews', component:Reviews}
    ]
});
