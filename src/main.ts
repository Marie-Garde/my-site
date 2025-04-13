import '@/assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import router from './router';

const app = createApp(App);
app.use(VueSmoothScroll);
app.use(router);

app.mount('#app');
