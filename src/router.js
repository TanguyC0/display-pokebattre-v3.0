import { createRouter, createWebHistory } from 'vue-router';
// importe composent used in routes
import Home from './page/Home.vue';
import Adventure from './page/Adventure.vue';
import Dashboard from './page/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/adventure', component: Adventure},
        { path: '/dashboard', component: Dashboard},
        
    ]
});

export default router;