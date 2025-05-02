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
      meta: { title: 'Marie Garde - Accueil' },
    },
    {
      path: RoutesPath.LEGAL,
      name: RoutesName.LEGAL,
      component: Legal,
      meta: { title: 'Marie Garde - Mentions légales' },
    },
  ],
});

export default router;
