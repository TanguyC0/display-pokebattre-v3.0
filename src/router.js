import { createRouter, createWebHistory } from 'vue-router';
// importe composent used in routes
import Home from './page/Home.vue';
import Adventure from './page/Adventure.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/adventure', component: Adventure}
        
    ]
});

export default router;