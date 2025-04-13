import { createRouter, createWebHistory } from 'vue-router';
import { RoutesName } from '@/routes/routeName';
import { RoutesPath } from '@/routes/routePath';
import Home from '@/views/Home.vue';
import Legal from '@/views/Legal.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutesPath.HOME,
      name: RoutesName.HOME,
      component: Home,
    },
    {
      path: RoutesPath.LEGAL,
      name: RoutesName.LEGAL,
      component: Legal,
    },
  ],
});

export default router;
