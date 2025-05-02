import '@/assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import router from './router';

const app = createApp(App);
app.use(VueSmoothScroll);
app.use(router);

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Marie Garde';
  document.title = to.meta.title || defaultTitle;
  next();
});

app.mount('#app');
