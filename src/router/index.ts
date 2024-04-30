import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';

const routes: RouteRecordRaw[] = [
  ...setupLayouts(generatedRoutes)
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
