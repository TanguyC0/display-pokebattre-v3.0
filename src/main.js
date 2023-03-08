import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

i18n(createApp(App)).use(router).mount('#app');