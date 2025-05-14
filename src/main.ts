import '@/assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import router from './router';
import { createHead } from '@vueuse/head';

const app = createApp(App);
app.use(VueSmoothScroll);
app.use(router);

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Marie Garde';
  document.title = (to.meta.title as string) || defaultTitle;
  next();
});

const head = createHead();
app.use(head);

app.mount('#app');
