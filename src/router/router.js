import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChatView from '@/views/ChatView.vue';
import AdminView from '@/views/AdminView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/chat', component: ChatView },
  { path: '/admin', component: AdminView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

